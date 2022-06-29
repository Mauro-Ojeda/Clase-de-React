import React, {useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getFirestore , collection, getDocs, query, where } from "firebase/firestore";

export default function ItemListContainer({categoryId}) {
  const [productos, setProducts] =useState([]);

  const db= getFirestore()
  const firebaseFetch = async () => {

    let shirtsCollection;
    if(!categoryId){
      shirtsCollection = collection(db,"productos");
    }else{
      shirtsCollection= query(collection(db, "productos"), where("talle", "==", Number(categoryId)))
    }
    const querySnapshot= await getDocs(shirtsCollection)
    const dataFirestore = querySnapshot.docs.map(doc=> ({id: doc.id, ...doc.data()}))
    return dataFirestore
  }

  React.useEffect(() => {
    firebaseFetch()
    .then((res) => setProducts(res))
    .catch((error)=>console.log(error))
  }, [categoryId]);
  console.log(productos)
  return(
    <>
    <div className="fondo">
  <ItemList productos={productos}/>
  </div>
</>
);
};



