import React from "react";
import {CartProvider} from "../../components/CartContext/CartContext";
// import ItemCount from "../ItemListContainer/ItemCount";
import BtnBuy from "../BtnBuy/BtnBuy";
import { useContext } from "react";
const ItemDetail = ({product}) => {
  const {addItemToCart} = useContext(CartProvider)
  const onAdd = (quantityToAdd) => {
    product.quantity = quantityToAdd;
    product.finalValue = product.price * product.quantity;
    product.agregado = true;
    addItemToCart(product, quantityToAdd);
  };
  return (
    <>
    <CartProvider>
    <h2 className="textCenter">Detalle</h2>
    <h3 className="textCenter">{product.title}</h3>
    <div class="Detalle">
    <img src={product.images} alt="Imagen" className="ImgDetalle"/>
    <p className="textCenter precio">Price $:{product.price}</p>
    <p className="textCenter desc">{product.descripcion}</p>
    <p className="textCenter stock">Stock:{product.stock}</p>
    <button className="textCenter"onClick={onAdd} >Agregar</button>
    <BtnBuy/>
    </div>
    </CartProvider>
  </>
  );
}
export default ItemDetail; 
// 