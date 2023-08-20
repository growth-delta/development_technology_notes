import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Histogram from './components/Histogram.js'

function Distribution() {

  return (
    <div className="p-4">

      <Histogram />
      
    </div>
  );
}

ReactDOM.render(<Distribution />, document.getElementById('root'));