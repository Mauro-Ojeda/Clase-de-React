import React from "react";
import Item from '../Item/Item';

const ItemList = ({productos}) => {
  return (
    <div className="cards">
        {productos.map((product) => (
          <Item product={product} key={product.id}/>
        )
      )}
    </div>
  );
}
export default ItemList; 