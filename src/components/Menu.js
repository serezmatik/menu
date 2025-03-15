import React, { useRef } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Grid,
  Text,
  VStack,
  Flex,
  useBreakpointValue,
  Container,
  Badge,
  Tooltip,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFire, FaLeaf } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useLanguage } from '../context/LanguageContext';
import { useTranslations } from '../context/TranslationsContext';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const formatPrice = (price) => {
  const numericPrice = typeof price === 'string' ? parseFloat(price) : price;
  if (isNaN(numericPrice)) return `${price} PLN`;
  return `${numericPrice.toFixed(2)} PLN`;
};

const MenuItem = React.memo(({ item }) => {
  const { language } = useLanguage();
  const translations = useTranslations();
  const t = (key) => translations[language]?.[key] || translations.pl[key];
  
  // Funkcja pomocnicza do obsługi wielojęzycznych pól
  const getLocalizedValue = (field) => {
    if (typeof field === 'object' && (field.en || field.pl)) {
      return field[language] || field.pl; // fallback do polskiego
    }
    return field;
  };

  const { title, ingredients = '', price, vegetarian, spicy } = item;
  const localizedTitle = getLocalizedValue(title);
  const localizedIngredients = getLocalizedValue(ingredients);
  
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  
  // Safeguard toLowerCase method call against undefined
  const ingredientsLower = typeof localizedIngredients === 'string' ? localizedIngredients.toLowerCase() : '';
  
  // Determines if the product has vegetarian or spicy flag
  const isVegetarian = vegetarian || ingredientsLower.includes('vegańsk');
  const isSpicy = spicy || 
    ingredientsLower.includes('piccante') || 
    ingredientsLower.includes('chilli') ||
    ingredientsLower.includes('jalapeño');

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      whileHover={{ 
        y: -5,
        boxShadow: "xl",
        transition: { duration: 0.2 }
      }}
    >
      <Box
        p={6}
        borderRadius="xl"
        boxShadow="sm"
        bg="white"
        mb={4}
        _hover={{ 
          boxShadow: "lg",
        }}
        transition="all 0.3s ease"
        position="relative"
        overflow="hidden"
        borderWidth="1px"
        borderColor="gray.100"
      >
        {isSpicy && (
          <Box 
            position="absolute" 
            top={0} 
            right={0}
            bg="red.500"
            color="white"
            fontWeight="bold"
            fontSize="xs"
            px={2}
            py={1}
            borderBottomLeftRadius="md"
          >
            {t("spicy")}
          </Box>
        )}
        {isVegetarian && (
          <Box 
            position="absolute" 
            top={isSpicy ? 7 : 0} 
            right={0}
            bg="green.500"
            color="white"
            fontWeight="bold"
            fontSize="xs"
            px={2}
            py={1}
            borderBottomLeftRadius="md"
          >
            {t("vegetarian")}
          </Box>
        )}
        <VStack align="stretch" spacing={3}>
          <Flex justify="space-between" align="center">
            <Text
              fontSize="xl"
              fontWeight="700"
              letterSpacing="tight"
              color="brand.800"
              fontFamily="'Playfair Display', serif"
            >
              {localizedTitle}
            </Text>
            <Text
              fontSize="lg"
              fontWeight="700"
              color="brand.600"
              bg="brand.50"
              px={3}
              py={1}
              borderRadius="lg"
            >
              {formatPrice(price)}
            </Text>
          </Flex>
          
          <Text color="gray.600" fontSize="sm" minHeight="40px">
            {localizedIngredients}
          </Text>
        </VStack>
      </Box>
    </MotionBox>
  );
});

MenuItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    vegetarian: PropTypes.bool,
    spicy: PropTypes.bool,
  }).isRequired,
};

const SectionTitle = ({ category }) => {
  const { language } = useLanguage();
  const translations = useTranslations();
  const t = (key) => translations[language]?.[key] || translations.pl[key];
  
  // Funkcja pomocnicza do obsługi wielojęzycznych pól
  const getLocalizedValue = (field) => {
    if (typeof field === 'object' && (field.en || field.pl)) {
      return field[language] || field.pl; // fallback do polskiego
    }
    return field;
  };

  const localizedCategory = getLocalizedValue(category);
  
  return (
    <Heading
      as="h2"
      size="lg"
      mb={6}
      id={`category-header-${typeof localizedCategory === 'string' ? localizedCategory.toLowerCase().replace(/\s+/g, '-') : ''}`}
    >
      {localizedCategory}
    </Heading>
  );
};

const getDescriptionForCategory = (category, t) => {
  if (!t) return '';
  
  const categoryKey = typeof category === 'string' 
    ? category.toLowerCase().replace(/\s+/g, '')
    : (category.en || category.pl || '').toLowerCase().replace(/\s+/g, '');
    
  const descKey = `${categoryKey}Desc`;
  
  // Jeśli istnieje tłumaczenie dla tego opisu kategorii, użyj go
  if (t(descKey) !== descKey) {
    return t(descKey);
  }
  
  // W przeciwnym razie zwróć domyślny opis
  return '';
};

SectionTitle.propTypes = {
  category: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      en: PropTypes.string,
      pl: PropTypes.string
    })
  ]).isRequired,
};

const Menu = React.forwardRef(({ items }, ref) => {
  const sectionsRef = useRef({});
  const { language } = useLanguage();
  const translations = useTranslations();
  
  const t = (key) => translations[language]?.[key] || translations.pl[key];
  
  // Funkcja pomocnicza do obsługi wielojęzycznych pól
  const getLocalizedValue = (field) => {
    if (typeof field === 'object' && (field.en || field.pl)) {
      return field[language] || field.pl; // fallback do polskiego
    }
    return field;
  };
  
  // Grupowanie pozycji menu według kategorii
  const categories = items.reduce((acc, item) => {
    const localizedCategory = getLocalizedValue(item.category);
    if (!acc[localizedCategory]) {
      acc[localizedCategory] = [];
    }
    acc[localizedCategory].push(item);
    return acc;
  }, {});
  
  const columnsCount = useBreakpointValue({ base: 1, md: 2, lg: 2 });
  
  return (
    <Container maxW="container.xl" p={0} ref={ref}>
      {/* Displaying menu sections */}
      <AnimatePresence>
        {Object.entries(categories).map(([category, categoryItems]) => (
          <MotionBox 
            key={category} 
            mb={16}
            ref={(el) => (sectionsRef.current[category] = el)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            padding={6}
            borderRadius="xl"
            bg="white"
            boxShadow="sm"
          >
            <SectionTitle category={category} />
            <Grid
              templateColumns={`repeat(${columnsCount}, 1fr)`}
              gap={6}
            >
              {categoryItems.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </Grid>
          </MotionBox>
        ))}
      </AnimatePresence>
    </Container>
  );
});

Menu.displayName = "Menu";

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      ingredients: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default React.memo(Menu);
