import React from "react";
import "./Mas-vendido.css";

import { PRODUCTS } from "../../products/pd.js";

const Masvendido = () => {
  return (
    <section className="mas-vendido">
      <h2>Mas Vendido</h2>
      <ol>
        {PRODUCTS.map((pd) => (
          <li key={pd.id}>
            <div className="mas-vendido-div">
              <img src={pd.img} alt="objeto" />
              <div className="mas-vendido-etiqueta-img">
                <p>{pd.nombre}</p>
                <p className="mas-vendido-precio">{pd.precio}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Masvendido;
