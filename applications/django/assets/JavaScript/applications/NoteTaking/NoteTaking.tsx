import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'

import App from './components/App.tsx';

function NoteTaking() {

  return (
    <React.StrictMode>
      <Router>
        <App/>
      </Router>
    </React.StrictMode>
  );

}

ReactDOM.render(<NoteTaking />, document.getElementById('root'));
