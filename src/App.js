//Nikolaj forsøger på noget routing og link!

import {Route, Link} from 'react-router-dom'
  
//Inspiration fra tidligere opgave (Step9) -> http://heho-zealand.dk/WebAppsF2020/ReactRouterExercise1.html
const App = () => (  
  <div>  
    <Link to='/'>Forside!</Link><br></br>  
    <Link to='/Schedule'>Page2</Link>  
    <Link to='/About'>Page2</Link>  

    <Route exact path='/' component={Frontpage}/>  
    <Route path='/Schedule' component={Schedule}/>
    <Route path='/About' component={About}/>  
  </div>  
)




//DETTE ER ORIGINAL INDHOLD FRA OPSÆTTELSEN

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
