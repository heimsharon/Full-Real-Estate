import React from 'react';
import NavBar from '../components/NavBar'; 
import 'leaflet/dist/leaflet.css';
import '../styles/Global.css';
import '../styles/MapPage.css';

const MapPage: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194154846818!3d37.77492927975986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f4e0b1b1%3A0x8c2e0b1b1b1b1b1b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapPage;