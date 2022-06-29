import React from "react";
import ItemCount from "../ItemListContainer/ItemCount";
import { useNavigate } from "react-router-dom";
import { useCart } from '../../CartContext/CartContext';

const ItemDetail = ({product}) => {
  const {title, id, price, images, stock, descripción} = product;
  const [count , setCount]= React.useState(1)
  const [purchase ,setPurchase] = React.useState(false);
  const navegar = useNavigate();
  const {addItemToCart}= useCart();
  const onAdd = () => {
    const item = {
      id,
      title,
      price,
      quantity: count,
      descripción,
      images,
      stock,
    }
    addItemToCart(item);
    setPurchase(true);
  };
  return (
    <>
    <h2 className="textCenter fondo2">Detalle</h2>
    <h3 className="textCenter">{product.title}</h3>
    <div className="Detalle">
      <img src={product.images} alt="Imagen" className="ImgDetalle"/>
      <p className="textCenter precio">Price $:{product.price}</p>
      <p className="textCenter precio">Descripcion</p>
      <p className="textCenter desc">{product.descripción}</p>
      <p className="textCenter stock">Stock:{product.stock}</p>
      <button className="comprarBtn" onClick={()=>{navegar('/')}}> Seguir Comprando  </button>
      {purchase 
      ? <button className="comprarBtn" onClick={()=>{navegar('/cart')}}> Ir al Cart  </button>
      : <ItemCount setCount={setCount} count={count} stock={product.stock} onAdd={onAdd} />
      }
    </div>
  </>
  );
};
export default ItemDetail; 
