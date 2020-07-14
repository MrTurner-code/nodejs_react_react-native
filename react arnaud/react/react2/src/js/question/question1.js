import React, { Component } from 'react';
import '../../App.css';

class Question1 extends Component {
    render() {
        return (<div>
            <form>
                <h3>
                    lesquels de ces propositions sont des systèmes d'exploitations ?
                    </h3>
                <ul>
                    <li><input type="checkbox" />MacOs<label ></label></li>
                    <li><input type="checkbox" />Chrome<label ></label></li>
                    <li><input type="checkbox" />Windows<label ></label></li>
                    <li><input type="checkbox" />Firefox<label ></label></li>
                    <li><input type="checkbox" />Linux<label ></label></li>
                </ul>
            </form>
        </div>
        )
    }
}
export default Question1;