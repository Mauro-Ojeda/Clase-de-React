import React from "react";
import BtnBuy from "../BtnBuy/BtnBuy";
export default function ItemCount(){
  const [action,setAction]=React.useState('comprar');

  const AddToCart=()=>(
    <button onClick={()=>setAction('carrito')}>Comprar</button>
  )
  const ToCart =()=>(
    <button> <BtnBuy/>  </button>
  )
  const Button = action === 'comprar' ? AddToCart : ToCart;
  return(
    <>
    <div>
      <Button></Button>
    </div>
    </>
  );
  };
  // const stock = 5;
  // const [count , SetCount]= React.useState(1)
  // <h3>Cantidad</h3>
  //     <input className="botonCantidad" type="button" value="+" onClick={() =>count=== stock ? console.log('no hay más stock'):SetCount (count + 1)}/>
  //     {count}
  //     <input className="botonCantidad" type="button" value="-" onClick={() =>count===1 ? console.log('no puede ser menor a 1'): SetCount  (count- 1)}/>