import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

// Define what we want the redux state object to look like
export interface StoreState {
  todos: Todo[];
}

// We expect combineReducers to return an object in the form of StoreState
export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
