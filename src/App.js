import React, { useState, useMemo, useEffect, useRef } from "react";
import { 
  ChakraProvider, 
  Box, 
  Container, 
  useColorModeValue, 
  VStack,
  Flex,
  Text,
  Heading,
  HStack,
  Grid,
  Image,
  Button,
  useToast,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  IconButton,
  Menu as ChakraMenu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import itemsSosnowiec from "./data/dataSosnowiec";
import itemsDabrowa from "./data/dataDabrowa";
import theme from "./theme";
import { FaFire, FaChevronUp } from "react-icons/fa";
import { GiStonePile, GiFullPizza } from "react-icons/gi";
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { TranslationsProvider, useTranslations } from './context/TranslationsContext';
import './styles/LanguageSwitcher.css';

const ALL_CATEGORY = { pl: "Wszystkie", en: "All" };
const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionAlert = motion(Alert);

// Main App component
const App = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);
  const [categories, setCategories] = useState([]);
  const [location, setLocation] = useState("");
  const [showWelcomeAnimation, setShowWelcomeAnimation] = useState(true);
  const [showPromoBanner, setShowPromoBanner] = useState(true);
  const [showRoomsBanner, setShowRoomsBanner] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showLocationBanner, setShowLocationBanner] = useState(false);
  const [locationName, setLocationName] = useState("");
  const { language, setLanguage } = useLanguage();
  const translations = useTranslations();
  
  // Funkcja pomocnicza do tłumaczeń
  const t = (key) => translations[language]?.[key] || translations.pl[key];
  
  // Referencja do sekcji z menu, do której będziemy przewijać
  const menuSectionRef = useRef(null);
  
  const toast = useToast();

  const bg = useColorModeValue("gray.50", "gray.900");

  // Welcome effect that disappears after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeAnimation(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  
  // Dodaj nasłuchiwanie na scrollowanie strony
  useEffect(() => {
    const checkScrollPosition = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', checkScrollPosition);
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);
  
  // Funkcja do przewijania na górę strony
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLocationChange = (loc) => {
    setLocation(loc);
    setLocationName(loc);
    const items = loc === "Sosnowiec" ? itemsSosnowiec : itemsDabrowa;
    
    setMenuItems(items);
    
    // Funkcja pomocnicza do porównywania kategorii
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
    
    // Wyodrębnij unikalne kategorie
    const uniqueCategories = items.reduce((acc, item) => {
      // Sprawdź czy kategoria już istnieje w akumulatorze
      const exists = acc.some(existingCat => areCategoriesEqual(existingCat, item.category));
      if (!exists) {
        acc.push(item.category);
      }
      return acc;
    }, []);
    
    setCategories([ALL_CATEGORY, ...uniqueCategories]);
    setActiveCategory(ALL_CATEGORY);
    
    // Pokaż baner z informacją o załadowaniu menu
    setShowLocationBanner(true);
    
    // Po 5 sekundach ukryj baner
    setTimeout(() => {
      setShowLocationBanner(false);
    }, 5000);
  };

  // Function to find h2 element with category header
  const scrollToCategoryHeader = (category) => {
    if (category === ALL_CATEGORY || 
        (typeof category === 'object' && (category.pl === ALL_CATEGORY.pl || category.en === ALL_CATEGORY.en))) {
      // If "all" is selected, scroll to top of menu section
      if (menuSectionRef.current) {
        menuSectionRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
      return;
    }

    // Give some time for components to render
    setTimeout(() => {
      // Find header element by ID
      const categoryId = typeof category === 'object' 
        ? `category-header-${(category[language] || category.pl || '').toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
        : `category-header-${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
      const categoryElement = document.getElementById(categoryId);
      
      if (categoryElement) {
        // Calculate sticky header height to offset scrolling
        const headerOffset = 160;
        
        const elementPosition = categoryElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        // Scroll to element with offset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Add highlight effect to header
        const headerText = categoryElement.querySelector('h2');
        if (headerText) {
          // Save original styles
          const originalColor = window.getComputedStyle(headerText).color;
          const originalTransform = window.getComputedStyle(headerText).transform;
          
          // Apply highlight effect
          headerText.style.transition = 'all 0.5s ease';
          headerText.style.color = '#db4a4a';
          headerText.style.transform = 'scale(1.05)';
          
          // Restore original styles after time
          setTimeout(() => {
            headerText.style.color = originalColor;
            headerText.style.transform = originalTransform;
          }, 1500);
        }
      }
      // Usuwam wyświetlanie komunikatu o błędzie, ponieważ przewijanie jest opcjonalne
    }, 300);
  };

  const filteredItems = useMemo(() => {
    const isAllCategory = category => {
      if (category === ALL_CATEGORY) return true;
      if (typeof category === 'object' && category.pl === ALL_CATEGORY.pl) return true;
      if (typeof category === 'object' && category.en === ALL_CATEGORY.en) return true;
      return false;
    };

    if (!activeCategory || isAllCategory(activeCategory)) {
      return menuItems;
    }
    
    return menuItems.filter(item => {
      if (typeof activeCategory === 'object' && typeof item.category === 'object') {
        return activeCategory.pl === item.category.pl || activeCategory.en === item.category.en;
      }
      if (typeof activeCategory === 'string' && typeof item.category === 'string') {
        return activeCategory === item.category;
      }
      if (typeof activeCategory === 'object' && typeof item.category === 'string') {
        return activeCategory.pl === item.category || activeCategory.en === item.category;
      }
      if (typeof activeCategory === 'string' && typeof item.category === 'object') {
        return activeCategory === item.category.pl || activeCategory === item.category.en;
      }
      return false;
    });
  }, [menuItems, activeCategory]);

  const filterItems = (category) => {
    setActiveCategory(category);
    
    // Hide promo banner after clicking on category (other than ALL)
    if (category !== ALL_CATEGORY) {
      setShowPromoBanner(false);
      setShowRoomsBanner(false);
    } else {
      setShowPromoBanner(true);
      setShowRoomsBanner(true);
    }
    
    // Scroll to appropriate category header
    scrollToCategoryHeader(category);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bg={bg}>
        <Header onLocationChange={handleLocationChange} currentLocation={location} />
        
        {/* Baner informujący o zmianie lokalizacji */}
        <AnimatePresence>
          {showLocationBanner && (
            <MotionAlert
              status="success"
              variant="solid"
              bg="green.500"
              color="white"
              textAlign="center"
              py={3}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              position="fixed"
              top="0"
              left="0"
              right="0"
              zIndex="1000"
            >
              <AlertIcon color="white" />
              <AlertTitle mr={2}>{t("menuFor")} {locationName} {t("location")}</AlertTitle>
              <AlertDescription>{t("menuLoaded")}</AlertDescription>
            </MotionAlert>
          )}
        </AnimatePresence>
        
        <Container maxW={{ base: "100%", lg: "6xl" }} pt={{ base: 20, md: 28 }} px={{ base: 4, md: 8 }}>
          {/* Welcome Animation */}
          <AnimatePresence>
            {showWelcomeAnimation && (
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                textAlign="center"
                mb={10}
              >
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  height="60vh"
                  direction="column"
                >
                  <MotionBox
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    mb={6}
                  >
                    <FaFire size={100} color="#db4a4a" />
                  </MotionBox>
                  <Heading
                    size="2xl"
                    textAlign="center"
                    fontFamily="'Playfair Display', serif"
                    fontWeight="bold"
                    color="brand.800"
                  >
                    Stonehenge
                  </Heading>
                  <Text
                    fontSize="xl"
                    color="brand.600"
                    textAlign="center"
                    mt={2}
                  >
                    {t("authenticPizza")}
                  </Text>
                </Flex>
              </MotionBox>
            )}
          </AnimatePresence>
          
          <AnimatePresence mode="wait">
            {location ? (
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Promotional banner */}
                <MotionBox 
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: showPromoBanner ? 1 : 0,
                    height: showPromoBanner ? "auto" : "0px",
                    marginBottom: showPromoBanner ? 8 : 0
                  }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  mb={showPromoBanner ? 8 : 0}
                  mt={4}
                  overflow="hidden"
                >
                  <Flex 
                    bg="brand.50" 
                    borderRadius="xl" 
                    p={6} 
                    alignItems="flex-start"
                    boxShadow="lg"
                    direction={{ base: "column", md: "row" }}
                    background="linear-gradient(90deg, rgba(245,240,229,1) 0%, rgba(225,215,191,1) 100%)"
                    position="relative"
                    overflow="hidden"
                    _after={{
                      content: '""',
                      position: 'absolute',
                      bottom: '0',
                      right: '0',
                      width: '150px',
                      height: '150px',
                      backgroundImage: 'radial-gradient(circle, rgba(219,74,74,0.1) 0%, rgba(255,255,255,0) 70%)',
                      borderRadius: '100%',
                      zIndex: '1',
                    }}
                  >
                    <Box 
                      position="relative"
                      mr={{ base: 0, md: 6 }}
                      mb={{ base: 4, md: 0 }}
                      minW={{ base: "100%", md: "120px" }} 
                      h={{ base: "120px", md: "120px" }}
                      display="flex"
                      justifyContent={{ base: "center", md: "flex-start" }}
                    >
                      <Box
                        position="absolute"
                        width="100px"
                        height="100px"
                        borderRadius="full"
                        bg="brand.100"
                        transform="scale(1.1)"
                      />
                      <Flex
                        justify="center"
                        align="center"
                        position="relative"
                        width="100px"
                        height="100px"
                      >
                        <FaFire size={48} color="#db4a4a" />
                      </Flex>
                    </Box>
                    <VStack align="start" spacing={3} w="full">
                      <Heading size={{ base: "md", md: "lg" }} color="brand.800" lineHeight="1.2">
                        {t("bestItalianColdCuts")}
                      </Heading>
                      <Text fontSize={{ base: "sm", md: "md" }} color="brand.600" lineHeight="1.5">
                        {t("coldCutsDescription")}
                      </Text>
                      <Box w="full">
                        <Heading size="sm" color="brand.700" mb={2}>
                          {t("availableSelection")}
                        </Heading>
                        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={3}>
                          <Box p={3} bg="white" borderRadius="md" boxShadow="sm" _hover={{ transform: "translateY(-2px)", boxShadow: "md" }} transition="all 0.2s">
                            <Text fontWeight="bold" fontSize="sm" color="brand.800">
                              {language === "pl" ? "Prosciutto Crudo" : "Prosciutto Crudo"}
                            </Text>
                            <Text fontSize="xs" color="gray.600">
                              {language === "pl" 
                                ? "Wyjątkowa szynka z wyselekcjonowanych udek wieprzowych, dojrzewająca przez minimum 12 miesięcy" 
                                : "Exceptional ham from selected pork legs, aged for at least 12 months"}
                            </Text>
                          </Box>
                          <Box p={3} bg="white" borderRadius="md" boxShadow="sm" _hover={{ transform: "translateY(-2px)", boxShadow: "md" }} transition="all 0.2s">
                            <Text fontWeight="bold" fontSize="sm" color="brand.800">
                              {language === "pl" ? "Prosciutto Cotto" : "Prosciutto Cotto"}
                            </Text>
                            <Text fontSize="xs" color="gray.600">
                              {language === "pl"
                                ? "Miękka i delikatna szynka z wyselekcjonowanych udźców wieprzowych. Słodki, łagodny smak"
                                : "Soft and delicate ham from selected pork legs. Sweet, mild flavor"}
                            </Text>
                          </Box>
                          <Box p={3} bg="white" borderRadius="md" boxShadow="sm" _hover={{ transform: "translateY(-2px)", boxShadow: "md" }} transition="all 0.2s">
                            <Text fontWeight="bold" fontSize="sm" color="brand.800">
                              {language === "pl" ? "Napoli" : "Napoli"}
                            </Text>
                            <Text fontSize="xs" color="gray.600">
                              {language === "pl"
                                ? "Tradycyjne salami z delikatnego mięsa wieprzowego, doprawione solą, białym winem i pieprzem. Rubinowy kolor i lekko wędzony aromat"
                                : "Traditional salami made from tender pork, seasoned with salt, white wine and pepper. Ruby color and lightly smoked aroma"}
                            </Text>
                          </Box>
                          <Box p={3} bg="white" borderRadius="md" boxShadow="sm" _hover={{ transform: "translateY(-2px)", boxShadow: "md" }} transition="all 0.2s">
                            <Text fontWeight="bold" fontSize="sm" color="brand.800">
                              {language === "pl" ? "Pikantna Spianata" : "Spicy Spianata"}
                            </Text>
                            <Text fontSize="xs" color="gray.600">
                              {language === "pl"
                                ? "Wyraziste salami z wieprzowego mięsa, doprawione kruszoną papryczką chili. Intensywnie pikantny smak"
                                : "Expressive pork salami, seasoned with crushed chili peppers. Intensely spicy flavor"}
                            </Text>
                          </Box>
                          <Box p={3} bg="white" borderRadius="md" boxShadow="sm" _hover={{ transform: "translateY(-2px)", boxShadow: "md" }} transition="all 0.2s">
                            <Text fontWeight="bold" fontSize="sm" color="brand.800">
                              {language === "pl" ? "Bresaola" : "Bresaola"}
                            </Text>
                            <Text fontSize="xs" color="gray.600">
                              {language === "pl"
                                ? "Lekka i wykwintna wędlina z udźca wołowego, starannie dojrzewająca. Delikatna w smaku"
                                : "Light and exquisite cured beef from the leg, carefully aged. Delicate in taste"}
                            </Text>
                          </Box>
                          <Box p={3} bg="white" borderRadius="md" boxShadow="sm" _hover={{ transform: "translateY(-2px)", boxShadow: "md" }} transition="all 0.2s">
                            <Text fontWeight="bold" fontSize="sm" color="brand.800">
                              {language === "pl" ? "Guanciale" : "Guanciale"}
                            </Text>
                            <Text fontSize="xs" color="gray.600">
                              {language === "pl"
                                ? "Tradycyjny policzek wieprzowy dojrzewający przez 80 dni. Wyrazisty smak z nutą pieprzu, doskonały do carbonary"
                                : "Traditional pork cheek aged for 80 days. Distinctive flavor with a hint of pepper, perfect for carbonara"}
                            </Text>
                          </Box>
                        </Grid>
                      </Box>
                      <Text fontSize="sm" fontWeight="bold" color="accent.500" alignSelf="flex-end">
                        {t("askForDetails")}
                      </Text>
                    </VStack>
                  </Flex>
                </MotionBox>
                
                {/* Rooms booking banner */}
                <MotionBox 
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: showRoomsBanner ? 1 : 0,
                    height: showRoomsBanner ? "auto" : "0px",
                    marginBottom: showRoomsBanner ? 8 : 0
                  }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  mb={showRoomsBanner ? 8 : 0}
                  overflow="hidden"
                >
                  <Flex 
                    bg="white" 
                    borderRadius="xl" 
                    p={6} 
                    alignItems="flex-start"
                    boxShadow="lg"
                    direction={{ base: "column", md: "row" }}
                    backgroundImage="linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url('https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')"
                    backgroundSize="cover"
                    backgroundPosition="center"
                    borderTop="4px solid"
                    borderColor="brand.500"
                  >
                    <Box 
                      mr={{ base: 0, md: 6 }}
                      mb={{ base: 4, md: 0 }}
                      minW={{ base: "100%", md: "150px" }} 
                      textAlign="center"
                    >
                      <Heading 
                        size="md" 
                        color="brand.800" 
                        fontFamily="'Playfair Display', serif"
                        mb={3}
                      >
                        {t("apartments")}
                      </Heading>
                      <MotionBox
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "loop",
                        }}
                        display="inline-block"
                      >
                        <GiFullPizza size={60} color="#a18450" />
                      </MotionBox>
                    </Box>
                    <VStack align="stretch" spacing={4} w="full">
                      <Heading size="lg" color="brand.800" fontFamily="'Playfair Display', serif">
                        {t("bookStay")}
                      </Heading>
                      <Text fontSize="md" color="gray.700" lineHeight="tall">
                        {t("apartmentsDescription")}
                      </Text>
                      
                      {/* Amenities section */}
                      <Box
                        p={4}
                        bg="brand.50"
                        borderRadius="md"
                        mt={2}
                      >
                        <Heading size="sm" mb={3} color="brand.700">
                          {t("apartmentFeatures")}
                        </Heading>
                        <Text
                          whiteSpace="pre-line"
                          color="gray.700"
                          fontSize="sm"
                        >
                          {t("apartmentAmenities")}
                        </Text>
                      </Box>

                      {/* Locations section */}
                      <Box
                        p={4}
                        bg="gray.50"
                        borderRadius="md"
                        mt={2}
                      >
                        <Heading size="sm" mb={3} color="brand.700">{t("availableLocations")}</Heading>
                        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                          <Box 
                            p={4} 
                            bg="white" 
                            borderRadius="md" 
                            boxShadow="sm"
                            _hover={{ boxShadow: "md", transform: "translateY(-2px)" }}
                            transition="all 0.2s"
                            position="relative"
                            overflow="hidden"
                          >
                            <Box
                              position="absolute"
                              top={0}
                              right={0}
                              bg="brand.500"
                              color="white"
                              px={2}
                              py={1}
                              borderBottomLeftRadius="md"
                              fontSize="xs"
                              fontWeight="bold"
                            >
                              Sosnowiec
                            </Box>
                            <Heading size="xs" color="brand.800" mb={2}>
                              {language === "pl" ? "Apartament przy Stonehenge" : "Apartment at Stonehenge"}
                            </Heading>
                            <Text fontSize="sm" color="gray.600" mb={3} minHeight="40px">
                              {language === "pl" ? "Przytulny apartament w samym sercu miasta" : "Cozy apartment in the heart of the city"}
                            </Text>
                            <Button
                              as="a"
                              href="https://www.booking.com/hotel/pl/apartament-przy-stonehenge-sosnowiec.pl.html"
                              target="_blank"
                              size="sm"
                              colorScheme="brand"
                              width="full"
                            >
                              {t("checkAvailability")}
                            </Button>
                          </Box>

                          <Box 
                            p={4} 
                            bg="white" 
                            borderRadius="md" 
                            boxShadow="sm"
                            _hover={{ boxShadow: "md", transform: "translateY(-2px)" }}
                            transition="all 0.2s"
                            position="relative"
                            overflow="hidden"
                          >
                            <Box
                              position="absolute"
                              top={0}
                              right={0}
                              bg="brand.500"
                              color="white"
                              px={2}
                              py={1}
                              borderBottomLeftRadius="md"
                              fontSize="xs"
                              fontWeight="bold"
                            >
                              Dąbrowa Górnicza
                            </Box>
                            <Heading size="xs" color="brand.800" mb={2}>
                              {language === "pl" ? "Apartament nad Stonehenge" : "Apartment above Stonehenge"}
                            </Heading>
                            <Text fontSize="sm" color="gray.600" mb={3} minHeight="40px">
                              {language === "pl" ? "Elegancki apartament z widokiem na miasto" : "Elegant apartment with city views"}
                            </Text>
                            <Button
                              as="a"
                              href="https://www.booking.com/hotel/pl/apartament-nad-stonehenge.pl.html"
                              target="_blank"
                              size="sm"
                              colorScheme="brand"
                              width="full"
                            >
                              {t("checkAvailability")}
                            </Button>
                          </Box>

                          <Box 
                            p={4} 
                            bg="white" 
                            borderRadius="md" 
                            boxShadow="sm"
                            _hover={{ boxShadow: "md", transform: "translateY(-2px)" }}
                            transition="all 0.2s"
                            position="relative"
                            overflow="hidden"
                          >
                            <Box
                              position="absolute"
                              top={0}
                              right={0}
                              bg="brand.500"
                              color="white"
                              px={2}
                              py={1}
                              borderBottomLeftRadius="md"
                              fontSize="xs"
                              fontWeight="bold"
                            >
                              Sosnowiec
                            </Box>
                            <Heading size="xs" color="brand.800" mb={2}>
                              {language === "pl" ? "Apartamenty Stonehenge" : "Stonehenge Apartments"}
                            </Heading>
                            <Text fontSize="sm" color="gray.600" mb={3} minHeight="40px">
                              {language === "pl" ? "Luksusowe apartamenty w centrum" : "Luxury apartments in the city center"}
                            </Text>
                            <Button
                              as="a"
                              href="https://www.booking.com/hotel/pl/apartamenty-stonehenge.pl.html"
                              target="_blank"
                              size="sm"
                              colorScheme="brand"
                              width="full"
                            >
                              {t("checkAvailability")}
                            </Button>
                          </Box>

                          <Flex 
                            p={4} 
                            bg="brand.50" 
                            borderRadius="md" 
                            boxShadow="sm"
                            direction="column"
                            justify="center"
                            align="center"
                            textAlign="center"
                            position="relative"
                          >
                            <Heading size="xs" color="brand.800" mb={2}>
                              {t("bookDirectly")}
                            </Heading>
                            <Text fontSize="sm" color="brand.600" mb={3}>
                              {t("bestPrices")}
                            </Text>
                            
                          </Flex>
                        </Grid>
                      </Box>
                      
                      <Text fontSize="sm" color="gray.500" alignSelf="flex-end">
                        {t("pricesMayVary")}
                      </Text>
                    </VStack>
                  </Flex>
                </MotionBox>
                
                {/* Categories section with visual separation */}
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <Box 
                    bg="white" 
                    borderRadius="xl" 
                    boxShadow="sm"
                    p={6}
                    mb={8}
                  >
                    <VStack spacing={4} align="stretch">
                      <Flex 
                        justify="space-between" 
                        align="center"
                        borderBottom="2px solid"
                        borderColor="brand.50"
                        pb={4}
                      >
                        <Heading 
                          size="md" 
                          color="brand.800"
                          fontFamily="'Playfair Display', serif"
                        >
                          {t("menuCategories")}
                        </Heading>
                        <Text 
                          fontSize="sm" 
                          color="gray.500"
                          fontWeight="medium"
                        >
                          {t("chooseCategory")}
                        </Text>
                      </Flex>
                      
                      <Box>
                        <Categories
                          categories={categories}
                          activeCategory={activeCategory}
                          filterItems={filterItems}
                        />
                      </Box>
                    </VStack>
                  </Box>
                </MotionBox>
                
                <Menu items={filteredItems} ref={menuSectionRef} pt={8} />
              </MotionBox>
            ) : (
              <MotionBox
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="welcome-message"
              >
                <Box
                  textAlign="center"
                  p={8}
                  bg="white"
                  borderRadius="xl"
                  boxShadow="xl"
                  backgroundImage="linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')"
                  backgroundSize="cover"
                  backgroundPosition="center"
                  py={12}
                >
                  <Flex direction="column" align="center" mb={6}>
                    <Box
                      as="h2"
                      fontSize={{ base: "3xl", md: "4xl" }}
                      fontWeight="bold"
                      mb={4}
                      fontFamily="'Playfair Display', serif"
                      color="brand.800"
                    >
                      {t("welcomeHeader")}
                    </Box>
                  </Flex>
                  <Box
                    fontSize={{ base: "lg", md: "xl" }}
                    color="gray.700"
                    mb={8}
                  >
                    {t("chooseLocation")}
                  </Box>
                  <HStack spacing={4} justifyContent="center">
                    {["Sosnowiec", "Dąbrowa Górnicza"].map(loc => (
                      <MotionBox
                        key={loc}
                        whileHover={{ y: -4, boxShadow: "xl" }}
                        transition={{ duration: 0.2 }}
                      >
                        <Box
                          as="button"
                          bg="brand.500"
                          color="white"
                          fontWeight="600"
                          p={4}
                          px={8}
                          borderRadius="lg"
                          _hover={{ bg: "brand.600" }}
                          onClick={() => handleLocationChange(loc)}
                        >
                          {loc}
                        </Box>
                      </MotionBox>
                    ))}
                  </HStack>
                </Box>
              </MotionBox>
            )}
          </AnimatePresence>
        </Container>
        
        {/* Scroll to top button */}
        <AnimatePresence>
          {showScrollTop && (
            <MotionButton
              position="fixed"
              bottom="20px"
              right="20px"
              borderRadius="full"
              boxShadow="md"
              bg="brand.500"
              color="white"
              size="lg"
              onClick={scrollToTop}
              zIndex={20}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              _hover={{ bg: "brand.600", transform: "translateY(-2px)" }}
            >
              <FaChevronUp />
            </MotionButton>
          )}
        </AnimatePresence>
      </Box>
    </ChakraProvider>
  );
};

const AppWithProvider = () => (
  <TranslationsProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </TranslationsProvider>
);

export default AppWithProvider;
