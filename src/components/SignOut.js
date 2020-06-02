import React, { Component } from 'react';

class SignOut extends Component {
    render () {
        const {onRouteChange}= this.props;
        return(
            <div style={{display: "flex", justifyContent: "flex-end"}} >
                <p className='self-end f4 mb0 link dim black underline pa3 mt0 pointer' onClick={onRouteChange}>Sign Out</p>
            </div>
        );
    }
}

export default SignOut