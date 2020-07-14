import React, { Component } from 'react';
import './App.css';

class NR extends Component {
  render() {
    const { nr } = { nr: ["Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Bretagne", "Centre-Val de Loire", "Corse", "Grand Est", "Hauts-de-France", "Île-de-France", "Normandie", "Nouvelle-Aquitaine", "Occitanie", "Pays de la Loire", "Provence-Alpes-Côte d'Azur"] };
    return (
      <div>
        {nr.map((i, index) => (
          <p key={i}>-{index+1}- {i}</p>
        ))}
      </div>
    )
  }
}

class Consignes extends Component {
  render() {
    const { variables } = this.props;
    // const variable = this.props.variables
    const { intitule } = this.props;
    // const intitutle = this.props.intitule
    return (
      <div>
        <p>{intitule}</p>
        <ul>{variables.map(i => (
          <li key={i}>{i}</li>
        ))}</ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    const { items, intitule } = { items: ["l'ordinateur n'est pas autorisé .", "La calculatrice n'est pas autorisé", "Le téléphone n'est pas autorisé"], intitule: ["bonjour"] }
    return (
      <div className="App">
        <h1 className="App-link">EXAMEN</h1>
        <h2>CONSIGNES</h2>
        <Consignes intitule={intitule} variables={items} />
        <NR />
      </div>
    );
  }
}

export default App;
