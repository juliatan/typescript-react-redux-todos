import { Todo, Action, ActionTypes } from '../actions/index';

// notation is saying state takes the shape of an array of Todo, and the initial value of state = []
export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
