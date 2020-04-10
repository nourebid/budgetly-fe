import React, { Component } from 'react';

class ExpensesDetails extends Component {
    constructor() {
        super();
        this.state= {
            
        }
    }
    render () {
        const {expenseValue, expenseName} = this.props;
        return(
            <div className="bw1 ba br3 mv5 w-25 w-100 w-50-m mw6 shadow-5">
            <article className="">
                <main className="pa4 black-80 ">
                    <form className="measure">
                        <fieldset id="budget" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Expenses Details</legend>
                        <div style={{display: 'flex', flexDirection: 'colmun', justifyContent: 'flex-start', flexWrap: 'wrap', columnCount: '2',flexBasis: '50%'}} className='f5'>
                           <ul>
                            Expense Name
                                    <ul>
                                    {expenseName}
                                    </ul>
                           </ul>
                           <ul>
                            Expense Value
                                <ul>
                                    {expenseValue}
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
}

export default ExpensesDetails;