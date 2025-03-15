const menu = [
  {
    id: 1,
    title: {
      en: "MARGHERITA",
      pl: "MARGHERITA"
    },
    category: {
      en: "pizza rossa",
      pl: "PIZZA ROSSA"
    },
    price: 36,
    ingredients: {
      en: "peeled tomatoes | mozzarella fior di latte",
      pl: "pomidory pelati | mozzarella fior di latte"
    }
  },
  {
    id: 2,
    title: {
      en: "COTTO",
      pl: "COTTO"
    },
    category: {
      en: "pizza rossa",
      pl: "PIZZA ROSSA"
    },
    price: 39,
    ingredients: {
      en: "peeled tomatoes | mozzarella fior di latte | prosciutto cotto",
      pl: "pomidory pelati | mozzarella fior di latte | prosciutto cotto"
    }
  },
  {
    id: 3,
    title: {
      en: "SALAME",
      pl: "SALAME"
    },
    category: {
      en: "pizza rossa",
      pl: "PIZZA ROSSA"
    },
    price: 39,
    ingredients: {
      en: "peeled tomatoes | mozzarella fior di latte | Napoli salami or spianata picante",
      pl: "pomidory pelati | mozzarella fior di latte | salame napoli lub spianata picante"
    }
  },
  {
    id: 4,
    title: {
      en: "POLLO",
      pl: "POLLO"
    },
    category: {
      en: "pizza rossa",
      pl: "PIZZA ROSSA"
    },
    price: 41,
    ingredients: {
      en: "peeled tomatoes | mozzarella fior di latte | chicken breast | red onion",
      pl: "pomidory pelati | mozzarella fior di latte | pierś z kurczaka | cebula czerwona"
    }
  },
  {
    id: 5,
    title: {
      en: "SPINACI",
      pl: "SPINACI"
    },
    category: {
      en: "pizza rossa",
      pl: "PIZZA ROSSA"
    },
    price: 41,
    ingredients: {
      en: "peeled tomatoes | mozzarella fior di latte | spinach | garlic | gorgonzola | egg yolk",
      pl: "pomidory pelati | mozzarella fior di latte | szpinak | czosnek | gorgonzola | żółtko"
    }
  },
  {
    id: 6,
    title: {
      en: "ITALIAN",
      pl: "WŁOSKA"
    },
    category: {
      en: "pizza rossa",
      pl: "PIZZA ROSSA"
    },
    price: 41,
    ingredients: {
      en: "peeled tomatoes | mozzarella fior di latte | sun-dried tomatoes | gorgonzola",
      pl: "pomidory pelati | mozzarella fior di latte | suszone pomidory | gorgonzola"
    }
  },
  {
    id: 7,
    title: {
      en: "CAPRICCIOSA",
      pl: "CAPRICCIOSA"
    },
    category: {
      en: "pizza rossa",
      pl: "PIZZA ROSSA"
    },
    price: 43,
    ingredients: {
      en: "peeled tomatoes | mozzarella fior di latte | prosciutto cotto | mushrooms | artichokes",
      pl: "pomidory pelati | mozzarella fior di latte | prosciutto cotto | pieczarki | karczochy"
    }
  },
  {
    id: 8,
    title: {
      en: "PARMA",
      pl: "PARMA"
    },
    category: {
      en: "pizza rossa",
      pl: "PIZZA ROSSA"
    },
    price: 43,
    ingredients: {
      en: "peeled tomatoes | mozzarella fior di latte | prosciutto crudo | arugula | parmigiano reggiano | cherry tomatoes",
      pl: "pomidory pelati | mozzarella fior di latte | prosciutto crudo | rukola | parmigiano reggiano | pomidorki koktajlowe"
    }
  },
  {
    id: 9,
    title: {
      en: "GAMBERI",
      pl: "GAMBERI"
    },
    category: {
      en: "pizza rossa",
      pl: "PIZZA ROSSA"
    },
    price: 43,
    ingredients: {
      en: "peeled tomatoes | mozzarella fior di latte | shrimp | garlic | arugula | lemon zest",
      pl: "pomidory pelati | mozzarella fior di latte | krewetki | czosnek | rucola | skórka z cytryny"
    }
  },
  {
    id: 10,
    title: {
      en: "TONNO",
      pl: "TONNO"
    },
    category: {
      en: "pizza rossa",
      pl: "PIZZA ROSSA"
    },
    price: 43,
    ingredients: {
      en: "peeled tomatoes | mozzarella fior di latte | tuna | anchovies | red onion",
      pl: "pomidory pelati | mozzarella fior di latte | tuńczyk | anchois | czerwona cebula"
    }
  },
  {
    id: 11,
    title: {
      en: "DIAVOLO",
      pl: "DIAVOLO"
    },
    category: {
      en: "pizza rossa",
      pl: "PIZZA ROSSA"
    },
    price: 42,
    ingredients: {
      en: "peeled tomatoes | mozzarella fior di latte | spianata picante | olives | jalapeno",
      pl: "pomidory pelati | mozzarella fior di latte | spianata picantee | oliwki z pestką | jalapeno"
    }
  },
  {
    id: 12,
    title: {
      en: "FOCACCIA",
      pl: "FOCACCIA"
    },
    category: {
      en: "pizza bianco",
      pl: "PIZZA BIANCO"
    },
    price: 26,
    ingredients: {
      en: "olive oil | rosemary",
      pl: "oliwa extra vergine | rozmaryn | sól"
    }
  },
  {
    id: 13,
    title: {
      en: "MAMMA MIA",
      pl: "MAMMA MIA"
    },
    category: {
      en: "pizza bianco",
      pl: "PIZZA BIANCO"
    },
    price: 37,
    ingredients: {
      en: "mascarpone | mozzarella fior di latte | pine nuts | pear | honey",
      pl: "mozzarella fior di latte | orzeszki piniowe | gruszka | miód | mascarpone"
    }
  },
  {
    id: 14,
    title: {
      en: "TOSCANA",
      pl: "TOSCANA"
    },
    category: {
      en: "pizza bianco",
      pl: "PIZZA BIANCO"
    },
    price: 41,
    ingredients: {
      en: "mozzarella fior di latte | mushrooms | arugula | artichokes | cherry tomatoes",
      pl: "mozzarella fior di latte | pieczarki | rukola | karczochy | pomidorki koktajlowe"
    }
  },
  {
    id: 15,
    title: {
      en: "QUATTRO FORMAGGI",
      pl: "QUATTRO FORMAGGI"
    },
    category: {
      en: "pizza bianco",
      pl: "PIZZA BIANCO"
    },
    price: 43,
    ingredients: {
      en: "mozzarella fior di latte | gorgonzola | parmigiano reggiano | feta",
      pl: "mozzarella fior di latte | gorgonzola | parmigiano reggiano | feta"
    }
  },
  {
    id: 16,
    title: {
      en: "PRIMAVERA",
      pl: "PRIMAVERA"
    },
    category: {
      en: "pizza bianco",
      pl: "PIZZA BIANCO"
    },
    price: 51,
    ingredients: {
      en: "mozzarella fior di latte | burrata | Bresaola beef | arugula | parmigiano reggiano | cherry tomatoes",
      pl: "mozzarella fior di latte | burrata | szynka wołowa | rukola | parmigiano reggiano | pomidorki koktajlowe"
    }
  },
  {
    id: 26,
    title: {
      en: "SHRIMPS WITH FOCACCIA",
      pl: "KREWETKI Z FOCACCIĄ"
    },
    category: {
      en: "Starters",
      pl: "Startery"
    },
    price: 22,
    ingredients: {
      en: "3 - pieces",
      pl: "3 szt."
    }
  },
  {
    id: 28,
    title: {
      en: "FRESH TOMATO SOUP",
      pl: "KREM Z WŁOSKICH POMIDORÓW PELATI"
    },
    category: {
      en: "Soups",
      pl: "Zupy"
    },
    price: 16
  },
  {
    id: 29,
    title: {
      en: "CHICKEN BROTH WITH NOODLES",
      pl: "ROSÓŁ Z MAKARONEM"
    },
    category: {
      en: "Soups",
      pl: "Zupy"
    },
    price: 16,
    ingredients: {
      en: "AVAILABLE ONLY ON SUNDAY",
      pl: "TYLKO W NIEDZIELĘ!"
    }
  },
  {
    id: 19,
    title: {
      en: "PARMESAN CHICKEN",
      pl: "KURCZAK W PARMEZANIE"
    },
    category: {
      en: "Main Courses",
      pl: "Dania główne"
    },
    price: 38,
    ingredients: {
      en: "gnocchi with pesto | Italian cucumber salad",
      pl: "gnocchi z pesto | włoska mizeria"
    }
  },
  {
    id: 20,
    title: {
      en: "MILANESE PORK LOIN",
      pl: "SCHAB PO MEDIOLAŃSKU"
    },
    category: {
      en: "Main Courses",
      pl: "Dania główne"
    },
    price: 41,
    ingredients: {
      en: "tagliatelle pasta | grilled tomatoes | with spinach",
      pl: "makaron tagliatelle | grillowane pomidorki ze szpinakiem"
    }
  },
  {
    id: 21,
    title: {
      en: "BEEF TENDERLOIN ON A HOT PLATE",
      pl: "PLASTRY POLĘDWICY WOŁOWEJ NA GORĄCYM TALERZU"
    },
    category: {
      en: "Main Courses",
      pl: "Dania główne"
    },
    price: 46,
    ingredients: {
      en: "tomatoes | bread | rosemary and pepper olive oil",
      pl: "pomidorki | pieczywo | oliwa z rozmarynem i pieprzem"
    }
  },
  {
    id: 24,
    title: {
      en: "BEEF TENDERLOIN STEAK",
      pl: "STEK Z POLĘDWICY WOŁOWEJ"
    },
    category: {
      en: "Main Courses",
      pl: "Dania główne"
    },
    price: 85
  },
  {
    id: 35,
    title: {
      en: "CAPRESE",
      pl: "CAPRESE"
    },
    category: {
      en: "Salads",
      pl: "Sałaty"
    },
    price: 31,
    ingredients: {
      en: "parma ham | mozzarella cheese | tomato | olives | capers | parmigiano reggiano | red onion | basil pesto",
      pl: "szynka parmeńska | ser mozzarella | pomidor | oliwki | kapary | parmigiano reggiano | czerwona cebula | pesto z bazylii"
    }
  },
  {
    id: 36,
    title: {
      en: "WITH PEAR AND GORGONZOLA",
      pl: "Z GRUSZKĄ i GORGONZOLĄ"
    },
    category: {
      en: "Salads",
      pl: "Sałaty"
    },
    price: 31,
    ingredients: {
      en: "gorgonzola cheese | pear | arugula | lamb's lettuce | pistachios | honey vinaigrette",
      pl: "ser gorgonzola | gruszka | rukola | roszponka | pistacje | miodowy winegret"
    }
  },
  {
    id: 37,
    title: {
      en: "WITH BEETROOT AND SHEEP CHEESE",
      pl: "Z BURAKIEM i SEREM OWCZYM"
    },
    category: {
      en: "Salads",
      pl: "Sałaty"
    },
    price: 31,
    ingredients: {
      en: "arugula lettuce | baby spinach | beetroot | sheep cheese | walnuts | honey vinaigrette",
      pl: "sałata rukola | szpinak baby | burak | ser owczy | orzechy włoskie | malinowy winegret"
    }
  },
  {
    id: 38,
    title: {
      en: "CAESAR",
      pl: "CESAR"
    },
    category: {
      en: "Salads",
      pl: "Sałaty"
    },
    price: 33,
    ingredients: {
      en: "grilled chicken and bacon | romaine lettuce | parmigiano reggiano | poached egg | Caesar dressing",
      pl: "grillowany kurczak i boczek | sałata rzymska | ser grana padano | jajko w koszulce | sos Cesar"
    }
  },
  {
    id: 39,
    title: {
      en: "WITH CHICKEN",
      pl: "Z KURCZAKIEM"
    },
    category: {
      en: "Salads",
      pl: "Sałaty"
    },
    price: 33,
    ingredients: {
      en: "grilled chicken breast | mixed greens | tomato | cucumber | bell pepper | olives | feta cheese | basil pesto | thousand island dressing",
      pl: "grillowana pierś z kurczaka | mix sałat | pomidor | ogórek | papryka | oliwki | ser feta | pesto z bazylii | sos tysiąca wysp"
    }
  },
  {
    id: 40,
    title: {
      en: "WITH TUNA",
      pl: "Z TUŃCZYKIEM"
    },
    category: {
      en: "Salads",
      pl: "Sałaty"
    },
    price: 33,
    ingredients: {
      en: "tuna | romaine lettuce | olives | red onion | anchovies | capers | egg | dressing",
      pl: "tuńczyk | sałata rzymska | oliwki | czerwona cebula | anchois | kapary | jajko | musztardowy winegret"
    }
  },
  {
    id: 41,
    title: {
      en: "PRIMAVERA",
      pl: "PRIMAVERA"
    },
    category: {
      en: "Salads",
      pl: "Sałaty"
    },
    price: 37,
    ingredients: {
      en: "burrata cheese | beef ham Bresaola | mixed greens | cherry tomatoes | pumpkin seeds | pomegranate seeds | lemon vinaigrette",
      pl: "burrata | szynka wołowa Bresaola | mix sałat | pomidorki koktajlowe | pestki dyni | pestki granatu | cytrynowy winegret"
    }
  },
  {
    id: 41.1,
    title: {
      en: "BEEF TENDERLOIN CARPACCIO",
      pl: "CARPACCIO Z POLĘDWICY WOŁOWEJ"
    },
    category: {
      en: "Salads",
      pl: "Sałaty"
    },
    price: 38,
    ingredients: {
      en: "beef tenderloin | arugula | capers | parmigiano reggiano",
      pl: "polędwica wołowa | rukola | kapary | ser parmigiano reggiano"
    }
  },
  {
    id: 42,
    title: {
      en: "SPAGHETTI CARBONARA",
      pl: "SPAGHETTI CARBONARA"
    },
    category: {
      en: "Pasta",
      pl: "Makarony"
    },
    price: 34,
    ingredients: {
      en: "guanciale | egg yolk | garlic | fresh parsley | parmigiano reggiano",
      pl: "guanciale | żółtko | czosnek | natka pietruszki | ser parmigiano reggiano"
    }
  },
  {
    id: 43,
    title: {
      en: "PENNE ALL'A ARRABBIATA",
      pl: "PENNE ALL'A ARRABBIATA"
    },
    category: {
      en: "Pasta",
      pl: "Makarony"
    },
    price: 34,
    ingredients: {
      en: "tomato sauce | jalapeno peppers | garlic",
      pl: "sos pomidorowy | papryczki jalapeno | czosnek"
    }
  },
  {
    id: 44,
    title: {
      en: "TAGLIATELLE WITH CHICKEN",
      pl: "TAGLIATELLE Z KURCZAKIEM"
    },
    category: {
      en: "Pasta",
      pl: "Makarony"
    },
    price: 35,
    ingredients: {
      en: "cream sauce | gorgonzola",
      pl: "sos śmietanowy | gorgonzola"
    }
  },
  {
    id: 45,
    title: {
      en: "LASAGNE",
      pl: "LASAGNE"
    },
    category: {
      en: "Pasta",
      pl: "Makarony"
    },
    price: 35,
    ingredients: {
      en: "beef and pork ragout | tomatoes pelati | bechamel sauce",
      pl: "ragoût wołowo-wieprzowe | pomidory pelati | sos beszamelowy"
    }
  },
  {
    id: 46,
    title: {
      en: "SPAGHETTI SICILIAN",
      pl: "SPAGHETTI PO SYCYLIJSKU"
    },
    category: {
      en: "Pasta",
      pl: "Makarony"
    },
    price: 36,
    ingredients: {
      en: "anchovies | onion | tomato sauce | parmigiano reggiano | fresh parsley | garlic",
      pl: "anchois | cebula | sos pomidorowy | ser parmigiano reggiano | świeża natka pietruszki | czosnek"
    }
  },
  {
    id: 47,
    title: {
      en: "FARFALLE WITH SHRIMPS",
      pl: "FARFALLE Z KREWETKAMI"
    },
    category: {
      en: "Pasta",
      pl: "Makarony"
    },
    price: 36,
    ingredients: {
      en: "olives | capers | cherry tomatoes | garlic | basil",
      pl: "oliwki | kapary | pomidorki koktajlowe | czosnek | bazylia"
    }
  },
  {
    id: 48,
    title: {
      en: "TAGLIATELLE WITH ARTICHOKES",
      pl: "TAGLIATTELLE Z KARCZOCHAMI"
    },
    category: {
      en: "Pasta",
      pl: "Makarony"
    },
    price: 36,
    ingredients: {
      en: "artichokes | pistachios | lemon zest",
      pl: "karczochy | orzeszki pistacjowe | skórka cytrynowa"
    }
  },
  {
    id: 49,
    title: {
      en: "PENNE WITH BEEF TENDERLOIN",
      pl: "PENNE Z POLĘDWICĄ WOŁOWĄ"
    },
    category: {
      en: "Pasta",
      pl: "Makarony"
    },
    price: 36,
    ingredients: {
      en: "fresh red pepper | sesame | parmigiano reggiano | onion",
      pl: "świeża czerwona papryka | sezam | ser parmigiano reggiano | cebula"
    }
  },
  {
    id: 33,
    title: {
      en: "POULTRY TENDERLOINS",
      pl: "POLĘDWICZKI DROBIOWE"
    },
    category: {
      en: "for kids",
      pl: "dla dzieci"
    },
    price: 27,
    ingredients: {
      en: "cornflake coating | fries | carrot with apple",
      pl: "panierka z płatków kukurydzianych | frytki | marchewka z jabłkiem"
    }
  },
  {
    id: 34,
    title: {
      en: "GNOCCHI",
      pl: "GNOCCHI"
    },
    category: {
      en: "for kids",
      pl: "dla dzieci"
    },
    price: 27,
    ingredients: {
      en: "cream | raspberry sauce",
      pl: "śmietana | sos malinowy"
    }
  },
  {
    id: 130,
    title: {
      en: "TIRAMISU",
      pl: "TIRAMISU"
    },
    category: {
      en: "Desserts",
      pl: "Desery"
    },
    price: 19
  },
  {
    id: 131,
    title: {
      en: "CHOCOLATE FONDANT",
      pl: "FONDANT CZEKOLADOWY"
    },
    category: {
      en: "Desserts",
      pl: "Desery"
    },
    price: 21
  },
  {
    id: 50,
    title: {
      en: "LEAF TEA",
      pl: "HERBATA LIŚCIASTA"
    },
    category: {
      en: "hot drinks",
      pl: "napoje gorące"
    },
    price: 10,
    ingredients: {
      en: "black | green | white | rooibos",
      pl: "czarna | zielona | biała | rooibos"
    }
  },
  {
    id: 51,
    title: {
      en: "ESPRESSO",
      pl: "ESPRESSO"
    },
    category: {
      en: "hot drinks",
      pl: "napoje gorące"
    },
    price: 9
  },
  {
    id: 52,
    title: {
      en: "BLACK COFFEE",
      pl: "KAWA CZARNA"
    },
    category: {
      en: "hot drinks",
      pl: "napoje gorące"
    },
    price: 9
  },
  {
    id: 53,
    title: {
      en: "WHITE COFFEE",
      pl: "KAWA BIAŁA"
    },
    category: {
      en: "hot drinks",
      pl: "napoje gorące"
    },
    price: 10
  },
  {
    id: 54,
    title: {
      en: "CAPPUCCINO",
      pl: "CAPPUCINO"
    },
    category: {
      en: "hot drinks",
      pl: "napoje gorące"
    },
    price: 11
  },
  {
    id: 55,
    title: {
      en: "LATTE MACCHIATO",
      pl: "LATTE MACCHIATO"
    },
    category: {
      en: "hot drinks",
      pl: "napoje gorące"
    },
    price: 13
  },
  {
    id: 57,
    title: {
      en: "HOT CHOCOLATE",
      pl: "GORĄCA CZEKOLADA"
    },
    category: {
      en: "hot drinks",
      pl: "napoje gorące"
    },
    price: 17
  },
  {
    id: 63,
    title: {
      en: "SPARKLING / STILL WATER CARAFE 0.5 L",
      pl: "WODA gaz./niegazowana karafka 0,5 l"
    },
    category: {
      en: "cold drinks",
      pl: "napoje zimne"
    },
    price: 10
  },
  {
    id: 64,
    title: {
      en: "SPARKLING / STILL WATER CARAFE 1 L",
      pl: "WODA gaz./niegazowana karafka 1 l"
    },
    category: {
      en: "cold drinks",
      pl: "napoje zimne"
    },
    price: 15
  },
  {
    id: 65,
    title: {
      en: "APPLE / ORANGE JUICE",
      pl: "SOK jabłko/pomarańcza"
    },
    category: {
      en: "cold drinks",
      pl: "napoje zimne"
    },
    price: 9,
    ingredients: {
      en: "0.3 l",
      pl: "0,3 l"
    }
  },
  {
    id: 66,
    title: {
      en: "FRESHLY SQUEEZED JUICE",
      pl: "ŚWIEŻO WYCISKANY SOK"
    },
    category: {
      en: "cold drinks",
      pl: "napoje zimne"
    },
    price: 15,
    ingredients: {
      en: "apple | carrot | orange | grapefruit",
      pl: "jabłko | marchew | pomarańcza | grejpfrut"
    }
  },
  {
    id: 67,
    title: {
      en: "Coca-Cola 0.25 L",
      pl: "COLA 0,25 L"
    },
    category: {
      en: "cold drinks",
      pl: "napoje zimne"
    },
    price: 9
  },
  {
    id: 68,
    title: {
      en: "APEROL SPRITZ",
      pl: "APEROL SPRITZ"
    },
    category: {
      en: "drinks",
      pl: "koktajle"
    },
    price: 28,
    ingredients: {
      en: "aperol | prosecco | soda water",
      pl: "aperol | prosecco | woda gazowana"
    }
  },
  {
    id: 69,
    title: {
      en: "MOJITO",
      pl: "MOJITO"
    },
    category: {
      en: "drinks",
      pl: "koktajle"
    },
    price: 27,
    ingredients: {
      en: "white rum | lime | mint | brown sugar | crushed ice",
      pl: "biały rum | limonka | mięta | brązowy cukier | kruszony lód"
    }
  },
  {
    id: 70,
    title: {
      en: "CUBA LIBRE",
      pl: "CUBA LIBRE"
    },
    category: {
      en: "drinks",
      pl: "koktajle"
    },
    price: 26,
    ingredients: {
      en: "dark rum | lime | cola",
      pl: "czarny rum | limonka | cola"
    }
  },
  {
    id: 71,
    title: {
      en: "PINA COLADA",
      pl: "PINA COLADA"
    },
    category: {
      en: "drinks",
      pl: "koktajle"
    },
    price: 29,
    ingredients: {
      en: "white rum | malibu | pineapple syrup | milk | crushed ice",
      pl: "biały rum | malibu | syrop ananasowy | mleko | kruszony lód"
    }
  },
  {
    id: 72,
    title: {
      en: "SEX ON THE BEACH",
      pl: "SEX ON THE BEACH"
    },
    category: {
      en: "drinks",
      pl: "koktajle"
    },
    price: 28,
    ingredients: {
      en: "malibu | vodka | peach syrup | grenadine | orange juice",
      pl: "malibu | wódka | syrop brzoskwiniowy | grenadyna | sok pomarańczowy"
    }
  },
  {
    id: 73,
    title: {
      en: "TEQUILA SUNRISE",
      pl: "TEQUILA SUNRISE"
    },
    category: {
      en: "drinks",
      pl: "koktajle"
    },
    price: 27,
    ingredients: {
      en: "tequila silver | orange juice | grenadine",
      pl: "tequila silver | sok pomarańczowy | grenadyna"
    }
  },
  {
    id: 74,
    title: {
      en: "STONEHENGE COLLINS",
      pl: "STONEHENGE COLLINS"
    },
    category: {
      en: "drinks",
      pl: "koktajle"
    },
    price: 29,
    ingredients: {
      en: "gin | mint | lemon juice | crushed ice | tonic",
      pl: "gin | mięta | sok z cytryny | kruszony lód | tonic"
    }
  },
  {
    id: 74.5,
    title: {
      en: "PARADIS",
      pl: "PARADIS"
    },
    category: {
      en: "drinks",
      pl: "koktajle"
    },
    price: 26,
    ingredients: {
      en: "apricot brandy | gin | orange juice",
      pl: "morelówka | gin | sok pomarańczowy"
    }
  },
  {
    id: 75,
    title: {
      en: "VIRGIN MOJITO",
      pl: "VIRGIN MOJITO"
    },
    category: {
      en: "non-alcoholic drinks",
      pl: "koktajle bezalkoholowe"
    },
    price: 23,
    ingredients: {
      en: "lime | mint | brown sugar | soda water",
      pl: "limonka | mięta | brązowy cukier | woda gazowana"
    }
  },
  {
    id: 76,
    title: {
      en: "VIRGIN PINACOLADA",
      pl: "VIRGIN PINACOLADA"
    },
    category: {
      en: "non-alcoholic drinks",
      pl: "koktajle bezalkoholowe"
    },
    price: 23,
    ingredients: {
      en: "pineapple syrup | coconut syrup | milk",
      pl: "syrop ananasowy | syrop kokosowy | mleko"
    }
  },
  {
    id: 77,
    title: {
      en: "SUNRISE",
      pl: "SUNRISE"
    },
    category: {
      en: "non-alcoholic drinks",
      pl: "koktajle bezalkoholowe"
    },
    price: 23,
    ingredients: {
      en: "orange juice | grapefruit juice | lemon juice | grenadine",
      pl: "sok pomarańczowy | sok grejpfrutowy | sok cytrynowy | grenadyna"
    }
  },
  {
    id: 78,
    title: {
      en: "SKY",
      pl: "SKY"
    },
    category: {
      en: "non-alcoholic drinks",
      pl: "koktajle bezalkoholowe"
    },
    price: 23,
    ingredients: {
      en: "orange juice | lime juice | blue curacao | tonic",
      pl: "sok pomarańczowy | sok cytrynowy | curacao niebieskie | tonic"
    }
  },
  {
    id: 81,
    title: {
      en: "PERŁA EXPORT",
      pl: "PERŁA EXPORT"
    },
    category: {
      en: "beers",
      pl: "piwa"
    },
    price: "15",
    ingredients: "12 zł (0,3 l) / 15 zł (0,5 l)",
  },
  {
    id: 82,
    title: {
      en: "ZWIERZYNIEC WITBIER",
      pl: "ZWIERZYNIEC WITBIER"
    },
    category: {
      en: "beers",
      pl: "piwa"
    },
    price: "15",
    ingredients: "12 zł (0,3 l) / 15 zł (0,5 l)",
  },
  {
    id: 82.5,
    title: {
      en: "NON-ALCOHOLIC BEER",
      pl: "PIWO BEZALKOHOLOWE"
    },
    category: {
      en: "beers",
      pl: "piwa"
    },
    price: "15",
    ingredients: "0,5 l",
  },
  {
    id: 83,
    title: {
      en: "HOMEMADE SEMI-DRY",
      pl: "HOMEMADE SEMI-DRY"
    },
    category: {
      en: "wines",
      pl: "wina"
    },
    price: "17/32",
    ingredients: "red or white 250ml/500ml",
  },
  {
    id: 84,
    title: {
      en: "CHIANTI",
      pl: "CHIANTI"
    },
    category: {
      en: "wines",
      pl: "wina"
    },
    price: "70",
    ingredients: "red | dry | 0.75 L",
  },
  {
    id: 85,
    title: {
      en: "NERO D'AVOLA",
      pl: "NERO D'AVOLA"
    },
    category: {
      en: "wines",
      pl: "wina"
    },
    price: "70",
    ingredients: "red | dry | 0.75 L",
  },
  {
    id: 86,
    title: {
      en: "DOLCE NOVELLA",
      pl: "DOLCE NOVELLA"
    },
    category: {
      en: "wines",
      pl: "wina"
    },
    price: "15/85",
    ingredients: "red | semi-sweet | 100ml / 0.75 L",
  },
  {
    id: 87,
    title: {
      en: "PROSECCO",
      pl: "PROSECCO"
    },
    category: {
      en: "wines",
      pl: "wina"
    },
    price: "70",
    ingredients: "sparkling | white | dry | 0.75 L",
  },
  {
    id: 88,
    title: {
      en: "VODKA",
      pl: "VODKA"
    },
    category: {
      en: "Baczewski",
      pl: "Baczewski"
    },
    price: "11",
  },
  {
    id: 89,
    title: {
      en: "CHERRY LIQUEUR",
      pl: "LIKIER CZEKOLADOWY"
    },
    category: {
      en: "Baczewski",
      pl: "Baczewski"
    },
    price: "11",
  },
  {
    id: 90,
    title: {
      en: "WORMWOOD LIQUEUR",
      pl: "LIKIER WĄTRÓDKOWY"
    },
    category: {
      en: "Baczewski",
      pl: "Baczewski"
    },
    price: "11",
  },
  {
    id: 91,
    title: {
      en: "APRICOT BRANDY",
      pl: "LIKIER MELONOWY"
    },
    category: {
      en: "Baczewski",
      pl: "Baczewski"
    },
    price: "11",
  },
  {
    id: 92,
    title: {
      en: "WALNUT LIQUEUR",
      pl: "LIKIER ORZECHOWY"
    },
    category: {
      en: "Baczewski",
      pl: "Baczewski"
    },
    price: "11",
  },
  {
    id: 93,
    title: {
      en: "WHISKY",
      pl: "WHISKY"
    },
    category: {
      en: "alcoholic drinks",
      pl: "napoje alkoholowe"
    },
    price: "15",
  },
  {
    id: 94,
    title: {
      en: "GIN",
      pl: "GIN"
    },
    category: {
      en: "alcoholic drinks",
      pl: "napoje alkoholowe"
    },
    price: "11",
  },
  {
    id: 95,
    title: {
      en: "SUWEREN VODKA",
      pl: "SUWEREN VODKA"
    },
    category: {
      en: "alcoholic drinks",
      pl: "napoje alkoholowe"
    },
    price: "15",
  },
  {
    id: 96,
    title: {
      en: "OVOVIT LIQUEUR",
      pl: "LIKIER JAJOWY"
    },
    category: {
      en: "alcoholic drinks",
      pl: "napoje alkoholowe"
    },
    price: "11",
  },
  {
    id: 97,
    title: {
      en: "JACK DANIEL'S WHISKEY",
      pl: "WHISKY JACK DANIEL'S"
    },
    category: {
      en: "alcoholic drinks",
      pl: "napoje alkoholowe"
    },
    price: "19",
  },
  {
    id: 98,
    title: {
      en: "TEQUILA SILVER",
      pl: "TEQUILA SILVER"
    },
    category: {
      en: "alcoholic drinks",
      pl: "napoje alkoholowe"
    },
    price: "18",
  },
  {
    id: 99,
    title: {
      en: "TEQUILA GOLD",
      pl: "TEQUILA GOLD"
    },
    category: {
      en: "alcoholic drinks",
      pl: "napoje alkoholowe"
    },
    price: "19",
  },
  {
    id: 100,
    title: {
      en: "JAMESON WHISKEY",
      pl: "WHISKY JAMESON"
    },
    category: {
      en: "alcoholic drinks",
      pl: "napoje alkoholowe"
    },
    price: "16",
  },
  {
    id: 101,
    title: {
      en: "RUM",
      pl: "RUM"
    },
    category: {
      en: "alcoholic drinks",
      pl: "napoje alkoholowe"
    },
    price: "15",
  },
  {
    id: 111,
    title: {
      en: "MULLED BEER",
      pl: "MULLED BEER"
    },
    category: {
      en: "seasonal",
      pl: "sezonowe"
    },
    price: "21",
    ingredients: "0.5 L",
  },
  {
    id: 112,
    title: {
      en: "MULLED WINE",
      pl: "MULLED WINE"
    },
    category: {
      en: "seasonal",
      pl: "sezonowe"
    },
    price: "20",
    ingredients: "0.2 L",
  },
];

export const getMenuByLanguage = (lang = 'pl') => {
  return menu.map(item => ({
    id: item.id,
    title: item.title[lang] || item.title.pl, // fallback to Polish if translation not found
    category: item.category[lang] || item.category.pl,
    price: item.price,
    ingredients: item.ingredients ? (item.ingredients[lang] || item.ingredients.pl) : undefined
  }));
};

export default menu;
