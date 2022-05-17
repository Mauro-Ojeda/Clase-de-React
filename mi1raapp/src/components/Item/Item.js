export default function Item ({product}) {
  function handleClick(e){
    e.preventDefault();
    console.log(product.id);
    localStorage.setItem('detalle',JSON.stringify (product));
  }
  return (
    <>
    <div className="card">
      <img src={product.images} alt="" className="imgCard"></img>
      <h3 className="textCenter">{product.title}</h3>
      <p className="textCenter">Stock: {product.stock}</p>
      <p className="textCenter">Price : {product.price}</p>
      <button onClick={handleClick}>Ver más</button>
    </div>
    </>
  );
}