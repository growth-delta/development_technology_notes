import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

const Histogram = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/api/macro/euro-area/')
    .then(response => response.json())
    .then(data => setData(data));
  }, []);

  const histogramData = [
    {
      x: data.BCI,
      type: 'histogram',
      histnorm: 'probability density',
    },
  ];

  const histogramLayout = {
    title: 'Probability Distribution Histogram',
    xaxis: { title: 'BCI' },
    yaxis: { title: 'Density' },
  };

  return (
    <div>
      <Plot data={histogramData} layout={histogramLayout} />
    </div>
  );
};

export default Histogram;

