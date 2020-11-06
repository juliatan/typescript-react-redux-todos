import React from 'react';
import { connect } from 'react-redux';

import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

// Define what type of props we want App to take
interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}
class _App extends React.Component<AppProps> {
  render() {
    return <div>Hi there</div>;
  }
}

// state argument should take the shape of StoreState
// mapStateToProps function should return an object with todos key and array of Todo
const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
