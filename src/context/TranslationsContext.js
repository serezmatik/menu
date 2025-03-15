import React, { createContext, useContext } from 'react';

const translations = {
  pl: {
    authenticPizza: "Autentyczna włoska pizza z pieca opalanego drewnem",
    categoryNotFound: "Nie znaleziono kategorii",
    couldNotFindSection: "Nie można znaleźć sekcji",
    welcomeHeader: "Witamy w Stonehenge",
    chooseLocation: "Wybierz lokalizację",
    menuCategories: "Kategorie menu",
    pizzarossa: "Pizza Rossa",
    pizzabianco: "Pizza Bianco",
    starters: "Przystawki",
    soups: "Zupy",
    maincourses: "Dania główne",
    pasta: "Makarony",
    salads: "Sałatki",
    forkids: "Menu dla dzieci",
    dessert: "Desery",
    hotdrinks: "Napoje gorące",
    colddrinks: "Napoje zimne",
    drinks: "Napoje",
    "non-alcoholicdrinks": "Napoje bezalkoholowe",
    beers: "Piwa",
    wines: "Wina",
    baczewski: "Baczewski",
    alcoholicdrinks: "Napoje alkoholowe",
    seasonal: "Sezonowe",
    menuFor: "Menu dla",
    location: "lokalizacji",
    menuLoaded: "Menu zostało załadowane",
    bestItalianColdCuts: "Najlepsze wędliny prosto z serca Włoch",
    coldCutsDescription: "W naszej włoskiej trattorii serwujemy wyłącznie wędliny najwyższej jakości, sprowadzane bezpośrednio od Villani Salumi – renomowanego włoskiego producenta z ponad 100-letnią tradycją. Delektuj się produktami o niepowtarzalnym smaku i aromacie, które są esencją włoskiej kuchni. Teraz masz możliwość zabrać te wyjątkowe smaki do swojego domu!",
    availableSelection: "Dostępne wędliny",
    askForDetails: "Zapytaj obsługę o szczegóły i zamów swoje ulubione wędliny już dziś!",
    apartments: "Apartamenty Stonehenge",
    bookStay: "Odkryj komfort pobytu",
    apartmentsDescription: "Oprócz autentycznej włoskiej kuchni, zapraszamy do naszych komfortowych apartamentów. Każdy z nich został wyposażony z dbałością o najmniejsze detale, zapewniając domową atmosferę i wygodę. Nasze apartamenty to idealne miejsce do wypoczynku po dniu pełnym wrażeń. Goście mogą cieszyć się nie tylko bliskością naszej restauracji, ale także spokojną okolicą i prywatnością.",
    availableLocations: "Nasze lokalizacje",
    checkAvailability: "Sprawdź terminy",
    bookDirectly: "Rezerwacja bezpośrednia",
    bestPrices: "Gwarancja najlepszej ceny - o szczegóły zapytaj obsługę",
    pricesMayVary: "* Ceny mogą się różnić w zależności od terminu pobytu",
    apartmentFeatures: "W każdym apartamencie:",
    apartmentAmenities: "✓ Bezpłatne Wi-Fi\n✓ W pełni wyposażona kuchnia\n✓ Klimatyzacja\n✓ Bezpłatny parking\n✓ Pralka",
    chooseCategory: "Wybierz kategorię, aby zobaczyć dania"
  },
  en: {
    authenticPizza: "Authentic wood-fired Italian pizza",
    categoryNotFound: "Category not found",
    couldNotFindSection: "Could not find section",
    welcomeHeader: "Welcome to Stonehenge",
    chooseLocation: "Choose location",
    menuCategories: "Menu Categories",
    pizzarossa: "Pizza Rossa",
    pizzabianco: "Pizza Bianco",
    starters: "Starters",
    soups: "Soups",
    maincourses: "Main Courses",
    pasta: "Pasta",
    salads: "Salads",
    forkids: "Kids Menu",
    dessert: "Desserts",
    hotdrinks: "Hot Drinks",
    colddrinks: "Cold Drinks",
    drinks: "Drinks",
    "non-alcoholicdrinks": "Non-alcoholic Drinks",
    beers: "Beers",
    wines: "Wines",
    baczewski: "Baczewski",
    alcoholicdrinks: "Alcoholic Drinks",
    seasonal: "Seasonal",
    menuFor: "Menu for",
    location: "location",
    menuLoaded: "Menu has been loaded",
    bestItalianColdCuts: "Finest Cold Cuts from the Heart of Italy",
    coldCutsDescription: "In our Italian trattoria, we serve only the highest quality cold cuts, imported directly from Villani Salumi - a renowned Italian producer with over 100 years of tradition. Indulge in products with unique taste and aroma that are the essence of Italian cuisine. Now you can take these exceptional flavors to your home!",
    availableSelection: "Available Selection",
    askForDetails: "Ask our staff for details and order your favorite cold cuts today!",
    apartments: "Stonehenge Apartments",
    bookStay: "Discover comfort of stay",
    apartmentsDescription: "Beyond authentic Italian cuisine, we invite you to our comfortable apartments. Each has been equipped with attention to every detail, providing a homely atmosphere and convenience. Our apartments are the perfect place to relax after an eventful day. Guests can enjoy not only the proximity of our restaurant but also the peaceful surroundings and privacy.",
    availableLocations: "Our locations",
    checkAvailability: "Check dates",
    bookDirectly: "Direct booking",
    bestPrices: "Best price guarantee - ask our staff for details",
    pricesMayVary: "* Prices may vary depending on stay dates",
    apartmentFeatures: "Each apartment includes:",
    apartmentAmenities: "✓ Free Wi-Fi\n✓ Fully equipped kitchen\n✓ Air conditioning\n✓ Free parking\n✓ Washing machine",
    chooseCategory: "Choose a category to see dishes"
  }
};

const TranslationsContext = createContext();

export const TranslationsProvider = ({ children }) => {
  return (
    <TranslationsContext.Provider value={translations}>
      {children}
    </TranslationsContext.Provider>
  );
};

export const useTranslations = () => {
  const context = useContext(TranslationsContext);
  if (context === undefined) {
    throw new Error('useTranslations must be used within a TranslationsProvider');
  }
  return context;
};

export default TranslationsContext; 