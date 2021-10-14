import React from "react";
import Divider from '@mui/material/Divider';


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
              <h5>Quantity: </h5>
              <p>{item.quantity}</p>
              <h5>Description: </h5>
              <p>{item.description}</p>
              <h5>Address: </h5>
              <p>{item.address}</p>
            </div>
            <div className="itemFooterContainer">
              <p className="itemFooterText">Posted on {item.createdAt}</p>
            </div>
            <Divider />
          </div>
        ))}
    </div>
  );
}

export default ItemsList;