import React from 'react';
import '../styles/Footer.css';

function Footer() {

    return (
        <footer className="footer">
            
            <p className='footer-email'>
                gabrielandersondev@gmail.com
            </p>

            <p className='footer-github'>
                <a href='https://github.com/GabrielAndersonDev' rel='noreferrer' target='_blank'>
                    GitHub
                </a>
            </p>

            <p className='footer-phone'>
                (425) 301 - 5163
            </p>

            <p className='footer-copyright'>
                © Gabriel Anderson 2023
            </p>
        </footer>
    );
};

export default Footer;