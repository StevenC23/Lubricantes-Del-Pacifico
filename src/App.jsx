import React from "react";
import Navbar from "./components/navbar/index";
import Galery from "./components/galery/index";
import Footer from "./components/footer/index";
import Masvendido from "./components/mas-vendido/index";
import Marcas from "./components/marcas/index";
import Category from "./components/category/index";
import Ofert from "./components/ofertas/index";

// import { PRODUCTS } from "./products/pd.js";

import "./index.css";
// import logo from "./logo1.png";
// import objeto from "./ccc.jpg";
// import ny from "./ny.jpg";
// import cm from "./combustible.png";
// import rf from "./refrigeracion.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Galery />
      <Category />
      <Masvendido />
      <Ofert />
      <Marcas />
      <Footer />
    </div>
  );
}

export default App;
