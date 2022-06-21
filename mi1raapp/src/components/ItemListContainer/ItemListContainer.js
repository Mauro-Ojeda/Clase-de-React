import React, {useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getFirestore , collection, getDocs } from "firebase/firestore";

export default function ItemListContainer({categoryId}) {
  const [productos, setProducts] =useState([]);

  React.useEffect(() => {
    const db = getFirestore();
    const productosRef = collection(db,"productos");
    getDocs (productosRef).then(snapshot => {
      setProducts(snapshot.docs.map(doc =>({id:doc.id, ...doc.data()})));
    })
  }, []);
  return(
    <>
    <div>
  <ItemList productos={productos}/>
  </div>
</>
);
};