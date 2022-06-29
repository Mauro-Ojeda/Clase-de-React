import { Link } from "react-router-dom";
export default function Item ({product}) {

  return (
    <>
    <div className="card">
      <img src={product.images} alt="" className="imgCard"></img>
      <h3 className="textCenter ">{product.title}</h3>
      <p className="textCenter">Stock: {product.stock}</p>
      <p className="textCenter">Price : {product.price}</p>
      <p className="textCenter">Talle : {product.talle}</p>
      <button className="btnVer"><Link to={`/detail/${product.id}`}> Ver más </Link> </button>
      
    </div>
    </>
  );
}