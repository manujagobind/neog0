import React from "react";

const OPERATOR_ADD = '+';
const OPERATOR_SUB = '-';
const OPERATOR_MUL = '*';
const OPERATOR_DIV = "/";

class Calculate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputA: null,
            inputB: null,
            operator: null,
            result: null,
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleInput(event) {        
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleClick(operator) {
        this.setState({
            operator: operator
        });
        
        let result = null;
        if (operator === OPERATOR_ADD) {
            result = this.state.inputA + this.state.inputB;
        } else if (operator === OPERATOR_SUB) {
            result = this.state.inputA - this.state.inputB;
        } else if (operator === OPERATOR_MUL) {
            result = this.state.inputA * this.state.inputB;
        } else if (operator === OPERATOR_DIV) {
            result = this.state.inputA / this.state.inputB;
        }else {
            result = "Error";
        }

        this.setState({
            result: result
        });
    }

    render() {
        return (
            <section>
                <div className="input-group">
                    <label>Input A</label>
                    <input type="number" name="inputA" onChange={this.handleInput}></input>
                </div>
                <div className="input-group">
                    <label>Input B</label>
                    <input type="number" name="inputB" onChange={this.handleInput}></input>
                </div>
                <button onClick={() => this.handleClick(OPERATOR_ADD)}>{OPERATOR_ADD}</button>    
                <button onClick={() => this.handleClick(OPERATOR_SUB)}>{OPERATOR_SUB}</button>   
                <button onClick={() => this.handleClick(OPERATOR_MUL)}>{OPERATOR_MUL}</button>                             
                <button onClick={() => this.handleClick(OPERATOR_DIV)}>{OPERATOR_DIV}</button>   
                <p>{this.state.result}</p>   
            </section>
        );
    }
}

export default Calculate;