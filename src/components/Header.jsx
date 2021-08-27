import React from 'react';
import sunImgRotated from '../images/sun-rotated-new.png';


function Header(props) {

    return(
        <div>
            <h1 className={"main-heading"}>Radiant Bronzing Boutique LLC</h1>
            <img src={sunImgRotated} alt="sun" className="main-heading-img d-none d-lg-block"/>
        </div>
    );
}

export default Header