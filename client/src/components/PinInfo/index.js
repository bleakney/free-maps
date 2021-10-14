import React from 'react';

function PinInfo (props) {
   const { item } = props;
   console.log(item);

    return (
        <div className="pin-info-container">
            <h5>{item.title}</h5>
            <h6>Description:</h6>
            <p>{item.description}</p>
            <div className="pinInfo-quantity-container">
            <h6>Quantity:  </h6>
            <p className="pinInfo-quanity">{item.quantity}</p>
            </div>
            <h6>Located At:</h6>
            <p>{item.address}, {item.zipcode}</p>

        </div>
    )
};

export default PinInfo;