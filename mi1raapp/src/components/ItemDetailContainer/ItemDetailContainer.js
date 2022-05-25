import React, { useEffect,useState } from "react";
import {promesa} from "../../data/database";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
export default function ItemDetailContainer(){
  const {detailId}  = useParams();
  const [producto, setProducto] =useState([]);
  console.log(promesa)
  useEffect(() => {
    promesa
    .then((result) => setProducto(result.find((item)=> item.id === Number(detailId))))
    .catch((error) => console.log(error))
  },[detailId])
  return(
    <>
    <div className="fondo">
  <ItemDetail productos={producto}/>
  </div>
</>
);
};