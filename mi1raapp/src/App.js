import React from "react";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import { CartProvider } from "./components/CartContext/CartContext";
import Footer from "./components/Footer/Footer";
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";
import Cart from "./views/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Header from "./components/Header/Header";

export default function App(){
  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path="/products" element={<Products/>} />
    <Route exact path="/category/:id" element={<Products/>} />
    <Route exact path="/detail/:detailId" element={<ItemDetailContainer/>} />
    <Route exact path="/cart" element={<Cart/>} />
    </Routes>
    </BrowserRouter>
    <Footer />
    </CartProvider>
    </>
    );
};