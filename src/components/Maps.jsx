import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Button from "react-bootstrap/Button";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -33.298041,
  lng: -62.200607,
};

const Maps = ({ open, onClose }) => {
  const keyMap = process.env.REACT_APP_API_KEY_MAPS;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: keyMap,
  });

  if (!open) return null;

  return (
    <div>
          <Button
          onClick={onClose}
          variant="info"
        >
            cerrar
        </Button>
 
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
      </GoogleMap>
    </div>
  );
};

export default Maps;
