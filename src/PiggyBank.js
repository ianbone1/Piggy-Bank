import React, { Component } from 'react';

class PiggyBank extends Component {

  constructor(props){
    super(props)
    this.state = {
      total: 0
    }
    //used to set scope of this in the deposit funciton.
    this.deposit = this.deposit.bind(this);
    this.debit = this.debit.bind(this);
  }

  deposit(){
    this.setState(prevState => {
      return {total: prevState.total + this.props.deposit }
    });
  }

  debit(){
    this.setState(prevState => {
      return {total: prevState.total>=this.props.debit ? prevState.total - this.props.debit : prevState.total }
    });
  }

  render(){
    return (
      <>
        <h1>{this.props.title}</h1>
        <p>Total: £{this.state.total}</p>
        <button onClick={this.deposit}>Deposit</button>
        <button onClick={this.debit}>Debit</button>
      </>
    )
  }

}

export default PiggyBank;
