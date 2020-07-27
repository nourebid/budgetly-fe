
import React, { Component } from 'react';
import landingImage from "./budgetly.png";

class Welcome extends Component{
    render() {
        const {onRouteChange} = this.props;
        return(
            <div className='mv7'>
                <img onClick={()=> onRouteChange('login')} 
                    alt="logo" 
                    src={landingImage} 
                    className='shadow-5 bw1 pointer br3 ba dim w-40'
                    
                />
            </div>
        );
}
}


export default Welcome