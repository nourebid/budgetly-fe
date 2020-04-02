import React, { Component } from 'react';

class ExpensesEntry extends Component {

    render () {

        return(
            <div>
                <div className="mt4 ml4 bw1 ba br3 mv4 w-100 w-50-m w-25 mw6">
                <article className="">
                    <main className="pa4 black-80 shadow-5">
                        <form className="measure">
                            <fieldset id="budget" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Expenses</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="number"></label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="number" name="number"  id="number"/>
                                <small id="name-desc" className="f6 mt2 black-60 db mb2">Please enter your expenses amount.</small>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name"></label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
                                <small id="name-desc" className="f6 mt2 black-60 db mb2">Please enter your expenses short description.</small>
                            </div>
                            </fieldset>
                            <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Enter"/>
                            </div>
                        </form>
                    </main>
                </article>
            </div>
            </div>
        );
    }
}

export default ExpensesEntry;