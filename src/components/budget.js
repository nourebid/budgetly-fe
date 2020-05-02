import React, { Component } from 'react';
import Signout from './signOut';
import BudgetEntry from './Expenses/budgetEntry';
import ExpensesEntry from './Expenses/expensesEntry';
import ExpensesDetails from './Expenses/expensesDetails';
import Summary from './Expenses/summary';

class Budget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expenseData: [
                {
                    id: 1,
                    expenseValue: 55,
                    expenseName: 'water'
                },
                {
                    id: 2,
                    expenseValue: 10,
                    expenseName: 'akl'
                },
                {
                    id: 3,
                    expenseValue: 15,
                    expenseName: 'fool'
                },
                
            ],
            budgetInputValue: '',
            budgetValue: 0 ,
            totalExpenses: 0,
            balance: 0
        }
    }

    addExpense = (expense) => {
        let expenses = this.state.expenseData;
        expenses.push(expense);
        this.setState({expenseData: expenses});
    }

    deleteExpense = (id) => {
        let expenses = this.state.expenseData;
        let i = expenses.findIndex(expense => expense.id === id)
        expenses.splice(i, 1);
        this.setState({expenseData: expenses});
    }

    handleChange = (e) => {
        this.setState({
            budgetInputValue: e.target.value
        })
        console.log(e.target.value);
    }

    handleSubmit = (e) => {
        e.preventDefault(e);
        e.target.reset();
        this.setState({budgetValue: this.state.budgetInputValue})
        console.log(this.state.budgetValue);
    }

    render () {
        const {onSignOut} = this.props 
        return(
            <div >
                <Signout onSignOut={onSignOut}/>
                <div style={{display:'flex', flexWrap:'wrap', justifyContent: 'center'}} className=''>
                    <BudgetEntry handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                    <ExpensesEntry addExpense={this.addExpense}/>
                    <Summary expenseData={this.state.expenseData} 
                        budgetValue={this.state.budgetValue} 
                        totalExpenses={this.state.totalExpenses} 
                        balance={this.state.balance}
                    />
                    <ExpensesDetails expenseData={this.state.expenseData} deleteExpense={this.deleteExpense}/>
                </div>
                    
            </div>
        );
    }
}

export default Budget

