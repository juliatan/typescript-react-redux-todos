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
  // don't expect function to return anything
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  // Typescript can implicitly assign type, but here we explicitly tell it to expect to return an array of JSX elements
  renderList(): JSX.Element[] {
    // again, defining todo: Todo is optional, but let's be explicit
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>;
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

// state argument should take the shape of StoreState
// mapStateToProps function should return an object with todos key and array of Todo
const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
