import React, { Component } from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color: string;
}

class App extends Component<AppProps> {
  render() {
    return <div>{this.props.color}</div>;
  }
}

ReactDOM.render(<App color="red" />, document.querySelector('#root'));
