import React from 'react';
import '../styles/Navigation.css';

export default function Navigation({  handlePageChange, notifState }) {

    return (
        <header className={`header ${notifState? 'dialog' : ''}`}>
            <nav className='nav-bar'>
                <ul className='nav-options'>
                    <li className='about-header'>
                        <a
                            href='#about-me'
                            onClick={() => handlePageChange('Main')}
                        >
                            About Me
                        </a>
                    </li>
                    <li id='portfolio-header'>
                        <a
                            href='#portfolio'
                            onClick={() => handlePageChange('Main')}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li id='contact-header'>
                        <a
                            href='#contact'
                            onClick={() => handlePageChange('Main')}
                        >
                            Contact
                        </a>
                    </li>
                    <li id='resume-header'>
                        <a
                            href='#resume'
                            onClick={() => handlePageChange('Resume')}
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        
    )
};