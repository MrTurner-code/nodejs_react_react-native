import React, { Component } from 'react';
import '../App.css';
import Genre from './genre.js';
class Profil extends Component {
    /*constructor(name, firstName) {
        super(name)
        this.name = name;
        this.firstName = firstName;
    }*/

    render() {
        return (<div className="App-Profil">
            <h3>Mon Profil</h3>
            <label className="Profil-label"> Nom Prénom : <input type="text" />
            </label>
            <label className="Profil-label">Adresse Email : <input type="email" />
            </label>
            <Genre/>
        </div>
        )
    }
}
//const user = new Profil('SUDRAT Thomas');

export default Profil;