const createCoordinates = async (address, city, state, zipcode) => {

    const geocodingToken = "l7WaL1SVv79paMDRxtv3gPvhcNkqI6Q1";
    // convert address input to api format
    const addressArr = address.split(' ');
    let newAddressArr = [];
    for (let i = 0; i < addressArr.length; i++) {
        if (i < addressArr.length - 1) {
        let addressPartial = addressArr[i] + '+';
        newAddressArr.push(addressPartial);
        } else {
            newAddressArr.push(addressArr[i]);
        }
    }
    const newAddress = newAddressArr.join('');
  
   async function fetchCoordinates (apiKey, address, city, state, zipcode) {
        let response = await fetch(
            `http://www.mapquestapi.com/geocoding/v1/address?key=${apiKey}&street=${address}&city=${city}&state=${state}&postalCode=${zipcode}`,
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json" 
                }
        });
        let data = await response.json();
        const latitude = data.results[0].locations[0].displayLatLng.lat;
        const longitude = data.results[0].locations[0].displayLatLng.lng;

        return [latitude, longitude];
    
    };
  
    let coords = await fetchCoordinates(geocodingToken, newAddress, city, state, zipcode);
    return coords;
  
  };

  export default createCoordinates;

