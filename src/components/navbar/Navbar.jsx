import React from "react";
import logo from "../../logo1.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
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
    </header>
  );
};

export default Navbar;
