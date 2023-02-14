import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Button from "react-bootstrap/Button";

/* const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -33.298041,
  lng: -62.200607,
}; */

const Maps = ({ open, onClose }) => {
  const keyMap = process.env.REACT_APP_API_KEY_MAPS;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: keyMap,
  });

  if (!open) return null;

  return (
    <div>
      <Button onClick={onClose} variant="info">
        cerrar
      </Button>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13341.409359714693!2d-62.19461670809379!3d-33.28344409315179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c9023c16f178b9%3A0x28ce2d58ad26a09e!2sCorral%20de%20Bustos%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1676338138472!5m2!1ses-419!2sar"
          width="400"
          height="450"
          loading="lazy"
          
        ></iframe>
      </div>

      
      
      {/* Desde esta linea, hasta la 52, es el consumo de la API de Google Maps; está comentado porque ahora no es mas gratuita, y el mapa se ve con una marca de agua; asi que por eso decidí dejarlo momentáneamente con un <iframe/> (Solo para buena experiencia). Ayer puse mi tarjeta de crédito, y por eso pude consumirla sin problema, para que ustedes puedan ver bien el trabajo; pero al estar el repo "público" en github, me da desconfianza dejar la api-key acá." */}


      {/*  {isLoaded ? 
      (<GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
      </GoogleMap>) : 
      (<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13341.409359714693!2d-62.19461670809379!3d-33.28344409315179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c9023c16f178b9%3A0x28ce2d58ad26a09e!2sCorral%20de%20Bustos%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1676338138472!5m2!1ses-419!2sar" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>) }  */}
    </div>
  );
};

export default Maps;
