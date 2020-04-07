import React, { Component } from 'react';

class Summary extends Component {
    constructor() {
        super();
        this.state = {
           
        }
    }

    render () {
        const {budgetValue} = this.props
        return(
            <div className="bw1 ba br3 mv5 w-25 w-100 w-50-m mw6 shadow-5">
            <article className="">
                <main className="pa4 black-80 ">
                    <form className="measure">
                        <fieldset id="budget" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Summary</legend>
                        <div>
                            <p className="f4">Budget</p>
                            <p className="f4">{`${budgetValue}`}</p>
                            <p className="f4">Total Expenses</p>
                            <p id='totalEXpenses'>0</p>
                            <p className="f4">Balance</p>
                            <p id='balance'>0</p>
                        </div>
                        </fieldset>
                    </form>
                </main>
            </article>
        </div>
        );
    }
}

export default Summary;