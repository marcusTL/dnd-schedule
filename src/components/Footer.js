import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <div className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Kolonne 1 */}
            <div className="col-md-3 col-sm-6">
              <h4>Nikolaj er sej</h4>
              <ul className="list-unstyled">
                <li>Sejt sej</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
            </div>
            {/* Kolonne 2 */}
            <div className="col-md-3 col-sm-6">
              <h4>BIF</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
              </ul>
            </div>
            {/* Kolonne 3 */}
            <div className="col-md-3 col-sm-6">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
              </ul>
            </div>
            {/* Kolonne 4 */}
            <div className="col-md-3 col-sm-6">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer bund */} 
          {/* CopyRight-Logo og dato, årstal. */}
          <div className="footer-bottom">
            <p className="text-xs-center"> 
              &copy;{new Date().getFullYear()} Mikkel den smukke - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
