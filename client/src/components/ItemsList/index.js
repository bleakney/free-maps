import React from "react";
import Divider from '@mui/material/Divider';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Auth from '../../utils/auth';
// import { useMutation } from '@apollo/client';
// import { DELETE_ITEM } from '../../utils/mutations';


function ItemsList(props) {

    const {
        items,
        deleteItemHandler
    } = props;


    
  if (!items.length) {
    return <div>Nothing up for grabs in your area</div>;
  }

//   const userData = Auth.getProfile();
//   const username = userData.data.username;


  // create useState function linked to addItem to automatically refresh list when updated
  //   const [listState, setListState] = useState([]);

  return (
    <div className="itemListContainer">
      {items &&
        items.map((item) => (
          <div key={item._id} className="itemContainer">
              {Auth.loggedIn() && item.username === Auth.getProfile().data.username ? (
                  <>
                  <div className="deleteItemContainer">
                <h4 className="itemTitle">{item.title}</h4>
                <div className="edit-delete-btns-container">
                <IconButton>
                    <EditIcon sx={{color: "rgb(191, 171, 171)"}} />
                </IconButton>
                <IconButton onClick={() => deleteItemHandler(item._id)}>
                    <DeleteIcon sx={{color: "rgb(191, 171, 171)"}} />
                </IconButton>
                </div>
                </div>
                </>
              ) : (
                <h4 className="itemTitle">{item.title}</h4>
              )}
            
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
