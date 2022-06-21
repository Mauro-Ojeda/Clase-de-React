import React, { useEffect,useState } from "react";
import { getFirestore ,getDoc, doc} from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
export default function ItemDetailContainer(){
  const {detailId}  = useParams();
  const [producto, setProducto] =useState([]);
  console.log(detailId);
// Llega a pasar la Id del producto pero no entiendo porque no se muestra en el componente
  React.useEffect(() => {
    const db = getFirestore();
    const productoRef = doc(db,"productos",detailId);
    getDoc(productoRef).then(snapshot => {
      setProducto ({id :snapshot.id, ...snapshot.data()});
    }
    
    )
  }, [detailId]);
  return(
    <>
    <div className="fondo">
  <ItemDetail product={producto}/>
  </div>
</>
);
};