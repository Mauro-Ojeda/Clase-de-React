import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ItemCount({count,setCount,stock,onAdd}) {
  const sinStock = () => {
    toast.error("No hay  más stock disponible",{
      autoClose: 1000,
      hideProgressBar: true,
    });
    
  };
  const noCero = () => {
    toast.error("No puede ser menos de 1",{
      autoClose: 1000,
      hideProgressBar: true,
    });
  };

  return(
    <>
    <div>
    <h3>Cantidad</h3>
      <input className="botonCantidad" type="button" value="+" onClick={() =>count=== stock ? sinStock() :setCount (count + 1)}/>
      {count}
      <input className="botonCantidad" type="button" value="-" onClick={() =>count===1 ? noCero() : setCount  (count- 1)}/>
    </div>
      <button className="textCenter comprarBtn"onClick={onAdd} >Agregar</button>
      <ToastContainer />
    </>
  );
  };