import React from "react"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
function App(){
  return (
    <>
    <Navbar />
    <main>
      <h2>Productos</h2>
    <ItemListContainer/>
    </main>
    <section>
    <h2>Lorem</h2>
      <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam voluptatum consequuntur quia ipsum iure sequi exercitationem blanditiis aperiam maiores. Consequatur dolorum odio temporibus explicabo saepe, cumque reiciendis provident doloremque.</p>
    </section>
    <Footer />
    </>
    );
}
export default App;
