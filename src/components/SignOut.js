import React, { Component } from 'react';

class SignOut extends Component {
    render () {
        const {onSignOut}= this.props;
        return(
            <div style={{display: "flex", justifyContent: "flex-end"}} className=''>
                <p className='self-end f3 link dim black underline pa3 mt1 pointer' onClick={onSignOut} >Sign Out</p>
            </div>
        );
    }
}

export default SignOut