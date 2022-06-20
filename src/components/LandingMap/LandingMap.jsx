import "./LandingMap.css";
import { useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from "react-leaflet";

export function LandingMap() {

  function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }


  return (
    <>
      <h2 className="map-title">Mapa atual da cidade:</h2>
     <div className="map-box-container">
     <MapContainer className="map-box" center={[-16.1887, -40.688]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-16.1887, -40.688]}>
          <Popup className="popup-box">
           <h2 className="popup-text"> A pretty CSS3 popup. <br /> Easily customizable.</h2>
          </Popup>
        </Marker>
      </MapContainer>

      <button onClick={LocationMarker} className="location-btn">Ir para sua localização atual</button>
     </div>
    </>
  );
}
