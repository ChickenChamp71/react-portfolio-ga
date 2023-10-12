import React from 'react';
import '../styles/Navigation.css';

export default function Navigation({  handlePageChange, notifState, isVisible }) {

    return (
        <header className={`navigation ${notifState? 'dialog' : ''} ${isVisible? 'true' : 'false'}`}>
            <nav className='nav-bar'>
                <div className='bg-animation-bar' />
                <ul className='nav-options'>
                    <li id='about-header'>
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