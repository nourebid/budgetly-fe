import React, { Component } from 'react';

class ExpensesEntry extends Component {
    constructor(){
        super();
        this.state={
         
            }
        }
    render () {
        const {onExpenseChange, onExpenseSubmit, onExpenseNameChange, onExpenseSubmitName}= this.props
        return(
            <div className="bw1 ba br3 mv5 w-100 w-50-m w-25 mw6 shadow-5 ">
                <article className="">
                    <main className="pa4 black-80 ">
                        <form className="">
                            <fieldset id="budget" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Expenses Entry</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="number"></label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="number" 
                                    name="number"  
                                    id="number"
                                    onChange={onExpenseChange}        
                                />
                                <small id="name-desc" className="f6 mt2 black-60 db mb2">Please enter your expenses amount.</small>
                                <label className="db fw6 lh-copy f6" htmlFor="name"></label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="text" 
                                    name="name"  
                                    id="name"
                                    onChange={onExpenseNameChange}     
                                    />
                                <small id="name-desc" className="f6 mt2 black-60 db mb2">Please enter your expenses short description.</small>
                            </div>
                            </fieldset>
                            <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="button" 
                                value="Calculate" 
                                onClick={() => {onExpenseSubmit(); onExpenseSubmitName();}}
                            />
                            </div>
                        </form>
                    </main>
                </article>
            </div>
        );
    }
}

export default ExpensesEntry;