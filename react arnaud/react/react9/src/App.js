import React, { Component } from 'react';
import './App.css';
import chargement from './chargement.gif'

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      error: null,
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch("http://localhost:8888/api4react.php")
      .then(res => res.json())
      .then((res) => {
        this.setState({
          isLoaded: true,
          datas: res.datas,
        });
      },
        (error) => {
          this.setState({
            isLoaded: false,
            error: error
          })
        }
      )
  }
  render() {
    const { datas, error, isLoaded } = this.state;
    if (error) {
      return (
        <div>ERREUR : {error.message}</div>
      );
    }
    else {
      if (!isLoaded) {
        return (<div><img src={chargement} alt='gif' /></div>)
      } else {
        return (
          <div>
            {datas.map(data => (
              <p>
                {data.id_post}
                {data.auteur}
                {data.titre}
                {data.contenu}
                {data.dateheure}
              </p>)
            )
            }
          </div>
        )
      }
    }
  }
}
class App extends Component {
  render() {
    return (
      <div className="App" >
        <Api />
      </div>
    );
  }
}
export default App;

