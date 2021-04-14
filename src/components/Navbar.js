import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand ml-5" href="#">
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <i className="fas fa-bars" style={{ color: '#fff' }} />
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <Link className="nav-link text-white text-uppercase ml-5" to="/">
              Home&nbsp;
              <i className="fas fa-home" />
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white text-uppercase ml-5"
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white text-uppercase ml-5"
              to="/dndsearch"
            >
              Search
            </Link>
          </li>
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;
