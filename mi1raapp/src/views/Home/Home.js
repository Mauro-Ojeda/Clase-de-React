import Header from "../../components/Header/Header"
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
export default function Home (){
  return(
    <div className="fondo">
      <Header/>
      <h2 className="textCenter">Home</h2>
      <ItemListContainer/>
    </div>
  )
}