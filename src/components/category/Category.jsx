import React from "react";
import "./Category.css";
import bike from "../../imgs/001-motorbike.png";
import car from "../../imgs/carb.png";
import cb from "../../imgs/004-barrel.png";
import rf from "../../imgs/003-fridge.png";

const Category = () => {
  return (
    <section id="categorias" className="category">
      <h2>Categorias</h2>
      <div className="categorias-list">
        <img className="a" src={bike} alt="" />
        <img className="b" src={car} alt="" />
        <img className="c" src={cb} alt="" />
        <img className="d" src={rf} alt="" />
      </div>
    </section>
  );
};

export default Category;
