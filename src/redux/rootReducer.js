//rootReducer

import {combineReducers} from 'redux';
import favReducer from './reducers/favReducer';
import userLoginReducer from './reducers/userLoginReducer';

export default combineReducers({
  favReducer,
  userLoginReducer,
});
