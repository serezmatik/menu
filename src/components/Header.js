import React, { useContext } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Divider,
  Flex,
  useBreakpointValue,
  Image,
  Badge,
  Tooltip,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaFire, FaMapMarkerAlt } from "react-icons/fa";
import { LanguageContext } from "../App";
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const LocationButton = React.memo(({ location, onClick, isActive }) => (
  <MotionButton
    variant={isActive ? "solid" : "outline"}
    onClick={() => onClick(location)}
    size="lg"
    borderRadius="lg"
    borderWidth="2px"
    fontWeight="bold"
    _hover={{
      transform: "translateY(-2px)",
      boxShadow: "lg",
    }}
    transition="all 0.2s"
    bg={isActive ? "brand.500" : "transparent"}
    color={isActive ? "white" : "brand.700"}
    borderColor="brand.500"
  >
    {location}
  </MotionButton>
));

LocationButton.propTypes = {
  location: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

const LOCATIONS = ["Sosnowiec", "Dąbrowa Górnicza"];

const Header = React.memo(({ onLocationChange, currentLocation }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { language, setLanguage } = useLanguage();
  const t = (key) => translations[language][key] || key;

  return (
    <Box 
      as="header" 
      py={8} 
      mb={10}
      bg="white"
      boxShadow="0 2px 10px rgba(0,0,0,0.05)"
      borderRadius="xl"
    >
      <Container maxW="container.xl">
        <Flex 
          direction={{ base: "column", md: "row" }} 
          justify="space-between" 
          align={{ base: "center", md: "center" }}
          gap={{ base: 6, md: 0 }}
        >
          {/* Logo and title */}
          <Flex align="center" mb={{ base: 4, md: 0 }}>
            <MotionBox
              borderRadius="full"
              bg="brand.500"
              p={3}
              mr={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              boxShadow="md"
            >
              <FaFire size={28} color="white" />
            </MotionBox>
            <VStack align="start" spacing={0}>
              <Heading
                as="h1"
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="bold"
                color="brand.800"
                fontFamily="'Playfair Display', serif"
                letterSpacing="-1px"
              >
                Stonehenge
              </Heading>
            </VStack>
          </Flex>

          {/* Language switcher and location buttons */}
          <Flex align="center" gap={4}>
            <Menu placement="bottom-end" autoSelect={false}>
              <Tooltip label={language === "pl" ? "Zmień język" : "Change language"} placement="bottom">
                <MenuButton
                  as={Button}
                  variant="outline"
                  size="md"
                  fontWeight="bold"
                  color="brand.700"
                  borderColor="brand.500"
                  _hover={{ bg: "brand.50" }}
                  _active={{ bg: "brand.100" }}
                  aria-label={language === "pl" ? "Zmień język" : "Change language"}
                  leftIcon={<Box as="span" fontSize="lg">🌐</Box>}
                  px={4}
                >
                  {language === "pl" ? "Polski" : "English"}
                </MenuButton>
              </Tooltip>
              <MenuList
                minW="150px"
                shadow="lg"
                border="1px solid"
                borderColor="brand.100"
                p={1}
              >
                <MenuItem 
                  onClick={() => setLanguage("pl")}
                  bg={language === "pl" ? "brand.50" : "transparent"}
                  _hover={{ bg: "brand.50" }}
                  borderRadius="md"
                  p={3}
                >
                  <HStack spacing={3}>
                    <Box as="span" fontSize="lg">🌐</Box>
                    <Text fontWeight={language === "pl" ? "bold" : "normal"}>Polski</Text>
                  </HStack>
                </MenuItem>
                <MenuItem 
                  onClick={() => setLanguage("en")}
                  bg={language === "en" ? "brand.50" : "transparent"}
                  _hover={{ bg: "brand.50" }}
                  borderRadius="md"
                  p={3}
                >
                  <HStack spacing={3}>
                    <Box as="span" fontSize="lg">🌐</Box>
                    <Text fontWeight={language === "en" ? "bold" : "normal"}>English</Text>
                  </HStack>
                </MenuItem>
              </MenuList>
            </Menu>

            <HStack spacing={4}>
              {LOCATIONS.map((location) => (
                <LocationButton
                  key={location}
                  location={location}
                  onClick={onLocationChange}
                  isActive={currentLocation === location}
                />
              ))}
            </HStack>
          </Flex>
        </Flex>

        {/* Banner if location is selected */}
        {currentLocation && (
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            mt={6}
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              align="center"
              justify="center"
              bg="rgba(255, 248, 240, 0.9)"
              p={4}
              borderRadius="lg"
              boxShadow="sm"
              border="1px solid"
              borderColor="brand.100"
              backdropFilter="blur(8px)"
            >
              <Text
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="medium"
                color="brand.700"
                textAlign="center"
              >
                {t("viewingMenuFor")}
              </Text>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                ml={{ base: 0, md: 2 }}
                color="brand.800"
              >
                {currentLocation}
              </Text>
              <Box
                display={{ base: "none", md: "block" }}
                mx={4}
                h="24px"
                borderLeft="1px solid"
                borderColor="brand.200"
              />
              <HStack spacing={4} mt={{ base: 2, md: 0 }}>
                <FaMapMarkerAlt color="#718096" />
                <Text fontSize="sm" color="brand.600">
                  {currentLocation === "Sosnowiec" 
                    ? "8 Spółdzielcza St., Sosnowiec" 
                    : "7a Sobieskiego St., Dąbrowa Górnicza Center"}
                </Text>
                <Button 
                  size="sm" 
                  variant="outline"
                  colorScheme="brand"
                  as="a"
                  href={`https://maps.google.com/?q=Stonehenge+Pizza+${currentLocation === "Sosnowiec" ? "Spółdzielcza+8+Sosnowiec" : "Sobieskiego+7a+Dąbrowa+Górnicza"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  fontWeight="bold"
                  _hover={{
                    bg: "brand.500",
                    color: "white"
                  }}
                >
                  Map
                </Button>
              </HStack>
            </Flex>
          </MotionBox>
        )}
      </Container>
    </Box>
  );
});

Header.propTypes = {
  onLocationChange: PropTypes.func.isRequired,
  currentLocation: PropTypes.string,
};

export default Header;
