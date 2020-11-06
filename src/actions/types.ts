export enum ActionTypes {
  // we don't actually care about making this a string e.g. fetchTodos = 'FETCH_TODOS'
  // leaving is like this, Typescript automatically assigns fetchTodos = 0 since it's an enum
  fetchTodos,
}
