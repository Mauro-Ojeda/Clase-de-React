import React from "react"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
function App(){
  return (
    <>
    <Navbar />
    <main>
      <h2 className="textCenter">Productos</h2>
      <div className="App">
        <ItemListContainer/>
    </div>
    </main>
    <section>
    <ItemDetailContainer/>
    </section>
    <Footer />
    </>
    );
}
export default App;