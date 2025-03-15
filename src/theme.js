import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Poppins', sans-serif",
  },
  colors: {
    brand: {
      50: "#f5f0e5",
      100: "#e5dbc9",
      200: "#d4c5ab",
      300: "#c3af8c",
      400: "#b29a6e",
      500: "#a18450", // main brand color - warm wood shade
      600: "#8d6f46",
      700: "#795b3c",
      800: "#654732",
      900: "#513328",
    },
    accent: {
      50: "#f9e0e0",
      100: "#f3c2c2",
      200: "#eda4a4",
      300: "#e78686",
      400: "#e16868",
      500: "#db4a4a", // accent red - reference to tomatoes and oven fire
      600: "#c54242",
      700: "#af3a3a",
      800: "#993232",
      900: "#822a2a",
    },
    olive: {
      50: "#f2f5e9",
      100: "#e5ebd3",
      200: "#d8e0bd",
      300: "#cad6a6",
      400: "#bdcc90",
      500: "#afc27a", // green symbolizing freshness and Italian herbs
      600: "#9ba96c",
      700: "#87905e",
      800: "#737850",
      900: "#5f6042",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "500",
        borderRadius: "lg",
      },
      variants: {
        solid: {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
            transform: "translateY(-2px)",
            boxShadow: "lg",
          },
          _active: {
            bg: "brand.700",
            transform: "translateY(0)",
          },
          transition: "all 0.2s",
        },
        outline: {
          borderColor: "brand.500",
          color: "brand.500",
          _hover: {
            bg: "brand.50",
            transform: "translateY(-2px)",
            boxShadow: "md",
          },
          transition: "all 0.2s",
        },
        accent: {
          bg: "accent.500",
          color: "white",
          _hover: {
            bg: "accent.600",
            transform: "translateY(-2px)",
            boxShadow: "lg",
          },
          transition: "all 0.2s",
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "700",
        letterSpacing: "-0.5px",
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: "xl",
          overflow: "hidden",
          boxShadow: "md",
          transition: "all 0.3s ease",
          _hover: {
            boxShadow: "xl",
            transform: "translateY(-5px)",
          },
        },
      },
    },
    Badge: {
      baseStyle: {
        borderRadius: "0",
      },
      variants: {
        solid: {
          bg: "black",
          color: "white",
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.800",
      },
    },
  },
});

export default theme; 