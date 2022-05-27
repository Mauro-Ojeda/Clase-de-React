import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../components/CartContext/CartContext'

export default function Cart({ item }) {
    const {cart,} = useContext(CartContext)

    if(cart.length === 0) {
        return(<>
              <h4> No hay nada en el carrito </h4>
                <Link to={"/"} > Products </Link>
                </>
            )
    }
    else {
        return(<>
                {cart.map((item, index) => {
                    return <div key={item.id} className='container'>
                            <div className='card'>
                                <div className='img'>
                                  <img src={item.images} alt="" />
                                </div>
                                <div className='content'>
                                  <div className='productName'> {item.title} </div>
                                </div>
                                  <p> Quantity: {item.quantity}</p>
                                  <div className='price'> $ {item.price} </div>
                                <button onClick={() => (item)}> Delete Product </button> 
                            </div>
                        </div>
                })}
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