//Inspiration fra tidligere opgave: http://heho-zealand.dk/WebAppsF2020/ReactRouterExercise1.html

//VIGTIGT!!! Denne kommando skal installeres lokalt for at Routing virker! 
// -->   npm install --save react-router-dom


import React from 'react'
import { Route, Link } from 'react-router-dom'
import Frontpage from './Frontpage'
import About from './About'

const App = () => (
    <div>
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">                
                <ul class="nav navbar-nav">
                    <li><Link to='/'>Frontpage</Link><br></br> </li>
                    <li><Link to='/About'>About</Link></li>
                </ul>
            </div>
        </nav>

        <Route exact path='/' component={Frontpage} />
        <Route path='/About' component={About} />
    </div>
)

export default App