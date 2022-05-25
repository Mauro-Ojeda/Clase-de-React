import { Link } from "react-router-dom"
export default function BtnBuy(){
  return(
    <button className="comprarBtn"><Link to="/cart">Ir Al Cart</Link></button>
  )
}