import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginEmail: '',
            loginPassword: ''
        }
    }

    onEmailChange = (e) => {
        this.setState({loginEmail: e.target.value})
    }

    onPasswordChange = (e) => {
        this.setState({loginPassword: e.target.value})
    }

    onSubmit = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.loginEmail,
                password: this.state.loginPassword
            })
        })
        .then(reponse => reponse.json())
        .then(data => {
            if (data === 'Sucess') {
            this.props.onSignIn();
            }
        })
    }

    render () {
        const {onRegisterWordClick} = this.props;
        return(
            <div className="mt6">
                <article className="bw1 ba br3 mv4 w-100 w-50-m w-25 mw6 center">
                    <main className="pa4 black-80 shadow-5">
                        <form className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                    onChange={this.onEmailChange}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input 
                                    onChange={this.onPasswordChange}
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" 
                                    name="password"  
                                    id="password"

                                />
                            </div>
                            <label className="pa0 ma0 lh-copy f6 pointer">
                            <input type="checkbox"/> Remember me</label>
                            </fieldset>
                            <div className="">
                            <input 
                                onClick={this.onSubmit} 
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="button" value="Sign in"

                            />
                            </div>
                            <div className="lh-copy mt3">
                            <a onClick={onRegisterWordClick} href="#0" className="f6 link dim black db">Register</a>
                            <a href="#0" className="f6 link dim black db">Forgot your password?</a>
                            </div>
                        </form>
                    </main>
                </article>
            </div>
        );
    }
}

export default Login