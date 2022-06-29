import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../CartContext/CartContext'


export default function Cart({}) {
  const navegar = useNavigate();
    const {clearCart,cartItems,deleteItem,cartPrice,itemQuantityOnCart} = useCart()
    if(cartItems.length === 0) {
        return(
      <> <div className='fondo'>
        <div className='container'>
        <h4 className='titulo textCenter'> No hay nada en el carrito , Vamos de Compras </h4>
        <Link className='titulo textCenter' to={"/"} > Productos </Link>
        </div></div>
      </>
      )
    }
    else {

      return (
        <> 
        <div className='fondo'>
        <h1 className='textCenter fondo2'> Carrito </h1>
        <div className="cartContainer">
        {cartItems.map(item => (<div className="cartItem"> 
        <p className="textCenter desc fondo2">{item.title}</p>
        <img src={item.images} alt="Imagen" className="ImgDetalle"/>
        <p className="textCenter precio">Price $:{item.price}</p>
        <p className="textCenter precio">Cantidad :{item.quantity}</p>
        <button onClick={deleteItem} className='comprarBtn'>X</button>
        </div>))}
        </div>
        <div className='fondo2'>
        <p className="textCenter precio">Total: ${cartPrice()}</p>
        <p className='textCenter'>Items Totales {itemQuantityOnCart()}</p>
        </div>
        <button className="comprarBtn"  onClick={clearCart}> Vaciar Cart </button>
        <button className="comprarBtn" onClick={()=>{navegar('/checkout')}}> Comprar </button>
        </div>
        </>
      )
        }
    }














// import { CartContext } from "../../components/CartContext/CartContext"
// export default function Cart (){

//   return(
//     <div className="fondo">
//       <h1 className="textCenter">Carrito</h1>
//       <h2 className="textCenter">Tus Productos en el Carrito</h2>
//     </div>
//   )
// }