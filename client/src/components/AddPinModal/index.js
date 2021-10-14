import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_ITEM, ADD_COORDINATES } from "../../utils/mutations";
import Auth from "../../utils/auth";
import createCoordinates from '../../utils/geocoding';

function AddPinForm() {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    status: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    quantity: "",
  });

  const [addItem, { error }] = useMutation(ADD_ITEM);
  const [addCoordinates] = useMutation(ADD_COORDINATES);

  // update state when user fills out form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form handler
  const addPinFormHandler = async (e) => {
    e.preventDefault();
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }
    // add function to convert address to long/lat
    // default set availability to "available"
    // figure out how to send postedBy
    //

  
    // SOMETHING LIKE THIS:
    let data;
    try {
      data = await addItem({
        variables: { ...formState },
      });
      Auth.getProfile(data.data.addItem.token);
    } catch (error) {
      console.error(error);
    };

    try {
      const coordinates = await createCoordinates(formState.address, formState.city, formState.state, formState.zipcode);
      const { data2 } = await addCoordinates({
        variables: { itemId: data.data.addItem._id, longitude: coordinates[1] + '', latitude: coordinates[0] + '' }
      })
    } catch (error) {
      console.error(error);
    }



    setFormState({
      title: "",
      description: "",
      status: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      quantity: "",
    });
  };

  return (
    <div className="addPinFormContainer">
      <form onSubmit={addPinFormHandler}>
        <h3 className="form-title">Post an item?</h3>
        <div className="input-container">
          <input
            className="form-input"
            name="title"
            required="required"
            type="text"
            id="title"
            value={formState.title}
            onChange={handleInputChange}
          />
          <label>Title</label>
        </div>
        <div className="input-container">
          <input
            className="form-input"
            name="description"
            required="required"
            type="text"
            id="description"
            value={formState.description}
            onChange={handleInputChange}
          />
          <label>Description</label>
        </div>
        <div className="input-container">
          <input
            className="form-input"
            name="status"
            required="required"
            type="text"
            id="status"
            value={formState.status}
            onChange={handleInputChange}
          />
          <label>Status</label>
        </div>
        <div className="input-container">
          <input
            className="form-input"
            name="address"
            required="required"
            type="address"
            id="address"
            value={formState.address}
            onChange={handleInputChange}
          />
          <label>Address</label>
        </div>
        <div className="input-container">
          <input
            className="form-input"
            name="city"
            required="required"
            type="text"
            id="city"
            value={formState.city}
            onChange={handleInputChange}
          />
          <label>City</label>
        </div>
        <div className="state-zip-container">
        <div className="input-container">
          <input
            className="form-input"
            name="state"
            required="required"
            type="text"
            id="state"
            value={formState.state}
            onChange={handleInputChange}
          />
          <label>State</label>
        </div>
        <div className="input-container">
          <input
            className="form-input"
            name="zipcode"
            required="required"
            type="text"
            id="zipcode"
            value={formState.zipcode}
            onChange={handleInputChange}
          />
          <label>Zip code</label>
        </div>
        </div>
        <div className="input-container">
          <input
            className="form-input"
            name="quantity"
            required="required"
            type="text"
            id="quantity"
            value={formState.quantity}
            onChange={handleInputChange}
          />
          <label>Quantity</label>
        </div>
        <button className="modal-btn" type="submit">
          submit
        </button>
      </form>
      {error && <div>add pin failed</div>}
    </div>
  );
}

export default AddPinForm;
