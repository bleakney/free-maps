import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

function Search() {
  return (
   <div>
       <h1>Free Maps</h1>
       <div className="box">
           <input type="text" name=""></input>
           <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
       </div>
   </div>
  );
}

export default Search;
