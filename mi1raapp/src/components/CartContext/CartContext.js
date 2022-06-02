import { createContext ,useState,  useEffect, useContext} from "react";

export const CartContext = createContext();

export function CartProvider ({ children }) {
  const [cartItems, setCartItems] = useState(()=>{
    try {
      const localCart = localStorage.getItem('cart');
      return localCart ? JSON.parse(localCart) : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  })
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])

  const addItemToCart = (product) => {
    const inCart = cartItems.find((productInCart) => productInCart.id === product.id);
    if(inCart) {
      const updateCart = cartItems.map((productInCart) => {
          if(productInCart.id === product.id) {
            return{...productInCart, quantity: productInCart.quantity + product.quantity}
          } else {
            return productInCart;
          }
        })
        setCartItems(updateCart)
    }else{
      setCartItems([...cartItems, product]);
    }
  }

    const deleteItemToCart = (product) => {
      const inCart = cartItems.find((productInCart) => productInCart.id === product.id);

      if(inCart.quantity === 1) {
        setCartItems(
          cartItems.filter((productInCart) => productInCart.id !== product.id)
        );

      } else {
        setCartItems((productInCart)=> {
          if(productInCart.id === product.id) {
            return { ...inCart, quantity: inCart.quantity - 1 }
          } else return productInCart;
        })
    }
  }
  const deleteItem = (id) => {
    setCartItems(cartItems.filter((prod) => prod.id !== id));
  }

  const itemQuantityOnCart = (id) => {
    return cartItems.reduce((acc, prod) => acc +=prod.quantity,0 )
  }
return (
  <CartContext.Provider value={{cartItems,addItemToCart,deleteItemToCart,deleteItem,itemQuantityOnCart}}>
    {children}
  </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext);


