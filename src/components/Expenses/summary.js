import React from 'react';

const Summary = (props) =>  {
        const {expenseData} = props;
        const showBudget = expenseData.map((budgets, index) => {
            return(
                <div key={index}>
                    <p >{budgets.budgetValue}</p>
                </div>
                
            )
        })

        const showTotalExpenses = expenseData.map((totalExpenses, index) => {
            return(
                <div key={index}>
                    <p >{totalExpenses.totalExpenses}</p>
                </div>
                
            )
        })

        const showBalance = expenseData.map((balance, index) => {
            return(
                <div key={index}>
                    <p >{balance.balance}</p>
                </div>
                
            )
        })

        return(
            <div className="bw1 ba br3 mv5 w-25 w-100 w-50-m mw6 shadow-5">
            <article className="">
                <main className="pa4 black-80 ">
                    <form className="measure">
                        <fieldset id="budget" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Summary</legend>
                        <div>
                            <ul className="f4">Budget</ul>
                            <ul className="f4">{showBudget}</ul>
                            <ul className="f4">Total Expenses</ul>
                            <ul className="f4">{showTotalExpenses}</ul>
                            <ul className="f4">Balance</ul>
                            <ul className="f4">{showBalance}</ul>
                            
                        </div>
                        </fieldset>
                    </form>
                </main>
            </article>
        </div>
        );
}

export default Summary;