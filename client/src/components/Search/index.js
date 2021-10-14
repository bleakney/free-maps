import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBold, faSearch } from "@fortawesome/free-solid-svg-icons";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";

function Search() {
  return (
    <div className="search-page">
      <FontAwesomeIcon icon={faMapMarkerAlt} size="6x" color="rgb(194, 228, 255)" alignmentBaseline="central"> </FontAwesomeIcon> 
      <Link to="/map">
              <h1>Free Maps</h1>
            </Link>
      {/* <div className="box">
        <button id="search-glass"><FontAwesomeIcon icon={faSearch} size="3x"/></button>
        <input type="text" name="zip-code" placeholder="Enter your zipcode or city"></input>
      </div> */}
      <h2>Find your next treasure <Link to="/map">here!</Link></h2>
      <Particles
      className="particles-board"
      params={{
        "particles": {
	        "number": {
	            "value": 180,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 5,
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
	                "size": 0.75,
	                "opacity": 1
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
      }}>

      </Particles>
    </div>
  );
}

export default Search;
