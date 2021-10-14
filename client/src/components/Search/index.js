import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import Particles from "react-particles-js";

function Search() {
  return (
    
    <div className="search-page">
      <FontAwesomeIcon icon={faMapMarkerAlt} size="5x" color="rgb(194, 228, 255)" alignmentBaseline="central"> </FontAwesomeIcon> 
      <h1>Free Maps</h1>
      <div className="box">
        <button id="search-glass"><FontAwesomeIcon icon={faSearch} size="3x"/></button>
        <input type="text" name="zip-code" placeholder="Enter your zipcode or city"></input>
      </div>
      <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />
      <h2>Find your next treasure here!</h2>
    </div>
  );
}

export default Search;
