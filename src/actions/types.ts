import { FetchTodosAction, DeleteTodoAction } from './todos';

export enum ActionTypes {
  // we don't actually care about making this a string e.g. fetchTodos = 'FETCH_TODOS'
  // leaving is like this, Typescript automatically assigns fetchTodos = 0 since it's an enum
  fetchTodos,
  deleteTodo,
}

// Action is a type union - it can be either of these 2 interfaces
export type Action = FetchTodosAction | DeleteTodoAction;
