import { Todo, Action, ActionTypes } from '../actions/index';

// notation is saying state takes the shape of an array of Todo, and the initial value of state = []
export const todosReducer = (state: Todo[] = [], action: Action) => {
  // switch statement acts as a type guard. Useful since action is a type union of Action.
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
