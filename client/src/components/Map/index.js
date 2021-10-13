import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl'; 
import IconButton from '@mui/material/IconButton';
import MapPins from '../MapPins';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ModalUnstyled from "@mui/core/ModalUnstyled/";
import { styled, Box } from "@mui/system";
import AddPinForm from '../AddPinModal';

const testItems = [
  {"item": "couch","latitude":30.230015,"longitude":-97.824436},
  {"item": "shoes","latitude":30.273115,"longitude":-97.778055},
  {"item": "take-a-book-leave-a-book library","latitude":30.266644,"longitude":-97.730224}
]

function Map() {
  // add pin modal 
  const StyledModal = styled(ModalUnstyled)`
    position: fixed;
    z-index: 1300;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Backdrop = styled("div")`
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
  `;
  const style = {
    width: "30vw",
    height: "30vw",
    bgcolor: "rgb(194, 228, 255)",
    p: 2,
    px: 4,
    pb: 3,
    borderRadius: 3,
  };
  // set add pin Modal visibility state
  const [openAddPinModal, setAddPinModalOpen] = useState(false);
  const handleAddPinModalOpen = () => setAddPinModalOpen(true);
  const handleAddPinModalClose = () => setAddPinModalOpen(false);

  // set up map
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
      <div className="addPinBtnContainer">
      <IconButton onClick={handleAddPinModalOpen}>
      <AddCircleIcon sx={{fontSize: '4vw', color: 'rgb(191, 171, 171)'}}/>
      </IconButton>
      </div>
      <MapPins data={testItems} />
      </ReactMapGL>

      <StyledModal
      open={openAddPinModal}
      onClose={handleAddPinModalClose}
      BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <AddPinForm />
        </Box>
      </StyledModal>
    </div>
  );
}

export default Map;