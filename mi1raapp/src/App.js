import React from "react"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
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
    <h2 className="textCenter">Lorem</h2>
      <p className="textCenter">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam voluptatum consequuntur quia ipsum iure sequi exercitationem blanditiis aperiam maiores. Consequatur dolorum odio temporibus explicabo saepe, cumque reiciendis provident doloremque.</p>
    </section>
    <Footer />
    </>
    );
}
export default App;
