import React, { useEffect, useState } from "react";
import style from "../menus/Menu.module.scss";
import axios from "axios";

const Menu = () => {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(8);
  const [category, setCategory] = useState("All categories");

  useEffect(() => {
    axios.get("/menu").then((res) => {
      setData(res.data);
    });
  }, []);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  const filteredData = category === "All categories" ? data : data.filter((item) => item.category === category);

  return (
    <div className={style.allmenus}>
      <div className={style.container}>
        <div className={style.sorting}>
          <button
            onClick={() => handleCategoryClick("All categories")}
            className={category === "All categories" ? style.active : ""}
          >
            All categories
          </button>
          <button
            onClick={() => handleCategoryClick("Dessert")}
            className={category === "Dessert" ? style.active : ""}
          >
            Desserts
          </button>
          <button
            onClick={() => handleCategoryClick("Main dish")}
            className={category === "Main dish" ? style.active : ""}
          >
            Main Dishes
          </button>
          <button
            onClick={() => handleCategoryClick("Salad")}
            className={category === "Salad" ? style.active : ""}
          >
            Salads
          </button>
        </div>
        <div className={style.menus}>
          {filteredData.slice(0, visible).map((elem) => {
            return (
              <div key={elem.id} className={style.menu}>
                <img src={elem.image} alt={elem.name} />
                <h2>{elem.name}</h2>
                <p>{elem.ingredients}</p>
                <div className={style.booking}>
                  <div className={style.pricing}>
                    <h1>${elem.price}</h1>
                    <p>/ {elem.category}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {visible < filteredData.length && (
          <div className={style.load}>
            <button className={style.loadMore} onClick={showMoreItems}>
              Load more
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
