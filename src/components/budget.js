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
            inputValue: '',
            budgetValue: 0,
            expenseInput: '',
            expenseValue: '',
            expenseNameInput: '',
            expenseName: ''
        }
    }

    onBudgetInputChange = (event) => {
        this.setState({inputValue: event.target.value})
    }  
    
    onBudgetSubmit = () => {
        this.setState({budgetValue: this.state.inputValue})
    }

    onExpenseChange = (event) => {
        this.setState({expenseInput: event.target.value})
    }

    onExpenseNameChange = (event) => {
        this.setState({expenseNameInput: event.target.value})
    }

    onExpenseSubmit = () => {
        this.setState({expenseValue: this.state.expenseInput})
    }

    onExpenseSubmitName = () => {
        this.setState({expenseName: this.state.expenseNameInput})
    }

    render () {
        const {onSignOut} = this.props 
        return(
            <div >
                <Signout onSignOut={onSignOut}/>
                <div style={{display:'flex', flexWrap:'wrap', justifyContent: 'center'}} className=''>
                    <BudgetEntry onBudgetInputChange={this.onBudgetInputChange} onBudgetSubmit={this.onBudgetSubmit}/>
                    <ExpensesEntry 
                        onExpenseChange={this.onExpenseChange} 
                        onExpenseSubmit={this.onExpenseSubmit} 
                        onExpenseNameChange={this.onExpenseNameChange}
                        onExpenseSubmitName={this.onExpenseSubmitName}
                    />
                    <Summary budgetValue={this.state.budgetValue}/>
                    <ExpensesDetails expenseValue={this.state.expenseValue} expenseName={this.state.expenseName}/>
                </div>
                    
            </div>
        );
    }
}

export default Budget

