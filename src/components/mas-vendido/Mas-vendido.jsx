import React from "react";
import "./Mas-vendido.css";
import cesta from "../../imgs/cesta.png";

import { PRODUCTS } from "../../products/pd.js";

const Masvendido = () => {
  return (
    <section id="masvendido" className="mas-vendido">
      <h2 className="mas-vendido-titulo">Mas Vendido</h2>
      <ol className="mas-vendido-lista">
        {PRODUCTS.map((pd) => (
          <li key={pd.id} className="mas-vendido-item">
            <div className="mas-vendido-div-img">
              <img src={pd.img} alt="" />
            </div>
            <div className="mas-vendido-div-text">
              <h3>{pd.nombre}</h3>
              <div className="mas-vendido-valor">
                <p className="price">{pd.precio}</p>
                <img
                  onClick={() => {
                    console.log(pd.id);
                  }}
                  src={cesta}
                  alt=""
                />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Masvendido;
