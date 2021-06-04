import { combineReducers } from 'redux';
import alertsReducer from './reducers/alerts.reducer';
import habbitsReducer from './reducers/habbits.reducer'


export const rootReducer = combineReducers({
  habbits: habbitsReducer,
  alerts: alertsReducer
})