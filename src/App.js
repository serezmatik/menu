import React, { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Categories from "./Categories";
import itemsSosnowiec from "./dataSosnowiec";
import itemsDabrowa from "./dataDabrowa";

const allCategories = [
  "all",
  ...new Set(itemsSosnowiec.map((item) => item.category)),
];

const App = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [location, setLocation] = useState("");

  const handleLocationChange = (loc) => {
    setLocation(loc);
    const items = loc === "Sosnowiec" ? itemsSosnowiec : itemsDabrowa;
    setMenuItems(items);
    setCategories(["all", ...new Set(items.map((item) => item.category))]);
  };

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(location === "Sosnowiec" ? itemsSosnowiec : itemsDabrowa);
      return;
    }
    const newItems = (
      location === "Sosnowiec" ? itemsSosnowiec : itemsDabrowa
    ).filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <Header onLocationChange={handleLocationChange} />
        {location ? (
          <>
            <Categories
              categories={categories}
              activeCategory={activeCategory}
              filterItems={filterItems}
            />
            <Menu items={menuItems} />
          </>
        ) : (
          <h2 className="title">Please select a location</h2>
        )}
      </section>
    </main>
  );
};

export default App;
