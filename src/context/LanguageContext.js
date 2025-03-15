import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

// Funkcja do wykrywania języka systemu
const detectSystemLanguage = () => {
  try {
    // Pobierz wszystkie możliwe źródła języka
    const browserLang = 
      navigator.language || 
      navigator.browserLanguage || 
      navigator.userLanguage || 
      navigator.systemLanguage;

    // Konwertuj do małych liter i usuń region (np. 'en-US' -> 'en')
    const normalizedLang = browserLang.toLowerCase().split('-')[0];
    
    // Sprawdź czy język jest angielski
    if (normalizedLang === 'en') {
      return 'en';
    }
    
    // Sprawdź listę preferowanych języków
    if (navigator.languages && navigator.languages.length > 0) {
      const preferredLang = navigator.languages[0].toLowerCase().split('-')[0];
      if (preferredLang === 'en') {
        return 'en';
      }
    }

    // Domyślnie zwróć polski
    return 'pl';
  } catch (error) {
    // W przypadku błędu zwróć polski
    console.warn('Nie udało się wykryć języka systemowego:', error);
    return 'pl';
  }
};

export const LanguageProvider = ({ children }) => {
  // Użyj wykrytego języka systemu jako wartości początkowej
  const [currentLanguage, setCurrentLanguage] = useState(detectSystemLanguage());

  const value = {
    language: currentLanguage,
    setLanguage: setCurrentLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext; 