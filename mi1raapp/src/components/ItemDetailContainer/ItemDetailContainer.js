import React, { useEffect,useState } from "react";
import {promesa} from "../../data/database";
import ItemDetail from "../ItemDetail/ItemDetail";
export default function ItemDetailContainer(){
  const [productos, setProducts] =useState([]);
  console.log(promesa)
  useEffect(() => {
    promesa
    .then((result) => setProducts(result))
    .catch((error) => console.log(error))
  },[])
  return(
    <>
    <div>
  <ItemDetail productos={productos}/>
  </div>
</>
);
};