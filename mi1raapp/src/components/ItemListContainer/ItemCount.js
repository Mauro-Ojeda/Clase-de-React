import React from "react";
export default function ItemCount(){
  const stock = 5;
  const [count , SetCount]= React.useState(1)
  return(
    <>
    <div>
      <input className="botonCantidad" type="button" value="+" onClick={() =>count=== stock ? console.log('no hay más stock'):SetCount (count + 1)}/>
      {count}
      <input className="botonCantidad" type="button" value="-" onClick={() =>count===1 ? console.log('no puede ser menor a 1'): SetCount  (count- 1)}/>
    </div>
    </>
  );
  };