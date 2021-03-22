import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom'


class Header extends Component{
    render(){
        return(
          <div>
            <nav class="navbar navbar-inverse">
              <div class="container-fluid">
                  <ul class="nav navbar-nav">
                      <li><Link to='/'>Frontpage</Link></li>
                      <li><Link to='/About'>About</Link></li>
                      <li><Link to='/DnDsearch'>DnD Search</Link></li>
                  </ul>
              </div>
            </nav>    
          
          </div>  
        );
    }
}

export default Header