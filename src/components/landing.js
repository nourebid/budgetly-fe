import React, { Component } from 'react';
import landingImage from "./budgetly.png";

class Landing extends Component {
    render () {
        return(
            <div>
                <img alt="logo" src={landingImage} className='shadow-5 br-1 bw1 pointer justify-center mt7 measure flex-auto br3 ba'/>
            </div>
        );
    }
}

export default Landing