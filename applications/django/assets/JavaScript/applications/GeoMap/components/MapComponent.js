import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

function MapComponent(props) {
  const { endpoint } = props;
  const [data, setData] = useState([]);

  const PinIcon = new Icon({
    iconUrl: "/static/images/graphics/pinpoint.png",
    iconSize: [30, 30],
  })

  useEffect(() => {
    fetch(`/data/api/maps/geo/`)
      .then(response => response.json())
      .then(data => setData(data));
  }, [endpoint]);

  return (
    <MapContainer center={[ 53.4810, -2.2374 ]} zoom={5} style={{height:'60vh'}}>
      <TileLayer      
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {data.map(marker => (
        <Marker position={[marker.latitude, marker.longitude]} icon={PinIcon}>
          <Popup>
            <div className=''>
              <a href={marker.address} target='_blank' rel='noopener noreferrer'>{marker.address}</a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapComponent;
