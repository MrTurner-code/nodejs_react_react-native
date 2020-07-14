import React, { Component } from 'react';
import nier_automata from './image/nier-automata.jpg';
import './App.css';


class Image extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const imgOnOff = this.props.imgOnOff;
        return (
            <div className="Commande-Image">
                <img src={nier_automata} alt='Mon image pilotée par commande' style={imgOnOff ? { display: "inline-block" } : { display: "none" }} className='Image-img' />

            </div>
        )
    }
}



class Commande extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            imgOnOff: true,
        };
    }
    onClick() {
        console.log(this.state.imgOnOff);
        if (this.state.imgOnOff) {
            this.setState({
                imgOnOff: false,
            });
        }
        else {
            this.setState({
                imgOnOff: true,
            });
        }
    }
    render() {
        const imgOnOff = this.state.imgOnOff;
        return (
            <div className='App-commande'>
                <Image imgOnOff={imgOnOff} />
                <input type='button' value='Image ON/OFF'
                    onClick={this.onClick} />
            </div>
        )
    }
}



class App extends Component {
    render() {
        ; return (
            <div className="App">
                <Commande />
            </div>
        );
    }
}

export default App;
