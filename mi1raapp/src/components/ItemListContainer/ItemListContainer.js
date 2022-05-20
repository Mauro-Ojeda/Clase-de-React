import React, { useEffect,useState } from "react";
import {promesa} from "../../data/database";
import ItemList from "../ItemList/ItemList";
export default function ItemListContainer(){
  const [productos, setProducts] =useState([]);
  useEffect(() => {
    promesa
    .then((result) => setProducts(result))
    .catch((error) => console.log(error))
  },[])
  return(
    <>
    <div>
  <ItemList productos={productos}/>
  </div>
</>
);
};
