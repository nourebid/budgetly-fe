import React, { Component } from 'react';

class SignOut extends Component {
    render () {
        return(
            <div style={{display: "flex", justifyContent: "flex-end"}}>
                <p className='f3 link dim black underline pa3 pointer'>Sign Out</p>
            </div>
        );
    }
}

export default SignOut