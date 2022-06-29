import { collection, getFirestore, serverTimestamp,setDoc,doc } from "firebase/firestore";
import { useCart } from "../../CartContext/CartContext"
import { useNavigate } from "react-router-dom";
import React , {useState} from "react"; 

const Checkout = () => {
  const {cartItems ,cartPrice , clearCart}=useCart();
  const [data,setData] = React.useState({});
  const [ordenId , setOrdenId] = React.useState(false);
  const db = getFirestore();
  const navegar = useNavigate();
  // FUNCIONES *********************************************************

  const handleChange = (e) => {
    const {name,value} = e.target;
    setData({...setData,[name]:value});
  }

  const generarOrden = (e) => {
    e.preventDefault();
    const itemsDeCompra = cartItems.map ( (item) => ({
      id: item.id, 
      nombre: item.title,
      precio: item.price,
      cantidad: item.quantity,
      talle: item.talle,
      imagen: item.images,
      descripcion: item.descripción,
    }));

    let orden = {
      comprador: data,
      fecha:serverTimestamp(),
      total:cartPrice(),
      compras:itemsDeCompra,
    }

    const crearOrdenFirebase = async () => {
      const newOrderRef = doc(collection(db,"orders"));
      await setDoc (newOrderRef,orden);
      return newOrderRef;
    }

    crearOrdenFirebase()
    .then(res => setOrdenId(res.id))
    .catch(err => console.log(err));

    clearCart();
  }

  return (
    <div  className="fondo">
    {!ordenId 

    ? 

    <>
    <div  className="fondo container2">
      <h2>Checkout</h2>
      <form onSubmit={generarOrden}>
        <h3> Nombre</h3><input required type="text" placeholder="Nombre" name="nombre" onChange={handleChange} />
        <h3> Apelldio</h3><input type="text" placeholder="Apellido" name="apellido" onChange={handleChange} />
        <h3> Email</h3><input type="email" placeholder="Email" name="email" onChange={handleChange} /><br/>
        <input type="submit" value="Finalizar Compra"/>
      </form>
    </div>
    </>

    :

    <>
    <div  className="fondo container2">
    <h1 className="titulo">Gracias por tu compra</h1>
    <p className="titulo">EL numero de tu orden  es :#{ordenId}</p>
    <button className="Btn" onClick={()=> navegar('/')} >Volver a Home</button>
    </div>
    </>
    }

    </div>

  );
}

export default Checkout;