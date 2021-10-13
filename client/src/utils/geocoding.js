export const createCoordinates = (address, city, state, zipcode) => {

    const geocodingToken = "l7WaL1SVv79paMDRxtv3gPvhcNkqI6Q1";
    // convert address input to api format
    const addressArr = address.split(' ');
    let newAddressArr = [];
    for (i = 0; i < addressArr.length; i++) {
        if (i < addressArr.length - 1) {
        let addressPartial = addressArr[i] + '+';
        newAddressArr.push(addressPartial);
        } else {
            newAddressArr.push(addressArr[i]);
        }
    }
    const newAddress = newAddressArr.join('');
  
   async function fetchCoordinates (apiKey, address, city, state, zipcode) {
        fetch(
            `http://www.mapquestapi.com/geocoding/v1/address?key=${apiKey}&street=${address}&city=${city}&state=${state}&postalCode=${zipcode}`,
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json" 
                }
        })
        .then(response => response.json())
        .then(data => {
              const latitude = data.results[0].locations[0].displayLatLng.lat;
              const longitude = data.results[0].locations[0].displayLatLng.lng;
  
              console.log(latitude, longitude);
              return [latitude, longitude];
        })
        
    };
  
    fetchCoordinates(geocodingToken, newAddress, city, state, zipcode);
  
  };

