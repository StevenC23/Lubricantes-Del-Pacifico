import React from "react";
import logo from "../../logo1.png";
import "./Navbar.css";
import "../../interactions/index";

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
            <a href="#categorias">Categorias</a>
          </li>
          <li>
            <a href="#masvendido">Mas vendido</a>
          </li>
          <li>
            <a href="#ofertas">Ofertas</a>
          </li>
          <li>
            <a href="#marcas">Marcas</a>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default Navbar;
