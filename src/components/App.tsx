import React from 'react';
import { connect } from 'react-redux';

import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

// Define what type of props we want App to take
interface AppProps {
  todos: Todo[];
  fetchTodos: Function; // typeof fetchTodos doesn't work because Typescript doesn't know how to deal with redux-thunk promises right now
  deleteTodo: typeof deleteTodo; // typeof is effectively a copy-paste of a type
}
class _App extends React.Component<AppProps> {
  // don't expect function to return anything
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  // Typescript can implicitly assign type, but here we explicitly tell it to expect to return an array of JSX elements
  renderList(): JSX.Element[] {
    // again, defining todo: Todo is optional, but let's be explicit
    return this.props.todos.map((todo: Todo) => {
      return (
        <div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
          {todo.title}
        </div>
      );
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

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
