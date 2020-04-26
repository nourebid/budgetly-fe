import React from 'react';

const ExpensesDetails = (props) =>  {
        const {expenseData, deleteExpense} = props;
        const showExpenseName = expenseData.map((expense, index) => {
            return (
                <div key={index}>
                    <p>{expense.expenseName}</p>
                </div>
            )
        })

        const showExpenseValue = expenseData.map((expense, index) => {
            return (
                <div key={index}>
                    <p>{expense.expenseValue}</p>
                </div>
            )
        })

        const deleteButton = expenseData.map((expense, index) => {
            return (
            <div key={index}>
                <button className='b ph1 pv1 input-reset ba b--black bg-transparent grow pointer f7 dib' onClick={deleteExpense}>X</button>
            </div>);
        })

    return(
        <div className="bw1 ba br3 mv5 w-25 w-100 w-50-m mw6 shadow-5">
        <article className="">
            <main className="pa4 black-80 ">
                <form className="measure">
                    <fieldset id="budget" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Expenses Details</legend>
                    <div style={{display: 'flex', 
                                flexDirection: 'colmun', 
                                justifyContent: 'flex-start', 
                                flexWrap: 'wrap', 
                                columnCount: '3',
                                flexBasis: '35%'}} className='f5'>
                        <ul>
                        Expense Name
                            <ul>
                                {showExpenseName}
                            </ul>
                        </ul>
                        <ul>
                        Expense Value
                            <ul>
                                {showExpenseValue}
                            </ul>
                        </ul>
                        <ul>
                        Actions
                            <ul>
                                {deleteButton}
                            </ul>
                        </ul>
                    </div>
                    </fieldset>
                </form>
            </main>
        </article>
    </div>
    );
}

export default ExpensesDetails;