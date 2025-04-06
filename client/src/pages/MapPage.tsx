import React from 'react';
import Map from '../components/Map';

const MapPage: React.FC = () => {
  return (
    <div className="map-page">
      <h1>Property Locations</h1>
      <Map />
    </div>
  );
};

export default MapPage;