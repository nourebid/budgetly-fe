import React, { Component } from 'react';

class BudgetEntry extends Component { 

    constructor() {
        super();
        this.state = {
        }
    }

    render () {
        const {handleChange, handleSubmit} = this.props;
        return(
            <div className="mr1 mt2 bw1 ba br3 w-25 w-100 w-50-m mw6 shadow-5">
                <article className="">
                    <main className="pa4 black-80 ">
                        <form onSubmit={handleSubmit}>
                            <fieldset id="budget" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Budget</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" 
                                    htmlFor="number"></label>
                                <input className="input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="number" 
                                    name="number"  
                                    id="budgetValue" 
                                    onChange={handleChange}
                                />
                                <small id="name-desc" 
                                    className="f5 mt2 black-60 db mb2">Please enter your monthly budget and then press Calculate.</small>
                            </div>
                            </fieldset>
                            <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" 
                                value='Enter'
                            />
                            </div>
                        </form>
                    </main>
                </article>
            </div>
        );
    }
}

export default BudgetEntry;