import axios from 'axios';
import { Dispatch } from 'redux'; // from redux docs, we see they have a Dispatch interface we can use
import { ActionTypes } from './types';

// define what we expect to get back from API...
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// optional, but good practice to define exactly the type of what should be dispactched
export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number; // let's just give it the id of the Todo to be deleted
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    // ...then tell axios.get we expect to get back an array of Todos
    const response = await axios.get<Todo[]>(url);
    dispatch<FetchTodosAction>({
      // type: 'FETCH_TODOS',
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};

// optional, but let's explicitly tell it that deleteTodo function needs to return something in the share of a DeleteTodoAction
export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};
