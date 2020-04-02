import React, { Component } from 'react';
import landingImage from "./budgetly.png";

class Welcome extends Component{
    render() {
        const {onLogoClick} = this.props;
        return(
            <div>
                <img onClick={onLogoClick} 
                    alt="logo" 
                    src={landingImage} 
                    className='shadow-5 bw1 pointer justify-center mt7 measure flex-auto br3 ba dim'
                />
            </div>
        );
}
}


export default Welcome