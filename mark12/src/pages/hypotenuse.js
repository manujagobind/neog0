import React from 'react';

import './page.css';
import { doesNotExist } from './pageUtils';

const PARAM_BASE   = "base";
const PARAM_HEIGHT = "height";

const ERR_INCOMPLETE_INPUT = "Please enter all sides.";
const ERR_INVALID_INPUT = "Sides must be > 0";

class HypotenusePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            [PARAM_BASE]: null,
            [PARAM_HEIGHT]: null,
            result: null
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    isValidSide(side) {
        if (side > 0) {
            return true;
        }
        return false;
    }

    calculateHypotenuse() {
        const base = this.state[PARAM_BASE];
        const height = this.state[PARAM_HEIGHT];
        const Hypotenuse = Math.sqrt(Math.pow(base, 2) + Math.pow(height, 2));
        return Hypotenuse.toFixed(2);
    }

    handleInput(event) {
        if (!doesNotExist(event.target.value)) {
            this.setState({[event.target.name]: event.target.value});
        } else {
            this.setState({[event.target.name]: null});
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        if (doesNotExist(this.state[PARAM_BASE]) ||
            doesNotExist(this.state[PARAM_HEIGHT])) {
                this.setState({result: ERR_INCOMPLETE_INPUT});
                return;
            }

        if(!this.isValidSide(this.state[PARAM_BASE]) ||
           !this.isValidSide(this.state[PARAM_HEIGHT])) {
               this.setState({result: ERR_INVALID_INPUT});
               return;
           }

        this.setState({result: "Length of hypotenuse = " + this.calculateHypotenuse()})
    }

    render() {
        return (
            <main>
                <h1 className="page-title">Calculate the Hypotenuse of a Triangle</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <label>Enter length of base</label>
                        <input type="number" name={PARAM_BASE} onChange={this.handleInput} />
                    </div>
                    <div className="input-group">
                        <label>Enter height</label>
                        <input type="number" name={PARAM_HEIGHT} onChange={this.handleInput} />
                    </div>
                    <button type="submit" className="form-submit">Calculate</button>
                </form>
                <p className="display-msg">{this.state.result}</p>
            </main>
        );
    }
}

export default HypotenusePage;