import React, { useState } from 'react';
import ReactMapGL, { Popup } from 'react-map-gl'; 
import IconButton from '@mui/material/IconButton';
import MapPins from '../MapPins';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ModalUnstyled from "@mui/core/ModalUnstyled/";
import { styled, Box } from "@mui/system";
import AddPinForm from '../AddPinModal';
import PinInfo from '../PinInfo';
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../utils/queries';


function Map() {

  const { data, loading } = useQuery(QUERY_ITEMS);
  const items = data?.items || [];
  


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
    height: "33vw",
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
    zoom: 10
  });

  const [popupInfo, setPopupInfo] = useState(null);

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
      <MapPins items={items} onClick={setPopupInfo} />

      {popupInfo && (
          <Popup
            tipSize={5}
            anchor="top"
            longitude={parseFloat(popupInfo.coordinates[0].longitude)}
            latitude={parseFloat(popupInfo.coordinates[0].latitude)}
            closeOnClick={false}
            onClose={setPopupInfo}
          >
            <PinInfo item={popupInfo} />
          </Popup>
        )}

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