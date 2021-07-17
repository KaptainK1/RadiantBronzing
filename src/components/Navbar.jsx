import React from 'react';
import logo from '../logo.svg';

function Navbar(props){

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" width="30" height="24" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {/*<a className="nav-link active" aria-current="page" href="#">Home</a>*/}
                        <a className="nav-link" href="#aboutSection">About</a>
                        <a className="nav-link" href="#pricingSection">Pricing</a>
                        <a className="nav-link" href="#shopSection">Shop</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;