import { combineReducers } from 'redux';
import { todosSlice } from './reducers/todos.slice';


export const rootReducer = combineReducers({
  todos: todosSlice.reducer,
})