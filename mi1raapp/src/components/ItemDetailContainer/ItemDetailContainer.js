import React, { useEffect,useState } from "react";
import {promesa} from "../../data/database";
import ItemDetail from "../ItemDetail/ItemDetail";
import Header from "../Header/Header";
export default function ItemDetailContainer(){
  const [producto, setProducto] =useState([]);
  console.log(promesa)
  useEffect(() => {
    promesa
    .then((result) => setProducto(result.find((item)=> item.id === 1)))
    .catch((error) => console.log(error))
  },[])
  return(
    <>
    <Header/>
    <div className="fondo">
  <ItemDetail productos={producto}/>
  </div>
</>
);
};