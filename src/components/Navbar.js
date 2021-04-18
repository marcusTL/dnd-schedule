import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
     <a className="navbar-brand ml-5" href="/">{/*For at komme tilbage til forsiden, skal "/" sættes som href=, "Frontpage" vil ikke virke, den vil bare navigere til en ny side som ikke findes.*/}
      <i class="fas fa-dragon" style={{width: '9px', color:'white'}} />
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
          <i className="fas fa-bars" style={{ color: '#fff' }} /> {/* Standard "bars"-ikon til mobilside. */} 
          </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <Link className="nav-link text-white text-uppercase ml-5 font-weight-bold" to="/">
              Hjem&nbsp;
              <i className="fas fa-home" />
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white text-uppercase ml-5 font-weight-bold"
              to="/dndsearch"
            >
              Søg&nbsp;
              <i class="fab fa-d-and-d fa-spin" />
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white text-uppercase ml-5 font-weight-bold"
              to="/About"
            >
              OM OS&nbsp;
              <i class="fas fa-dice-d20 fa-spin" />
            </Link>
          </li>
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;
