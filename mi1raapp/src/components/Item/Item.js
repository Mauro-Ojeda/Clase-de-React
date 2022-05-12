export default function Item ({product}) {
  return (
    <>
    <div className="card">
      <img src={product.images} alt="" className="imgCard"></img>
      <h3 className="textCenter">{product.title}</h3>
      <p className="textCenter">Stock: {product.stock}</p>
      <p className="textCenter">Price : {product.price}</p>
      <button>Ver más</button>
    </div>
    </>
  );
}