import React from "react";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";
import Cart from "./views/Cart/Cart";
import Product from "./views/Product/Product";
import Category from "./views/Category/Category";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
function App(){
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path="*" element={<Home/>} />
    <Route exact path="/products" element={<Products/>} />
    <Route exact path="/product" element={<ItemDetailContainer/>} />
    <Route exact path="/cart" element={<Cart/>} />
    <Route exact path="/category/:id" element={<Category/>} />
    </Routes>
    </BrowserRouter>
    <Footer />
    </>
    );
}
export default App;