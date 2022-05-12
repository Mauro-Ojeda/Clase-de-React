import React from "react"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {products} from "./data/ItemList"
import Item from "./components/Item/Item";
function App(){
  const task = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000)
    
  })
  task.then((result) => {
    console.log(result)
  }, err => {
    console.log(err)
  }).catch((err) => {
    console.log(err)
  })
  return (
    <>
    <Navbar />
    <main>
      <h2 className="textCenter">Productos</h2>
      <div className="App">
      {products.map((product, index) => (
          <Item product={product} key={product.id}/>
        )
      )}
    </div>
    </main>
    <section>
    <h2 className="textCenter">Lorem</h2>
      <p className="textCenter">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam voluptatum consequuntur quia ipsum iure sequi exercitationem blanditiis aperiam maiores. Consequatur dolorum odio temporibus explicabo saepe, cumque reiciendis provident doloremque.</p>
    </section>
    <Footer />
    </>
    );
}
export default App;
