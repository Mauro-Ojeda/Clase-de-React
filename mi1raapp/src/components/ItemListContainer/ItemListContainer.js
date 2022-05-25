import React, { useEffect,useState } from "react";
import {promesa} from "../../data/database";
import ItemList from "../ItemList/ItemList";
export default function ItemListContainer({categoryId}) {
  const [productos, setProducts] =useState([]);
  useEffect(() => {
    promesa
    .then((result) => {
      if (categoryId){
        setProducts(result.filter((Item) => Item.talle === Number(categoryId)));
      }else{
        setProducts(result);
      }
    })
    .catch((error) => console.log(error))
  },[categoryId])
  return(
    <>
    <div>
  <ItemList productos={productos}/>
  </div>
</>
);
};
