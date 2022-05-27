import { createContext ,useState,  useEffect} from "react";

export const CartContext = createContext();

export default function CartProvider ({ children }) {
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
      setCartItems(
        cartItems.map((productInCart) => {
          if(productInCart.id === product.id) {
            return{...inCart, quantity: inCart.quantity + 1}
          } else return productInCart;
        }))
    }else{
      setCartItems([...cartItems, {...product, quantity: 1}]);
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
return (
  <CartProvider value={{cartItems,addItemToCart,deleteItemToCart}}>
    {children}
  </CartProvider>
  )
}}


