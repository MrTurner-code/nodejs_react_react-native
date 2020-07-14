import React, { Component } from 'react';
import './App.css';

class MaClasse extends Component {
  render() {
    return (
      <div className='App'>
        {this.props.variable}
      </div>
    );
  }
}


class App extends Component {
  render() {
    ; return (
      <div className="App App-link">
        <MaClasse variable="quelque chose" />
      </div>
    );
  }
}

export default App;
