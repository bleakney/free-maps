import React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl'; 
import MapPins from '../MapPins';

const testItems = [
  {"item": "couch","latitude":30.230015,"longitude":-97.824436},
  {"item": "shoes","latitude":30.273115,"longitude":-97.778055},
  {"item": "take-a-book-leave-a-book library","latitude":30.266644,"longitude":-97.730224}
]

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 30.266013,
    longitude: -97.746211,
    zoom: 12
  });

  return (
      <div>
    <ReactMapGL className="map"
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/bleakney/ckuisjewn1ymi17qqybxmk3e8"
      mapboxApiAccessToken="pk.eyJ1IjoiYmxlYWtuZXkiLCJhIjoiY2t1ZzJjb2RiMjBjMTJvbzhubnNqdWlncSJ9.NC3BTCx2RMAohqDdk2BW9A"
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      <MapPins data={testItems} />
      </ReactMapGL>
    </div>
  );
}

export default Map;