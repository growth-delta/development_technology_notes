import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// import MapComponent from './components/MapComponent.js';
import MapAIS from './components/MapComponentAIS.js';

function MarineTraffic() {

  return (
    <div className="container p-4">
      <h1>Marine Traffic</h1>

      <MapAIS />
      
    </div>
  );
}

ReactDOM.render(<MarineTraffic />, document.getElementById('root'));
