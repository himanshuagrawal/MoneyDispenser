import React, { Component } from 'react'

import Form from './formcomponent/Form';
import Result from './resultcomponent/Result';

import './main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notesDispensed: [],
      showResult: false
    }
    this.moneyDenominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
  }

  getMoney = (moneyEntered) => {
    let notesDispensedArray = []
    this.moneyDenominations.forEach((denomination) => {
      notesDispensedArray.push(parseInt(moneyEntered / denomination));
      moneyEntered = moneyEntered % denomination
    })
    console.log(notesDispensedArray.reverse());
    this.setState({
      showResult: true,
      notesDispensed: notesDispensedArray
    })
  }

  render() {
    return (
      <main className="main">
        <Form getMoney={this.getMoney} />
        {this.state.showResult ? <Result notesDispensed={this.state.notesDispensed} /> : null}
      </main>
    )
  }
}

export default Main
