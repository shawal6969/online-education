import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='navBar'>
            <h1>Online Education</h1>
            <ul className='menuContent'>
                <li>Courses</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};

export default Header;