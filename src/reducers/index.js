import {combineReducers} from 'redux';
import selectedItemReducer from './selectedItemReducer';
import spellReducer from './spellReducer'

export default combineReducers({
   spells: spellReducer,
   selectedItem: selectedItemReducer

});