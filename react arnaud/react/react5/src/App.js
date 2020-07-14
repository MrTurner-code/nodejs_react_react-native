import React, { Component } from 'react';
import './App.css';


class Email extends Component {
  render() {
    return (
      <div className="App-Email" >
        <input type="text" placeholder={this.props.ph_email}/>
      </div>
    )
  }
}
class MotDePasse extends Component {
  render() {
    return (
      <div className='App-MotDePasse'  >
        <input type='text' placeHolder={this.props.ph_password}/>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App App-link">
        <Email ph_email='Email' />
        <MotDePasse ph_password='Veuillez entrer votre mot de passe' />
      </div>
    );
  }
}

export default App;
