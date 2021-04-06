// import React from 'react';
// // import './Footer.css'
// function Footer() {
//   return (
//     <div className="main-footer">
//       <div className="container">
//         <div className="row">
          
//           {/* Kolonne 1 */}
//           <div className=".col-md-3.col-sm-6">
//             <h4>Nikolaj er faktisk ok sej.</h4>
//             <ul className="list-unstyled">
//               <li>Test, test</li>
//               <li>Test, test</li>
//               <li>Test, test</li>
//               <li>Test, test </li>
//             </ul>
//           </div>

//           {/* Kolonne 2 */}
//           <div className=".col-md-3.col-sm-6">
//             <h4>TEST!</h4>
//             <ul className="list-unstyled">
//               <li>Test, test</li>
//               <li>Test, test</li>
//               <li>Test, test</li>
//               <li>Test, test</li>
//             </ul>
//           </div>

//           {/* Kolonne 3 */}
//           <div className=".col-md-3.col-sm-6">
//             <h4>TEST!</h4>
//             <ul className="list-unstyled">
//               <li>Test, test</li>
//               <li>Test, test</li>
//               <li>Test, test</li>
//               <li>Test, test</li>
//             </ul>
//           </div>

//           {/* Kolonne 4 */}
//           <div className=".col-md-3.col-sm-6">
//             <h4>TEST!</h4>
//             <ul className="list-unstyled">
//               <li>Test, test</li>
//               <li>Test, test</li>
//               <li>Test, test</li>
//               <li>Test, test</li>
//             </ul>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer
import React from 'react';

import { BackTop } from 'antd';

function Footer() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="http://google.com">Tech</a>
        </div>
        <ul className="socials">
          <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
          <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
        </ul>
        <div className="copyright">Copyright &copy; 2020 Tech</div>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  );
}

export default Footer;