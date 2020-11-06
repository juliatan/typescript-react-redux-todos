import { Todo, FetchTodosAction } from '../actions/index';
import { ActionTypes } from '../actions/types';

// notation is saying state takes the shape of an array of Todo, and the initial value of state = []
export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
