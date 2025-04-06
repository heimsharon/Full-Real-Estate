import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import ReactLeafletSearch from 'react-leaflet-search';

// Fix default marker icon issue in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const Map: React.FC = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]} // Default center (London, for example)
      zoom={13}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      <ReactLeafletSearch
        position="topright"
        inputPlaceholder="Search for a location"
        showMarker={true}
        zoom={15}
        popUp={(info: any) => (
          <div>
            <p>{info?.info}</p>
            <p>{info?.latLng?.toString()}</p>
          </div>
        )}
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>A sample property location.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;