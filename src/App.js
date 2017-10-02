import React, { Component } from 'react';
import logo from './lib/img/logo2.jpg';
import './lib/css/App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';


class App extends Component {

    constructor() {
      super();
      this.state = {
        expenses: []
      }
    }

    componentWillMount() {
      fetch('http://localhost:8080/expense')
        .then((response) => {
          return response.json()
        })
        .then((expenses) => {
          var expData = expenses._embedded;
          this.setState({ expenses: expData.expense })
        })
        this.render();
    }

    handleOnAddExpense (event) {
        event.preventDefault();
        fetch('http://localhost:8080/expense', {
          method: 'POST',
          headers: {
            "Access-Control-Allow-Origin": "*",
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            quantity: event.target.quantity.value,
            expdescription: event.target.expdescription.value
          })
        })
        .then((response) => {
          this.componentWillMount();
          return response.json()
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} alt="logo" />
                    <h1 className="App-title">Finance App</h1>
                </header>
                <ExpenseList expenses={this.state.expenses}  />
                <ExpenseForm onAddExpense={this.handleOnAddExpense.bind(this)} />
            </div>
        );
    }
}


export default App;