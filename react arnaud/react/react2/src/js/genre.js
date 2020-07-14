import React, { Component } from 'react';
import '../App.css';

class Genre extends Component {
    state = {
        symbolegenre: "",
        cochemasculin: false,
        cochefeminin: false,
    };
    modifier(genre) {
        if (genre === 'M') {
            this.setState({
                symbolegenre: '♂︎'
            });
            this.setState({
                cochefeminin: false,
                cochemasculin: true,
            })
        }
        if (genre === 'F') {
            this.setState({
                symbolegenre: '♀︎'
            });
            this.setState({
                cochefeminin: true,
                cochemasculin: false,
            });
        };
    }
    reset() {
        this.setState({
            cochemasculin: false,
            cochefeminin: false
        });

    };

    render() {
        return (
            <div className="Profil-Genre">
                <label>Genre :<p>♂︎</p>
                </label>
                <label>Femme </label><input type="radio" name='genre' checked={this.state.cochefeminin} onChange={() => this.modifier("F")} />
                <br></br>
                <label> Homme </label><input type="radio" name='genre' checked={this.state.cochemasculin} onChange={() => this.modifier("M")} />
                <button name='reset' onClick={() =>this.reset()}>Reset</button>
            </div>
        )
    }
}
export default Genre;
