import React, { Component } from 'react'

import './form.css';

class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            amountEntered:""
        }
    }

    handleChange=(e)=>{
        this.setState({
            amountEntered:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.getMoney(this.state.amountEntered)
    }

    render() {
        return (
            <div className="form">
                <h1 className="heading">Welcome to ATM</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="inputElement" className="label">Enter the Amount</label>
                    <input type="text" id="inputElement" className="input" value={this.state.amountEntered} onChange={this.handleChange} required></input>
                    <input type="submit" className="button" value="Get Money"></input>
                </form>
            </div>
        )
    }
}

export default Form
