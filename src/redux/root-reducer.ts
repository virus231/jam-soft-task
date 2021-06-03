import { combineReducers } from 'redux';
import habbitsReducer from './reducers/habbits.reducer'


export const rootReducer = combineReducers({
  habbits: habbitsReducer
})