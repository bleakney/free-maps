import React, { useState } from "react";

function ItemsList({ items }) {
  if (!items.length) {
    return <div>Nothing up for grabs in your area</div>;
  }
  // create useState function linked to addItem to automatically refresh list when updated
//   const [listState, setListState] = useState([]);

  return (
    <div className="itemListContainer">
      {items &&
        items.map((item) => (
          <div key={item._id} className="itemContainer">
            <h4 className="itemTitle">{item.title}</h4>
            <div>
              <p>{item.description}</p>
              <p>{item.quantity}</p>
            </div>
            <div className="itemFooterContainer">
              <p className="itemFooterText">{item.createdAt}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ItemsList;
