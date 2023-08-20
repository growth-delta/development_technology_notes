import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet'

function MapAIS() {
  const [data, setData] = useState([]);

  // const PinIcon = new Icon({
  //   iconUrl: "/static/images/graphics/pinpoint.png",
  //   iconSize: [30, 30],
  // })

  useEffect(() => {
    fetch('/data/api/maps/ais/')
    .then(response => response.json())
    .then(data => setData(data));
  }, []);

  return (
    <MapContainer center={[ 53.4810, -2.2374 ]} zoom={5} style={{height:'60vh'}}>
      <TileLayer      
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {data.map(marker => (
        <Marker position={[marker.latitude, marker.longitude]}>{/* icon={PinIcon}> */}
          <Popup>
            <div>
                Ship ID: <b>{marker.ship_id}</b>
                <br />
                TimeStamp: <b>{marker.timestamp}</b>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapAIS;
