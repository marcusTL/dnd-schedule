import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Kolonne 1 */}
            <div className="col-md-3 col-sm-6 ">
            
            <h4>Kontakt</h4>
            
              <ul className="list-unstyled">
                <li>Zealand - Sjællands Erhversakadami</li>
                <li>4000, Roskilde</li>
                <li>Maglegårdsvej 2</li>
                <li>Telefon: 4550762630</li>
              </ul>
            </div>
            {/* Kolonne 2 */}
            <div className="col-md-3 col-sm-6">
              <h4>Kolonne 2</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Link til andre sider</a>
                </li>
                <li>
                  <a href="#">Link til andre sider</a>
                </li>
                <li>
                  <a href="#">Link til andre sider</a>
                </li>
                <li>
                  <a href="#">Link til andre sider</a>
                </li>
              </ul>
            </div>
            {/* Kolonne 3 */}
            <div className="col-md-3 col-sm-6">
              <h4>Kolonne 3</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Link til andre sider</a>
                </li>
                <li>
                  <a href="#">Link til andre sider</a>
                </li>
                <li>
                  <a href="#">Link til andre sider</a>
                </li>
                <li>
                  <a href="#">Link til andre sider</a>
                </li>
              </ul>
            </div>
            {/* Kolonne 4 */}
            <div className="col-md-3 col-sm-6">
              <h4>Kolonne 4</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Link til andre sider</a>
                </li>
                <li>
                  <a href="#">Link til andre sider</a>
                </li>
                <li>
                  <a href="#">Link til andre sider</a>
                </li>
                <li>
                  <a href="#">Link til andre sider</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bund */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Fangehuller og Drager - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;
//1 "rem",R.E.M, er lig med skriftstørelsen af HTML-elementet, hvilket er 16px for de fleste browsers.