import { Link } from 'react-router-dom'
import { useCart } from '../../components/CartContext/CartContext'

export default function Cart({}) {
    const {clearCart,cartItems,deleteItem,cartPrice,itemQuantityOnCart} = useCart()
    if(cartItems.length === 0) {
        return(<>
              <h4> No hay nada en el carrito </h4>
                <Link to={"/"} > Products </Link>
                </>
            )
    }
    else {
      return (
        <>
        <h1 className='textCenter'> Carrito </h1>
        <div className="cartContainer">
        {cartItems.map(item => (<div className="cartItem"> 
        <img src={item.images} alt="Imagen" className="ImgDetalle"/>
        <p className="textCenter desc">{item.title}</p>
        <p className="textCenter precio">Price $:{item.price}</p>
        <button onClick={()=> deleteItem()}>Borrar Item</button>
        </div>))}
        </div>
        <p className="textCenter precio">Total: ${cartPrice()}</p>
        <p className='textCenter'>Items Totales {itemQuantityOnCart()}</p>
        <button className="comprarBtn" onClick={()=>{clearCart()}}> Vaciar Cart </button>
        <button className="comprarBtn" onClick={()=>{}}> Comprar </button>
        </>
      )
        }
    }
    // {cart.map((item, index) => {
    //   return <div key={item.id} className='container'>
    //     <div className='card'>
    //       <div className='img'>
    //         <img src={item.images} alt="" />
    //       </div>
    //       <div className='content'>
    //         <div className='productName'> {item.title} </div>
    //       </div>
    //       <p> Quantity: {item.quantity}</p>
    //       <div className='price'> $ {item.price} </div>
    //       <button onClick={() => (item)}> Delete Product </button>
    //     </div>
    //   </div>
    // })}














// import { CartContext } from "../../components/CartContext/CartContext"
// export default function Cart (){

//   return(
//     <div className="fondo">
//       <h1 className="textCenter">Carrito</h1>
//       <h2 className="textCenter">Tus Productos en el Carrito</h2>
//     </div>
//   )
// }