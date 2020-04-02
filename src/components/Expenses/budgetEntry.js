import React, { Component } from 'react';

class BudgetEntry extends Component {

    render () {

        return(
            <div className="mt6 ml4 bw1 ba br3 mv4 w-100 w-50-m w-25 mw6">
                <article className="">
                    <main className="pa4 black-80 shadow-5">
                        <form className="measure">
                            <fieldset id="budget" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Budget</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="number"></label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="number" name="number"  id="number"/>
                                <small id="name-desc" className="f6 mt2 black-60 db mb2">Please enter your monthly budget and then press Calculate.</small>
                            </div>
                            </fieldset>
                            <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Calculate"/>
                            </div>
                        </form>
                    </main>
                </article>
            </div>
        );
    }
}

export default BudgetEntry;