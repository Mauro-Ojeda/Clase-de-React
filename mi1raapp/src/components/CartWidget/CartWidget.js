import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";
export default function CartWidget(){
  const {itemQuantityOnCart} = useCart();
  return(
  <li className="carritoNav"><span ><Link to="/cart">🛒 Carrito</Link><span className="carritoCantidad">{itemQuantityOnCart() || ''}</span></span></li>
  );
  };