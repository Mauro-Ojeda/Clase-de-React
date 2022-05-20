import React from "react";
import { Link } from "react-router-dom";
const ItemDetail = () => {
  const product=JSON.parse(localStorage.getItem('detalle'));
  return (
    <>
    <h2 className="textCenter">Detalle</h2>
    <h3 className="textCenter">{product.title}</h3>
    <div class="Detalle">
    <img src={product.images} alt="Imagen" className="ImgDetalle"/>
    <p className="textCenter precio">Price $:{product.price}</p>
    <p className="textCenter desc">{product.descripcion}</p>
    <p className="textCenter stock">Stock:{product.stock}</p>
    <button className="comprarBtn"> <Link to="/cart">Comprar</Link></button>
    </div>
  </>
  );
}
export default ItemDetail; 
