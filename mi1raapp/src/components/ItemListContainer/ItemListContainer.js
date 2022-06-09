import React, { useEffect,useState } from "react";
import {promesa} from "../../data/database";
import ItemList from "../ItemList/ItemList";
import { getFirestore ,getDoc, doc, collection, getDocs } from "firebase/firestore";

export default function ItemListContainer({categoryId}) {
  const [productos, setProducts] =useState([]);

  React.useEffect(() => {
    const db = getFirestore();
    const productosRef = collection(db,"productos");
    getDocs (productosRef).then(snapshot => {
      setProducts(snapshot.docs.map(doc =>({id:doc.id, ...doc.data()})));
    })
  }, []);
  // useEffect(() => {
  //   promesa
  //   .then((result) => {
  //     if (categoryId){
  //       setProducts(result.filter((Item) => Item.talle === Number(categoryId)));
  //     }else{
  //       setProducts(result);
  //     }
  //   })
  //   .catch((error) => console.log(error))
  // },[categoryId])
  return(
    <>
    <div>
  <ItemList productos={productos}/>
  </div>
</>
);
};
