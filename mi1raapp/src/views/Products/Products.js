import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import { useParams } from "react-router-dom"
export default function Productos (){
  const {id} = useParams();
  return(
    <div className="">
      <section>
      <h2 className="textCenter">Productos</h2>
      <div className="App">
        <ItemListContainer categoryId={id}/>
    </div>
    </section>
    </div>
  )
}