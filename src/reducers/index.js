import {combineReducers} from 'redux';

export default combineReducers({
    names: (name=[],action) => {
        switch (action.type) {
            case 'FETCH_DATA': return action.payload;
            default: return name; 
        }
    }

}) 

