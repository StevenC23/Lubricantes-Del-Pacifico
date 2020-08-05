import React from "react";
import ny from "../../ny.jpg";
import "./Galery.css";

const Galery = () => {
  return (
    <section className="galery-img">
      <img src={ny} alt="" />
      <p className="galery-text">Su proveedor de confianza</p>
    </section>
  );
};

export default Galery;
