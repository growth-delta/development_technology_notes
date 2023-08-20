import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// https://www.browse.ai/ | https://search.savills.com/list?SearchList=Id_46920+Category_RegionCountyCountry&Tenure=GRS_T_B&SortOrder=SO_PD&Currency=GBP&ResidentialSizeUnit=SquareFeet&LandAreaUnit=Acre&SaleableAreaUnit=SquareMeter&Category=GRS_CAT_RES&Shapes=W10
import MapComponent from './components/MapComponent.js';

function GeoMap() {

  return (
    <div className="container p-4">
      <h1>Geographic Map</h1>

      <MapComponent />
      
    </div>
  );
}

ReactDOM.render(<GeoMap />, document.getElementById('root'));
