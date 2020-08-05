import React from "react";
import Navbar from "./components/navbar/index";

import { PRODUCTS } from "./products/pd.js";

import "./index.css";
import logo from "./logo1.png";
// import objeto from "./ccc.jpg";
import ny from "./ny.jpg";
// import cm from "./combustible.png";
// import rf from "./refrigeracion.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <header className="header">
        <nav className="navbar">
          <div className="navbar1">
            <figure>
              <img src={logo} alt="Imagen logo" className="logo-nav" />
            </figure>
            <input placeholder="Buscar ..." type="text" className="search" />
            <ol className="menu">
              <li>Carro</li>
              <li>Moto</li>
              <li>Combustibles</li>
              <li>Refrigeracion</li>
            </ol>
          </div>
          <ol className="busqueda-interna">
            <li>
              <a href="/">Categorias</a>
            </li>
            <li>
              <a href="/">Mas vendido</a>
            </li>
            <li>
              <a href="/">Ofertas</a>
            </li>
            <li>
              <a href="/">Marcas</a>
            </li>
          </ol>
        </nav>
      </header> */}
      <section className="img-galery">
        <img className="ia" src={ny} alt="" />
        <p className="parrafo-img">Su proveedor de confianza</p>
      </section>
      <section className="category">
        <h2>Categorias</h2>
      </section>
      <section className="mas-vendido">
        <h2>Mas Vendido</h2>
        <ol>
          {PRODUCTS.map((pd) => (
            <li>
              <div className="div-mas-vendido">
                <img src={pd.img} alt="objeto" />
                <div className="etiqueta-img">
                  <p>{pd.nombre}</p>
                  <p className="precio">{pd.precio}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="ofert">
        <h2>Ofertas</h2>
      </section>
      <section className="marcas">
        <h2>Marcas</h2>
      </section>

      <footer>
        <div className="div-footer">
          <figure>
            <img src={logo} alt="Imagen logo" className="logo-footer" />
          </figure>
          <h2>Quienes somos</h2>
          <h2>Ubicacion</h2>
        </div>
      </footer>
    </div>
  );
}

export default App;
