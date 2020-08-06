import React from "react";
import "./Footer.css";
import logo from "../../logo1.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-div">
        <figure>
          <img src={logo} alt="Imagen logo" className="logo-footer" />
        </figure>
        <div className="quienes-somos">
          <h2>Quienes somos</h2>
          <h2>Informacion del negocio</h2>
        </div>
        <div className="quieres-somos">
          <h2>Ubicacion</h2>
          <h2>Ubicacion y telefonos de contacto</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
