import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <div className="hero-content text-center">
        <Link to={'/content-index'} className='btn btn-primary'>Learn Real Skills</Link>
      </div>
    </div>
  );
};

export default LandingPage;
