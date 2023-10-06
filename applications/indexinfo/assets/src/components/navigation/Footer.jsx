import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">

        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover" href="http://127.0.0.1:8000/admin" target="_blank" rel="noopener noreferrer">Admin</a>
          <a className="link link-hover" href="http://127.0.0.1:8000/api/subjects/" target="_blank" rel="noopener noreferrer">API: Subjects</a>
        </nav>

        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link to={'/'} className="fa-solid fa-house fa-xl hover:text-primary"></Link>
            <Link to={'/content-index'} className="fa-solid fa-clapperboard fa-xl hover:text-primary"></Link>
          </div>
        </nav>

        <aside>
          <p>Copyright © {currentYear} - All right reserved by XYZ corp</p>
        </aside>
        
      </footer>
    </div>
  );
};

export default Footer;