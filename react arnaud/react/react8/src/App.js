import React, { Component } from 'react';
import './App.css';


/*Exercice du BLOG:

Page qui contiendra des posts pour un blog
  //chaque post possède : 
      auteur, date/heure, titre, contenu
  //produire les composants
  //mais surtout savoir avant si tel ou tel objet   //devra être un composant ou élément inséré en    //tant que composant
*/
class Image extends Component {

  state = {
    chemin: "",
    fichierImage: "",
  };
  onChange(event) {
    const fichier = new FileReader();
    const fichierImage = event.target.files[0];
    fichier.onloadend = () => {
      this.setState(
        {
          chemin: fichier.result,
          fichierImage: fichierImage,
        }
      )
    }
    fichier.readAsDataURL(fichierImage);
  }
  //fileReader
  //      onLoadEnd
  //      readAsDataUr
  render() {
    let img = null;
    const chemin = this.state.chemin;
    if (chemin)
      img = <img src={chemin} alt="file du poste" />
    else
      img = <p>[aucune image a afficher pour l'instant]</p>



    //<img src={chemin}/>
    return (
      <div className='App-blog'>
        <input type="file" onChange={(event) => this.onChange(event)} />
        {img}
      </div>
    )
  }
}
class PostAdmin extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      nbCar: 0
    };
  }
  handleChange(event) {
    this.setState(
      {
        nbCar: event.target.value.length
      }
    );
  }
  render() {
    const maxLength = 280;
    return (
      <div className='App-blog'>
        <label> Auteur :
          <input type="text" />
        </label>
        <label> Titre :
          <textarea cols="50" rows="2"></textarea>
        </label>
        <label> Contenu du Post :<span>({this.state.nbCar} - {maxLength})</span>
          {
            (
              maxLength - this.state.nbCar > maxLength / 2) ? "" : " caractères restants : " +
              (maxLength - this.state.nbCar).toString()
          }
          <textarea style={(maxLength - this.state.nbCar) >= 5 ? { border: "2px solid black" } : { border: "2px solid red" }} cols="50" rows="5" onChange={this.handleChange}></textarea>
        </label >
        <label> Date et Heure :
          <input type="date" />
        </label>
        <label>Image :
          <Image />
        </label>
      </div >
    )
  }
}
class Entete extends Component {
  render() {
    return (
      <div className='App-header'>
        <h1>Bienvenue sur mon blog</h1>
      </div>)
  }
}

class Admin extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Partie administrative du blog</h1>
      </div>
    )
  }
}
class BlogAdmin extends Component {
  render() {
    return (
      <div className='App'>
        <Admin />
        <PostAdmin />
      </div>
    )
  }
}



class App extends Component {
  render() {

    return (

      <div className='App'>
        <Entete />
        <BlogAdmin />
      </div>
    )
  }
}
export default App;
