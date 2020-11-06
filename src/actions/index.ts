import axios from 'axios';
import { Dispatch } from 'redux'; // from redux docs, we see they have a Dispatch interface we can use
import { ActionTypes } from './types';

// define what we expect to get back from API...
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// option, but good practice to define exactly the type of what should be disptactched
export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
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
