import React, { Component } from 'react';
import './App.css';
import Footer from './class/footer'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: ""
    }
    this.onClickMenu = this.onClickMenu.bind(this);
  }
  onClickMenu(event) {
    this.setState({
      page: event.target.value
    });
  }
  render() {
    let texteMenu1 = "";
    let texteMenu2 = "";
    const langue = this.props.langue;
    if (this.props.langue === 'FR') {
      texteMenu1 = "Accueil";
      texteMenu2 = "Contact";
    } if (this.props.langue === 'EN') {
      texteMenu1 = "Home";
      texteMenu2 = "Contact";
    }
    return (
      <div>
        <header className='App'>
          <nav>
            <button value='accueil' onClick={this.onClickMenu}>{texteMenu1}</button>
            <button value='contact' onClick={this.onClickMenu}>{texteMenu2}</button>
          </nav>
        </header >
        <Page langue={langue} page={this.state.page} />
      </div >
    )
  }
}

class Langue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langue: "FR",
      intro: 'Bienvenue sur notre site en version française',
    }
  }
  onClickFr() {

    this.setState({ langue: "FR" });
    this.setState({ intro: "Bienvenue sur notre site en version française." });
  }
  onClickUk() {

    this.setState({ langue: 'EN' });
    this.setState({ intro: "welcome to our site in english version." })
  }
  render() {
    const intro = this.state.intro;
    const curseurMain = {
      cursor: "pointer",
      opacity: 1.0,
    };
    const curseurParDefaut = {
      opacity: 0.5,
      cursor: "default",
    };
    const fr = ' 🇫🇷 ';
    const uk = ' 🏴󠁧󠁢󠁥󠁮󠁧󠁿 ';
    return (
      <div className='App'>

        <p className='drapeau' style={this.state.langue === "FR" ? curseurParDefaut : curseurMain} onClick={() => this.onClickFr()}>{fr}</p>
        <p className='drapeau' style={this.state.langue === "EN" ? curseurParDefaut : curseurMain} onClick={() => this.onClickUk()}>{uk}</p>
        <p>{intro}</p>
        <Menu langue={this.state.langue} />
        <Footer langue={this.state.langue} />
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Langue />
      </div>
    );
  }
}

export default App;


class Page extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const langue = this.props.langue;
    const page = this.props.page;
    let accueil = false;
    let contact = false;
    if (page === 'accueil') {
      accueil = true;
    }
    if (page === 'contact') {
      contact = true;
    }
    accueil = page === "accueil";
    contact = page === "contact";
    return (
      <div className="Menu-Page">
        <div className='Page-Accueil' style={accueil ? { display: "inline-block" } : { display: "none" }}>
          <Accueil langue={langue} />
        </div>
        <div className='page-Contact' style={contact ? { display: "inline-block" } : { display: "none" }}>
          <Contact langue={langue} />
        </div>
      </div>
    )
  }
}
class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texteFr: "Vous vous trouvez sur la page française du site",
      texteEn: "you are at the home page here",
    };

  }
  render() {
    let texte = "";
    const langue = this.props.langue;
    if (langue === "FR") {
      texte = this.state.texteFr;
    } if (langue === 'EN') {
      texte = this.state.texteEn;

    }
    return (
      <div>
        {texte}
      </div>
    )
  }
}
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texteFr: "formulaire de contact",
      texteEn: "Contact Form",
      labelEmailFr: "Email",
      labelEmailEn: "Email",
      labelObjetFr: "Objet",
      labelObjetEn: "Object",
      valueSubmitFr: "Envoyer le Formulaire",
      valueSubmitEn: "Send the request",
    }
  }

  render() {
    const langue = this.props.langue;
    let texte = ""
    let labelEmail = ""
    let labelObjet = ""
    let valueSubmit = ""
    let textarea = ""
    if (langue === "FR") {
      texte = this.state.texteFr
      labelEmail = this.state.labelEmailFr
      labelObjet = this.state.labelObjetFr
      valueSubmit = this.state.valueSubmitFr
      textarea = this.state.textareaFr

    }
    if (langue === "EN") {
      texte = this.state.texteEn
      labelEmail = this.state.labelEmailEn
      labelObjet = this.state.labelObjetEn
      valueSubmit = this.state.valueSubmitEn
      textarea = this.state.textareaEn

    }
    return (
      <div className='App'>
        <form action='inscription.php' method='POST'>
          <h3>{texte}</h3>
          <label>{labelEmail}
            <input type="email" name='email'></input></label>
          <label>{labelObjet}
            <input type="text" name='objet'></input></label>
          <textarea name='requete'>{textarea}</textarea>
          <input type="submit" value={valueSubmit}></input>
        </form></div>
    )
  }
}
