import React from 'react';

import { doesNotExist } from './pageUtils';

import './page.css';

const PARAM_SIDE1 = "side1";
const PARAM_SIDE2 = "side2";
const PARAM_SIDE3 = "side3";

const ERR_INCOMPLETE_INPUT = "Please enter all sides.";
const ERR_INVALID_INPUT = "Sides must be > 0";

const MSG_FAILURE = "The sides entered do not form a valid triangle";

class AreaPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            [PARAM_SIDE1]: null,
            [PARAM_SIDE2]: null,
            [PARAM_SIDE3]: null,
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

    isValidTriangle() {
        const a = this.state[PARAM_SIDE1];
        const b = this.state[PARAM_SIDE2];
        const c = this.state[PARAM_SIDE3];

        if (a + b > c &&
            b + c > a && 
            c + a > b) {
                return true;
            }
        return false;
    }

    calculateArea() {
        const a = this.state[PARAM_SIDE1];
        const b = this.state[PARAM_SIDE2];
        const c = this.state[PARAM_SIDE3];
        const s = a + b + c;
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        return area.toFixed(2);
    }

    handleInput(event) {
        if(!doesNotExist(event.target.value)) {
            this.setState({[event.target.name]: Number(event.target.value)});
        } else {
            this.setState({[event.target.name]: null});
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        if(doesNotExist(this.state[PARAM_SIDE1]) ||
           doesNotExist(this.state[PARAM_SIDE2]) ||
           doesNotExist(this.state[PARAM_SIDE3])) {
               this.setState({result: ERR_INCOMPLETE_INPUT});
               return;
        }

        if (!this.isValidSide(this.state[PARAM_SIDE1]) ||
            !this.isValidSide(this.state[PARAM_SIDE2]) ||
            !this.isValidSide(this.state[PARAM_SIDE3])) {
                this.setState({result: ERR_INVALID_INPUT});
                return;
            }

        if (this.isValidTriangle()) {
            this.setState({result: "Area = " + this.calculateArea() + " sq units."})
        } else {
            this.setState({result: MSG_FAILURE});
        }
    }

    render() {
        return (
            <main>
                <h1 className="page-title">Calculate Area Of a Triangle</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <label>Enter first side of the triangle</label>
                        <input type="number" name={PARAM_SIDE1} onChange={this.handleInput} />
                    </div>
                    <div className="input-group">
                        <label>Enter second side of the triangle</label>
                        <input type="number" name={PARAM_SIDE2} onChange={this.handleInput} />
                    </div>
                    <div className="input-group">
                        <label>Enter third side of the triangle</label>
                        <input type="number" name={PARAM_SIDE3} onChange={this.handleInput} />
                    </div>
                    <button type="submit" className="form-submit">Calculate</button>
                </form>
                <p className="display-msg">{this.state.result}</p>
            </main>
        );
    }
}

export default AreaPage;