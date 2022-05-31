import React from "react";
import ItemCount from "../ItemListContainer/ItemCount";
import { useNavigate } from "react-router-dom";
const ItemDetail = ({product}) => {
  const [count , setCount]= React.useState(1)
  const [purchase ,setPurchase] = React.useState(false);
  const navegar = useNavigate();
  // const {addItemToCart} = useContext(CartProvider)
  const onAdd = (quantityToAdd) => {
    setPurchase(true);
    product.quantity = quantityToAdd;
    product.finalValue = product.price * product.quantity;
    product.agregado = true;
    // addItemToCart(product, quantityToAdd);
  };
  return (
    <>
    <h2 className="textCenter">Detalle</h2>
    <h3 className="textCenter">{product.title}</h3>
    <div class="Detalle">
      <img src={product.images} alt="Imagen" className="ImgDetalle"/>
      <p className="textCenter precio">Price $:{product.price}</p>
      <p className="textCenter desc">{product.descripcion}</p>
      <p className="textCenter stock">Stock:{product.stock}</p>
      {purchase 
      ? <button onClick={()=>{navegar('/cart')}}> Ir al Cart  </button> 
      : <ItemCount setCount={setCount} count={count} stock={product.stock} onAdd={onAdd} />
      }
    </div>
  </>
  );
};
export default ItemDetail; 
// 