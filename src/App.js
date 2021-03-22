//Inspiration fra tidligere opgave: http://heho-zealand.dk/WebAppsF2020/ReactRouterExercise1.html

//VIGTIGT!!! Denne kommando skal installeres lokalt for at Routing virker! 
// -->   npm install --save react-router-dom


import React, {Component} from 'react'
import Header from './Header'
import Main from './Main'


class App extends Component { 
    render() {
      return (
        <div className="App">
          <Header/>
          <Main/>
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