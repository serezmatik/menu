const menu = [
  {
    id: 1,
    title: "MARGHERITA",
    category: "pizza rossa",
    price: 32,
    ingredients: "peeled tomatoes | mozzarella fior di latte",
  },
  {
    id: 2,
    title: "COTTO",
    category: "pizza rossa",
    price: 37,
    ingredients:
      "peeled tomatoes | mozzarella fior di latte | prosciutto cotto",
  },
  {
    id: 3,
    title: "SALAME",
    category: "pizza rossa",
    price: 37,
    ingredients:
      "peeled tomatoes | mozzarella fior di latte | Napoli salami or spianata picante",
  },
  {
    id: 4,
    title: "POLLO",
    category: "pizza rossa",
    price: 39,
    ingredients:
      "peeled tomatoes | mozzarella fior di latte | chicken breast | red onion",
  },
  {
    id: 5,
    title: "SPINACI",
    category: "pizza rossa",
    price: 39,
    ingredients:
      "peeled tomatoes | mozzarella fior di latte | spinach | garlic | gorgonzola | egg yolk",
  },
  {
    id: 6,
    title: "ITALIAN",
    category: "pizza rossa",
    price: 39,
    ingredients:
      "peeled tomatoes | mozzarella fior di latte | sun-dried tomatoes | gorgonzola",
  },
  {
    id: 7,
    title: "CAPRICCIOSA",
    category: "pizza rossa",
    price: 41,
    ingredients:
      "peeled tomatoes | mozzarella fior di latte |  prosciutto cotto | mushrooms | artichokes",
  },
  {
    id: 8,
    title: "PARMA",
    category: "pizza rossa",
    price: 41,
    ingredients:
      "peeled tomatoes | mozzarella fior di latte |  prosciutto crudo | arugula | parmigiano reggiano | cherry tomatoes",
  },
  {
    id: 9,
    title: "GAMBERI",
    category: "pizza rossa",
    price: 41,
    ingredients:
      "peeled tomatoes | mozzarella fior di latte | shrimp | garlic | arugula | lemon zest",
  },
  {
    id: 10,
    title: "TONNO",
    category: "pizza rossa",
    price: 41,
    ingredients:
      "peeled tomatoes | mozzarella fior di latte | tuna | anchovies | red onion",
  },
  {
    id: 11,
    title: "DIAVOLO",
    category: "pizza rossa",
    price: 42,
    ingredients:
      "peeled tomatoes | mozzarella fior di latte | spianata picante | olives | jalapeno",
  },
  {
    id: 12,
    title: "FOCACCIA",
    category: "pizza bianco",
    price: 24,
    ingredients: "olive oil | rosemary ",
  },
  {
    id: 13,
    title: "MAMMA MIA",
    category: "pizza bianco",
    price: 37,
    ingredients:
      "mascarpone | mozzarella fior di latte | pine nuts | pear | honey",
  },
  {
    id: 14,
    title: "TOSCANA",
    category: "pizza bianco",
    price: 39,
    ingredients:
      "mozzarella fior di latte | mushrooms | arugula | artichokes | cherry tomatoes",
  },
  {
    id: 15,
    title: "QUATTRO FORMAGGI",
    category: "pizza bianco",
    price: 41,
    ingredients:
      "mozzarella fior di latte | gorgonzola | parmigiano reggiano | feta",
  },
  {
    id: 16,
    title: "PRIMAVERA",
    category: "pizza bianco",
    price: 49,
    ingredients:
      "peeled tomatoes | mozzarella fior di latte | burrata | Bresaola beef | arugula | parmigiano reggiano | cherry tomatoes",
  },
  {
    id: 26,
    title: "SHRIMPS WITH FOCACCIA",
    category: "Starters",
    price: 22,
    ingredients: "3 - pieces",
  },

  {
    id: 28,
    title: "FRESH TOMATO SOUP",
    category: "Soups",
    price: 16,
  },
  {
    id: 29,
    title: "CHICKEN BROTH WITH NOODLES",
    category: "Soups",
    price: 16,
    ingredients: "AVAILABLE ONLY ON SUNDAY",
  },

  {
    id: 21,
    title: "BEEF TENDERLOIN  ON A HOT PLATE",
    category: "Main Courses",
    price: 46,
    ingredients: "tomatoes | bread | rosemary and pepper olive oil",
  },

  {
    id: 35,
    title: "CAPRESE",
    category: "Salads",
    price: 31,
    ingredients:
      "parma ham | mozzarella cheese | tomato | olives | capers | parmigiano reggiano | red onion | basil pesto",
  },
  {
    id: 36,
    title: "WITH PEAR AND GORGONZOLA",
    category: "Salads",
    price: 31,
    ingredients:
      "gorgonzola cheese | pear | arugula | lamb's lettuce | pistachios | honey vinaigrette",
  },
  {
    id: 37,
    title: "WITH BEETROOT AND SHEEP CHEESE",
    category: "Salads",
    price: 31,
    ingredients:
      "arugula lettuce | baby spinach | beetroot | sheep cheese | walnuts | honey vinaigrette",
  },
  {
    id: 38,
    title: "CAESAR",
    category: "Salads",
    price: 33,
    ingredients:
      "grilled chicken and bacon | romaine lettuce | parmigiano reggiano | poached egg | Caesar dressing",
  },
  {
    id: 39,
    title: "WITH CHICKEN",
    category: "Salads",
    price: 33,
    ingredients:
      "grilled chicken breast | mixed greens | tomato | cucumber | bell pepper | olives | feta cheese | basil pesto | thousand island dressing",
  },
  {
    id: 40,
    title: "WITH TUNA",
    category: "Salads",
    price: 33,
    ingredients:
      "tuna | romaine lettuce | olives | red onion | anchovies | capers | egg | dressing",
  },
  {
    id: 41,
    title: "PRIMAVERA",
    category: "Salads",
    price: 37,
    ingredients:
      "burrata cheese | beef ham Bresaola | mixed greens | cherry tomatoes | pumpkin seeds | pomegranate seeds | lemon vinaigrette",
  },
  {
    id: 41.1,
    title: "BEEF TENDERLOIN CARPACCIO",
    category: "Salads",
    price: 38,
    ingredients: "beef tenderloin | arugula | capers | parmigiano reggiano",
  },
  {
    id: 42,
    title: "SPAGHETTI CARBONARA",
    category: "Pasta",
    price: 34,
    ingredients: "speck | garlic | fresh parsley | parmigiano reggiano ",
  },

  {
    id: 44,
    title: "TAGLIATELLE WITH CHICKEN",
    category: "Pasta",
    price: 35,
    ingredients: "cream sauce | gorgonzola",
  },

  {
    id: 46,
    title: "FARFALLE WITH SHRIMPS",
    category: "Pasta",
    price: 36,
    ingredients: "tomato sauce | garlic | chives",
  },

  {
    id: 34,
    title: "gnocchi",
    category: "for kids",
    price: 27,
    ingredients: "cream | raspberry sauce",
  },
  {
    id: 135,
    title: "TIRAMISU",
    category: "Dessert",
    price: 19,
  },

  {
    id: 50,
    title: "LEAF TEA",
    category: "hot drinks",
    price: 10,
    ingredients: "black | green | white | rooibos",
  },
  {
    id: 51,
    title: "ESPRESSO",
    category: "hot drinks",
    price: 9,
  },
  {
    id: 52,
    title: "BLACK COFFEE",
    category: "hot drinks",
    price: 9,
  },
  {
    id: 53,
    title: "WHITE COFFEE",
    category: "hot drinks",
    price: 10,
  },
  {
    id: 54,
    title: "CAPPUCCINO",
    category: "hot drinks",
    price: 11,
  },
  {
    id: 55,
    title: "LATTE MACCHIATO",
    category: "hot drinks",
    price: 13,
  },
  {
    id: 56,
    title: "ICED COFFEE",
    category: "hot drinks",
    price: 17,
  },
  {
    id: 57,
    title: "HOT CHOCOLATE",
    category: "hot drinks",
    price: 17,
  },
  {
    id: 63,
    title: "SPARKLING / STILL WATER CARAFE 0.5 L",
    category: "cold drinks",
    price: 10,
  },
  {
    id: 64,
    title: "SPARKLING / STILL WATER CARAFE 1 L",
    category: "cold drinks",
    price: 15,
  },
  {
    id: 65,
    title: "APPLE / ORANGE JUICE",
    category: "cold drinks",
    price: 9,
  },
  {
    id: 66,
    title: "FRESHLY SQUEEZED JUICE",
    category: "cold drinks",
    price: 15,
    ingredients: "apple | carrot | orange | grapefruit",
  },
  {
    id: 67,
    title: "Coca-Cola 0.25 L",
    category: "cold drinks",
    price: 11,
  },

  {
    id: 68,
    title: "APEROL SPRITZ",
    category: "drinks",
    price: 28,
    ingredients: "aperol | prosecco | soda water",
  },
  {
    id: 69,
    title: "MOJITO",
    category: "drinks",
    price: 27,
    ingredients: "white rum | lime | mint | brown sugar | crushed ice",
  },
  {
    id: 70,
    title: "CUBA LIBRE",
    category: "drinks",
    price: 26,
    ingredients: "dark rum | lime | cola",
  },
  {
    id: 71,
    title: "PINA COLADA",
    category: "drinks",
    price: 29,
    ingredients: "white rum | malibu | pineapple syrup | milk | crushed ice",
  },
  {
    id: 72,
    title: "SEX ON THE BEACH",
    category: "drinks",
    price: 28,
    ingredients: "malibu | vodka | peach syrup | grenadine | orange juice",
  },
  {
    id: 73,
    title: "TEQUILA SUNRISE",
    category: "drinks",
    price: 27,
    ingredients: "tequila silver | orange juice | grenadine",
  },
  {
    id: 74,
    title: "STONEHENGE COLLINS",
    category: "drinks",
    price: 29,
    ingredients: "gin | mint | lemon juice | crushed ice | tonic",
  },
  {
    id: 75,
    title: "VIRGIN MOJITO",
    category: "non-alcoholic drinks",
    price: 23,
    ingredients: "lime | mint | brown sugar | soda water",
  },
  {
    id: 76,
    title: "VIRGIN PINACOLADA",
    category: "non-alcoholic drinks",
    price: 23,
    ingredients: "pineapple syrup | coconut syrup | milk",
  },
  {
    id: 77,
    title: "SUNRISE",
    category: "non-alcoholic drinks",
    price: 23,
    ingredients: "orange juice | grapefruit juice | lemon juice | grenadine",
  },
  {
    id: 78,
    title: "SKY",
    category: "non-alcoholic drinks",
    price: 23,
    ingredients: "orange juice | lime juice | blue curacao | tonic",
  },
  {
    id: 81,
    title: "ZWIERZYNIEC PILS",
    category: "beers",
    price: 15,
    ingredients: "12 zł (0,3 l) / 15 zł (0,5 l)",
  },
  {
    id: 82,
    title: "ZWIERZYNIEC WITBIER",
    category: "beers",
    price: 15,
    ingredients: "12 zł (0,3 l) / 15 zł (0,5 l)",
  },
  {
    id: 82.5,
    title: "NON-ALCOHOLIC BEER",
    category: "beers",
    price: "15",
    ingredients: "0,5 l",
  },
  {
    id: 83,
    title: "HOMEMADE SEMI-DRY",
    category: "wines",
    price: "17/32",
    ingredients: "red or white 250ml/500ml",
  },
  {
    id: 84,
    title: "CHIANTI",
    category: "wines",
    price: "70",
    ingredients: "red | dry | 0.75 L",
  },
  {
    id: 85,
    title: "NERO D'AVOLA",
    category: "wines",
    price: "70",
    ingredients: "red | dry | 0.75 L",
  },
  {
    id: 86,
    title: "DOLCE NOVELLA",
    category: "wines",
    price: "15/85",
    ingredients: "red | semi-sweet | 100ml / 0.75 L",
  },
  {
    id: 87,
    title: "PROSECCO",
    category: "wines",
    price: "70",
    ingredients: "sparkling | white | dry | 0.75 L",
  },
  {
    id: 88,
    title: "Vodka",
    category: "Baczewski",
    price: "11",
  },
  {
    id: 89,
    title: "Cherry Liqueur",
    category: "Baczewski",
    price: "11",
  },
  {
    id: 90,
    title: "Piolunowka",
    category: "Baczewski",
    price: "11",
  },
  {
    id: 91,
    title: "Apricot Brandy",
    category: "Baczewski",
    price: "11",
  },
  {
    id: 92,
    title: "Walnut Liqueur",
    category: "Baczewski",
    price: "11",
  },
  {
    id: 93,
    title: "WHISKY",
    category: "alcoholic drinks",
    price: "15",
  },
  {
    id: 94,
    title: "GIN",
    category: "alcoholic drinks",
    price: "11",
  },
  {
    id: 95,
    title: "Suweren Vodka",
    category: "alcoholic drinks",
    price: "15",
  },
  {
    id: 96,
    title: "Ovovit Liqueur",
    category: "alcoholic drinks",
    price: "11",
  },
  {
    id: 97,
    title: "JACK DANIEL'S Whiskey",
    category: "alcoholic drinks",
    price: "19",
  },
  {
    id: 98,
    title: "TEQUILA SILVER",
    category: "alcoholic drinks",
    price: "18",
  },
  {
    id: 99,
    title: "TEQUILA GOLD",
    category: "alcoholic drinks",
    price: "19",
  },
  {
    id: 100,
    title: "JAMESON Whiskey",
    category: "alcoholic drinks",
    price: "16",
  },
  {
    id: 101,
    title: "MARTEL VSOP Cognac",
    category: "alcoholic drinks",
    price: "27",
  },
  {
    id: 102,
    title: "Rum",
    category: "alcoholic drinks",
    price: "15",
  },
  {
    id: 111,
    title: "Mulled Beer",
    category: "seasonal",
    price: "21",
  },
  {
    id: 112,
    title: "Mulled Wine",
    category: "seasonal",
    price: "20",
  },
];
export default menu;
