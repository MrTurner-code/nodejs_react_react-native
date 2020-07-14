import React, { Component } from 'react';
import './App.css';

function MaFonction(props) {
  return <div>Mon texte dans la div: {props.parametre}</div>
}

class App extends Component {
  render() {
    const maFonction = <MaFonction parametre="une Information" />
      ; return (
        <div className="App App-link">
          {maFonction}
        </div>
      );
  }
}

export default App;
