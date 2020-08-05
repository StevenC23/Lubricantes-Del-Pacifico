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
        <h2>Quienes somos</h2>
        <h2>Ubicacion</h2>
      </div>
    </footer>
  );
};

export default Footer;
