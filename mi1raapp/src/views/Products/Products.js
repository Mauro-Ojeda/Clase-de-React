import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import Header from "../../components/Header/Header"
export default function Productos (){
  return(
    <div className="">
      <Header/>
      <section>
      <h2 className="textCenter">Productos</h2>
      <div className="App">
        <ItemListContainer/>
    </div>
    </section>
    </div>
  )
}