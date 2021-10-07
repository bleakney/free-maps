import React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function Map() {
  const [viewport, setViewport] = useState({
    width: 800,
    height: 400,
    latitude: 30.2672,
    longitude: -97.7431,
    zoom: 8,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="pk.eyJ1IjoiYmxlYWtuZXkiLCJhIjoiY2t1ZzJjb2RiMjBjMTJvbzhubnNqdWlncSJ9.NC3BTCx2RMAohqDdk2BW9A"
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}

export default Map;