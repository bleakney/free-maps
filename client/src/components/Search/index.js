import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <div>
      <FontAwesomeIcon icon={faMapMarkerAlt} size="5x" color="rgb(116, 216,254)" alignmentBaseline="central"> </FontAwesomeIcon> 
      <h1>Free Maps</h1>
      <div className="box">
        <FontAwesomeIcon icon={faSearch} size="2x"></FontAwesomeIcon>
        <input type="text" name=""></input>
      </div>
      <h2>Find your next treasure here!</h2>
    </div>
  );
}

export default Search;
