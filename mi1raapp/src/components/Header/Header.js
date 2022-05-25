import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
export default function Header(){
  const headerStyle = {
    display: "flex",
    fleWrap: "wrap",
    listStyle: "none",
    textDecoration: "none",
    backgroundColor: "#E5E3C9",
    color:"white",
  }
  const linkStyle = {
    listStyle: "none",
    textDecoration: "none",
    color:"rgb(63, 56, 68)",
    margin: "1rem",
  }
  return(
    <div className="links" style={headerStyle}>
      <div className="logo">🏀</div>
      <div className="titulo"><span><Link to="/">NBA Shop</Link> </span></div>
      <CartWidget/>
      <div><Link to="products" style={linkStyle}>Productos</Link></div>
      <div><Link to="/category/1" style={linkStyle}>Talle 1</Link></div>
      <div><Link to="/category/2" style={linkStyle}>Talle 2</Link></div>
      <div><Link to="/category/3" style={linkStyle}>Talle 3</Link></div>
    </div>
  )
}