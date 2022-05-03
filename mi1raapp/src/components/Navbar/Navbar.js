function Navbar() {
  const headerStyle = {
    display: "flex",
    fleWrap: "wrap",
    listStyle: "none",
    textDecoration: "none",
    backgroundColor: "#E5E3C9",
    color:"white",
  }
  return (
      <header className="header"style={headerStyle}>
      <div className="logo">🏀</div>
      <div className="titulo"><a href="index.html">NBA Shop</a></div>
      <nav>
      <ul className="links">
        <li><a href="productos.html">Productos</a></li>
        <li><a href="#footer">Contacto</a></li>
      </ul>
      </nav>
      </header>
    );
}
export default Navbar;