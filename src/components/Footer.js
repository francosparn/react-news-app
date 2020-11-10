import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ name }) => {
    return ( 
        <footer className="footer">
            <p>developed by <span className="author">{name}</span> &copy; 2020</p>
        </footer>
     );
}

Footer.propTypes = {
    name: PropTypes.string.isRequired
}
 
export default Footer;
