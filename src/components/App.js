//Inspiration fra tidligere opgave: http://heho-zealand.dk/WebAppsF2020/ReactRouterExercise1.html

//VIGTIGT!!! Denne kommando skal installeres lokalt for at Routing virker.
// -->   npm install --save react-router-dom
import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Navbar'
import Main from './Main'
import Footer from './Footer'
import './App.css';
// import TempleOS from "../assets/Lydklip/TempleOSHymnRisen.mp3";
// import {Howl, Howler} from "howler";

class App extends Component { 

  render() {
    return (
      <div className="App">
        
       <Header/>
        
        <Main/>
        <Footer/>
      </div>
    );
  }
}

/*
const App = () => (
  <div>
      <Header/>

      <Route exact path='/' component={Frontpage} />
      <Route path='/About' component={About} />
  </div>  
)
*/
export default App