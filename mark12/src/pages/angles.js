import React from 'react';

import { doesNotExist } from './pageUtils';

import './page.css';

const ERR_INCOMPLETE_INPUT = "Please enter all values.";
const ERR_INVALID_INPUT = "Angles must be > 0 and < 180 deg";

const MSG_SUCCESS = "Hooray!! The angles form a triangle! 🏆";
const MSG_FAILURE = "Oh no! The angles don't form a triangle. 😞";

const PARAM_ANGLE1 = "angle1";
const PARAM_ANGLE2 = "angle2";
const PARAM_ANGLE3 = "angle3";

class AnglesPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            [PARAM_ANGLE1]: null,
            [PARAM_ANGLE2]: null,
            [PARAM_ANGLE3]: null,
            result: null
        };
        
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    isValidAngle(angle) {
        if (angle > 0 && angle < 180) {
            return true;
        }
        return false;
    }

    isValidTriangle() {
        return (
            this.state[PARAM_ANGLE1] + this.state[PARAM_ANGLE2] + this.state[PARAM_ANGLE3] === 180
        );
    }

    handleInput(event) {
        this.setState({[event.target.name]: Number(event.target.value)});
    }

    handleSubmit(event) {
        event.preventDefault();

        if (doesNotExist(this.state[PARAM_ANGLE1]) ||
            doesNotExist(this.state[PARAM_ANGLE2]) ||
            doesNotExist(this.state[PARAM_ANGLE3])) {
                this.setState({result: ERR_INCOMPLETE_INPUT});
            return;
        }

        if (!this.isValidAngle(this.state[PARAM_ANGLE1]) ||
            !this.isValidAngle(this.state[PARAM_ANGLE2]) ||
            !this.isValidAngle(this.state[PARAM_ANGLE3])) {
                this.setState({result: ERR_INVALID_INPUT})
            return;
        }

        if (this.isValidTriangle()) {
            this.setState({result: MSG_SUCCESS});
        } else {
            this.setState({result: MSG_FAILURE});
        }
    }

    render() {
        return (
                <main>
                    <h1 className="page-title">Angles of Triangles</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <label>Angle 1</label>
                            <input type="number" name={PARAM_ANGLE1} onChange={this.handleInput} />
                        </div>
                        <div className="input-group">
                            <label>Angle 2</label>
                            <input type="number" name={PARAM_ANGLE2} onChange={this.handleInput} />
                        </div>
                        <div className="input-group">
                            <label>Angle 3</label>
                            <input type="number" name={PARAM_ANGLE3} onChange={this.handleInput} />
                        </div>
                        <button type="submit" className="form-submit">Check</button>
                    </form>
                    <p className="display-msg">{this.state.result}</p>
                </main>
            );
    }
}

export default AnglesPage;