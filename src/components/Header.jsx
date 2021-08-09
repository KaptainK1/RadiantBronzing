import React from 'react';
import sunImg from '../images/sun-trans.png';


function Header(props) {

    return(
        <div>
            <h1 className={"main-heading"}>Radiant Bronzing Boutique LLC</h1>
            <img src={sunImg} alt="sun" className="main-heading-img"/>
        </div>
    );
}

export default Header