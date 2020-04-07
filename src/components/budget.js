import React, { Component } from 'react';
import Signout from './signOut';
import BudgetEntry from './Expenses/budgetEntry';
import ExpensesEntry from './Expenses/expensesEntry';
import Summary from './Expenses/summary';

class Budget extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            budgetValue: ''
        }
    }

    onBudgetInputChange = (event) => {
        this.setState({inputValue: event.target.value})
    }  
    
    onButtonSubmit = () => {
        this.setState({budgetValue: this.state.inputValue})
    }

    render () {
        const {onSignOut} = this.props 
        return(
            <div >
                <Signout onSignOut={onSignOut}/>
                <div style={{display:'flex', flexWrap:'wrap', justifyContent: 'center'}} className=''>
                    <BudgetEntry onBudgetInputChange={this.onBudgetInputChange} onBudgetSubmit={this.onButtonSubmit}/>
                    <ExpensesEntry />
                    <Summary budgetValue={this.state.budgetValue}/>
                </div>
                    
            </div>
        );
    }
}

export default Budget

