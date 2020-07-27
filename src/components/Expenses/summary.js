import React from 'react';

const Summary = (props) =>  {
        const {budgetValue, totalExpenses, balance} = props;
    

        return(
            <div className="mr1 mt2 bw1 ba br3 w-25 w-100 w-50-m mw6 shadow-5">
            <article className="">
                <main className="pa4 black-80 ">
                    <form className="measure">
                        <fieldset id="budget" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Summary</legend>
                        <div>
                            <ul className="f4">Budget</ul>
                            <ul className="f4">$ {budgetValue}</ul>
                            <ul className="f4">Total Expenses</ul>
                            <ul className="f4">$ {totalExpenses}</ul>
                            <ul className="f4">Balance</ul>
                            <ul className="f4">$ {balance}</ul>
                            
                        </div>
                        </fieldset>
                    </form>
                </main>
            </article>
        </div>
        );
}

export default Summary;