import React, { useMemo, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Box,
  Flex,
  Icon,
  HStack,
  Tooltip,
  useBreakpointValue,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import debounce from 'lodash.debounce';
import { useLanguage } from '../context/LanguageContext';
import { useTranslations } from '../context/TranslationsContext';

const MotionButton = motion(Button);
const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

// Function to format and translate categories
const formatCategory = (category, t, language) => {
  if (!category) return '';
  
  // Sprawdź, czy kategoria jest obiektem z tłumaczeniami
  if (typeof category === 'object' && (category.en || category.pl)) {
    const translatedCategory = category[language] || category.pl;
    return translatedCategory ? translatedCategory.toUpperCase() : '';
  }
  
  // Jeśli to string, spróbuj przetłumaczyć przez context
  if (typeof category === 'string') {
    const categoryKey = category.toLowerCase().replace(/\s+/g, '');
    const translated = t ? t(categoryKey) : category;
    return translated ? translated.toUpperCase() : category.toUpperCase();
  }
  
  // Fallback dla innych przypadków
  return String(category).toUpperCase();
};

// Helper function to compare categories
const areCategoriesEqual = (cat1, cat2) => {
  if (typeof cat1 === 'object' && typeof cat2 === 'object') {
    return cat1.pl === cat2.pl || cat1.en === cat2.en;
  }
  if (typeof cat1 === 'string' && typeof cat2 === 'string') {
    return cat1.toLowerCase() === cat2.toLowerCase();
  }
  if (typeof cat1 === 'object' && typeof cat2 === 'string') {
    return cat1.pl === cat2 || cat1.en === cat2;
  }
  if (typeof cat1 === 'string' && typeof cat2 === 'object') {
    return cat1 === cat2.pl || cat1 === cat2.en;
  }
  return false;
};

const CategoryButton = React.memo(({ category, isActive, onClick }) => {
  const { language } = useLanguage();
  const translations = useTranslations();
  const t = (key) => translations[language]?.[key] || translations.pl[key];
  const formattedName = formatCategory(category, t, language);
  
  return (
    <Tooltip label={formattedName} placement="top" openDelay={500}>
      <MotionButton
        variant="ghost"
        bg={isActive ? "brand.500" : "white"}
        color={isActive ? "white" : "gray.700"}
        borderRadius="full"
        onClick={() => onClick(category)}
        fontSize={{ base: "sm", md: "md" }}
        fontWeight="600"
        letterSpacing="wide"
        minW="auto"
        height={{ base: "40px", md: "48px" }}
        px={4}
        mx={1}
        border="1px solid"
        borderColor={isActive ? "brand.500" : "gray.200"}
        _hover={{
          bg: isActive ? "brand.600" : "gray.50",
          transform: "translateY(-2px)",
          boxShadow: "md",
        }}
        _active={{
          bg: isActive ? "brand.700" : "gray.100",
          transform: "scale(0.95)",
        }}
        transition="all 0.2s"
        whileTap={{ scale: 0.95 }}
        whileHover={{ y: -2 }}
      >
        {formattedName}
      </MotionButton>
    </Tooltip>
  );
});

CategoryButton.propTypes = {
  category: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      en: PropTypes.string,
      pl: PropTypes.string
    })
  ]).isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const ScrollIndicator = ({ show, direction, onClick }) => (
  <Box
    position="absolute"
    top="50%"
    transform="translateY(-50%)"
    left={direction === "left" ? 0 : "auto"}
    right={direction === "right" ? 0 : "auto"}
    zIndex={2}
    opacity={show ? 1 : 0}
    transition="opacity 0.3s"
    pointerEvents={show ? "auto" : "none"}
  >
    <Button
      variant="solid"
      bg="rgba(255,255,255,0.9)"
      color="brand.700"
      borderRadius="full"
      size="sm"
      onClick={onClick}
      opacity={0.8}
      _hover={{ opacity: 1, bg: "white", boxShadow: "md" }}
      _active={{ transform: "scale(0.95)" }}
      boxShadow="sm"
      border="1px solid"
      borderColor="gray.100"
    >
      <Icon as={direction === "left" ? ChevronLeftIcon : ChevronRightIcon} boxSize={5} />
    </Button>
  </Box>
);

ScrollIndicator.propTypes = {
  show: PropTypes.bool.isRequired,
  direction: PropTypes.oneOf(["left", "right"]).isRequired,
  onClick: PropTypes.func.isRequired,
};

const Categories = ({ categories, activeCategory, filterItems }) => {
  const { language } = useLanguage();
  const translations = useTranslations();
  const t = (key) => translations[language]?.[key] || translations.pl[key];
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const bg = useColorModeValue('white', 'gray.800');

  // Effect for entrance animation
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  // Check if scroll arrows should be displayed
  const checkScrollIndicators = () => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    
    setShowLeftArrow(scrollLeft > 20);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
  };
  
  // Delayed checking of scroll arrows
  const debouncedCheckScrollIndicators = useMemo(
    () => debounce(checkScrollIndicators, 100),
    []
  );

  // Listen for scroll events
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', debouncedCheckScrollIndicators);
      // Initial check
      checkScrollIndicators();
      
      return () => {
        scrollContainer.removeEventListener('scroll', debouncedCheckScrollIndicators);
        debouncedCheckScrollIndicators.cancel();
      };
    }
  }, [debouncedCheckScrollIndicators]);

  // Scroll left/right
  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };
  
  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <MotionBox 
      position="sticky"
      top="80px"
      zIndex={10}
      bg={bg}
      py={4}
      boxShadow="sm"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.3 }}
    >
      <Text 
        fontWeight="bold" 
        fontSize="sm" 
        color="gray.500" 
        textAlign="center" 
        textTransform="uppercase"
        letterSpacing="wider"
        mb={2}
      >
        {t("menuCategories")}
      </Text>
      
      <Box position="relative">
        {!isMobile && (
          <>
            <ScrollIndicator 
              show={showLeftArrow} 
              direction="left" 
              onClick={handleScrollLeft}
            />
            <ScrollIndicator 
              show={showRightArrow} 
              direction="right" 
              onClick={handleScrollRight} 
            />
          </>
        )}
        
        <MotionFlex
          overflowX="auto"
          css={{
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            'scrollbarWidth': 'none'
          }}
          px={4}
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <HStack spacing={2} flex="0 0 auto">
            {categories.map((category) => (
              <MotionBox 
                key={typeof category === 'object' ? (category.pl || category.en) : category} 
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <CategoryButton
                  category={category}
                  isActive={areCategoriesEqual(activeCategory, category)}
                  onClick={filterItems}
                />
              </MotionBox>
            ))}
          </HStack>
        </MotionFlex>
      </Box>
    </MotionBox>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        en: PropTypes.string,
        pl: PropTypes.string
      })
    ])
  ).isRequired,
  activeCategory: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      en: PropTypes.string,
      pl: PropTypes.string
    })
  ]).isRequired,
  filterItems: PropTypes.func.isRequired,
};

export default React.memo(Categories);
