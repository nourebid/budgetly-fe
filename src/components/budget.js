import React, { Component } from 'react';
import Signout from './signOut';
import BudgetEntry from './Expenses/budgetEntry';
import ExpensesEntry from './Expenses/expensesEntry';
import ExpensesDetails from './Expenses/expensesDetails';

class Budget extends Component {

    render () {
        const {onSignOut} = this.props 
        return(
            <div>
                <Signout onSignOut={onSignOut}/>
                <BudgetEntry />
                <ExpensesEntry />
                <ExpensesDetails />
            </div>
        );
    }
}

export default Budget

