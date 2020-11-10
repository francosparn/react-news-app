import React from 'react';
import logo from '../logo.png';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return ( 
        <nav className="navbar navbar-styles">
            <a className="navbar-brand" href="/">
                <img src={logo} className="logo" alt="Logo" /><span className="title"> {title}</span>App
            </a>
        </nav>
     );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;
