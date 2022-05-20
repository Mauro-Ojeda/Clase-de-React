import Header from "../../components/Header/Header";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
export default function Category (){
  const {id}=useParams();
  console.log(id);
  return(
    <>
    <Header/>
    <ItemListContainer />
    </>
  )
}
