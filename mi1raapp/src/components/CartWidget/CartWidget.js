import React from "react";
import { Link } from "react-router-dom";
export default function CartWidget(){
  return(
  <li className="carritoNav"><span ><Link to="/cart">🛒 Carrito</Link><span className="carritoCantidad">0</span></span></li>
  );
  };