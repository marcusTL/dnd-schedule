import React from 'react'  
import ReactDOM from 'react-dom' 
import { BrowserRouter } from 'react-router-dom' 
import App from './components/App';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers';
import {Provider} from 'react-redux'
// import '@fortawesome/fontawesome-free/css/all.min.css'; import
// 'bootstrap-css-only/css/bootstrap.min.css'; import
// 'mdbreact/dist/css/mdb.css';
  
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>  
            <App />  
        </BrowserRouter> 
    </Provider>  
), document.getElementById('root'));