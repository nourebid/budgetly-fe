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
                { expenseValue: '', 
                    expenseName: '',
                    budgetValue: '' ,
                    totalExpenses: '',
                    balance: ''
                }
            ]
        }
    }

    addBudget = (budget) => {
        let budgets = this.state.expenseData;
        budgets.push(budget);
        this.setState({expenseData: budgets});
    }

    addExpense = (expense) => {
        let expenses = this.state.expenseData;
        expenses.push(expense);
        this.setState({expenseData: expenses});
    }

    render () {
        const {onSignOut} = this.props 
        return(
            <div >
                <Signout onSignOut={onSignOut}/>
                <div style={{display:'flex', flexWrap:'wrap', justifyContent: 'center'}} className=''>
                    <BudgetEntry addBudget={this.addBudget}/>
                    <ExpensesEntry addExpense={this.addExpense}/>
                    <Summary expenseData={this.state.expenseData}/>
                    <ExpensesDetails expenseData={this.state.expenseData}/>
                </div>
                    
            </div>
        );
    }
}

export default Budget

