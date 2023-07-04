import React from 'react';
import Title from './Title';
import '../styles/Navigation.css';

function Navigation({ currentPage, handlePageChange }) {

    return (
        <header className='head'>
            <Title />
            <nav className='nav-bar'>
                <ul className='nav-options'>
                    <li id='about-me'>
                        <a
                            href='#about-me'
                            onClick={() => handlePageChange('AboutMe')}
                            className={currentPage === 'AboutMe' ? 'nav-link-active' : 'nav-link'}
                        >
                            About Me
                        </a>
                    </li>
                    <li id='portfolio'>
                        <a
                            href='#portfolio'
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link-active' : 'nav-link'}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li id='contact'>
                        <a
                            href='#contact'
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link-active' : 'nav-link'}
                        >
                            Contact
                        </a>
                    </li>
                    <li id='resume'>
                        <a
                            href='#resume'
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link-active' : 'nav-link'}
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        
    )
};

export default Navigation;