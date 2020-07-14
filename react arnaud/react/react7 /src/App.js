import React, { Component } from 'react';
import './App.css';

class Entete extends Component {
  render() {
    return (
      <div>
        <h1>PAUL EMPLOI</h1>
        <h3>retrouvez les offres de chômage par ici....</h3>
      </div>
    )
  }
}

class Menu extends Component {
  render() {
    const { items, refs } = this.props;
    return (
      <div>
        <ul>
          {items.map(i => (
            <a href={refs} className='App-link'>  {i}  </a>

          )
          )}
        </ul>
      </div>
    );
  }
}
class App extends Component {
  render() {
    const { items, refs } = {
      items: ["ACCUEIL", "ENTREPRISE", "CANDIDAT", "CONTACT"], refs: ["accueil.html", "entreprise.html", "candidat.html", "contact.html"]
    }
    return (
      <div className='App'>
        <Entete />
        <Menu items={items} refs={refs} />
      </div>
    )
  }
}
export default App;
