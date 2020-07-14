import React, { Component } from 'react';
import './App.css';

class Fils extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.onChange(document.getElementById('inputValue').value);
    console.log(this.props)
  }

  render() {
    return (
      <div className='App'>
        <fieldset>
          <legend>
            Fils :
          </legend>
          <input type='text' value={this.inputValue} onChange={this.onClick} id='inputValue' />
          <input type='button' value='valider' />
        </fieldset>
      </div>
    )
  }
}
class Pere extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texte: "react",
    }
    this.inputValue = this.inputValue.bind(this);

  }
  inputValue(value) {
    this.setState({
      texte: value
    });
    console.log(this.state.texte)
  }
  render() {
    const texteInput = this.state.texte;
    return (
      <div className='App-Pere'>
        <fieldset>
          <legend>
            Pere :
          </legend>
          <Fils value={texteInput} onChange={this.inputValue} />
          <Fille value={texteInput} />
          <p>{texteInput}</p>
        </fieldset>
      </div>
    )
  }
}
class Fille extends Component {
  
  render() {
    return (
      <div>
        <fieldset>
          <legend>
            Fille :
        </legend>
          <p>{this.props.value}</p>
        </fieldset>
      </div>
    )
  }
}
class App extends Component {
  render() {
    ; return (
      <div className="App App-link">
        <Pere />
      </div>
    );
  }
}

export default App;
