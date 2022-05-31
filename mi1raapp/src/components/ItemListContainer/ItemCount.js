import React from "react";
export default function ItemCount({count,setCount,stock,onAdd}) {
  return(
    <>
    <div>
    <h3>Cantidad</h3>
      <input className="botonCantidad" type="button" value="+" onClick={() =>count=== stock ? console.log('no hay más stock'):setCount (count + 1)}/>
      {count}
      <input className="botonCantidad" type="button" value="-" onClick={() =>count===1 ? console.log('no puede ser menor a 1'): setCount  (count- 1)}/>
    </div>
      <button className="textCenter"onClick={() => {onAdd(count)}} >Agregar</button>
    </>
  );
  };
  // const AddToCart=()=>(
  //   <button onClick={()=>setAction('carrito')}>Comprar</button>
  // )
  // const ToCart =()=>(
  //   <button> <BtnBuy/>  </button>
  // )
  // const Button = action === 'comprar' ? AddToCart : ToCart;