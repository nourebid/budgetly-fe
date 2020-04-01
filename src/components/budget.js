import React, { Component } from 'react';
import Signout from './signOut';

class Budget extends Component {

    render () {
        const {onSignOut} = this.props 
        return(
            <div>
                Budget
                <Signout onSignOut={onSignOut}/>
            </div>
        );
    }
}

export default Budget

