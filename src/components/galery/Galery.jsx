import React from "react";
import i from "../../Captura0.PNG";
import "./Galery.css";

const Galery = () => {
  return (
    <section className="galery-img">
      <img src={i} alt="" />
      <p className="galery-text">Su proveedor de confianza</p>
    </section>
  );
};

export default Galery;
