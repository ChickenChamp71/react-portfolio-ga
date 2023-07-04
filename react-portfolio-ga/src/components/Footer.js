import React from 'react';
import '../styles/Footer.css';
import githubImg from "../styles/imgs/github-logo.png";
import linkedInImg from "../styles/imgs/linkedin-logo.png";
import twtImg from "../styles/imgs/twt-logo.png";

function Footer() {

    return (
        <footer className="footer">
            <a href="http://github.com/chickenchamp71" id="github-back">
                <img className="github-img" src={githubImg} alt="Link to Gabriel's Github" />
            </a>
            <a href="https://www.linkedin.com/">
                <img className="linkedin-img" src={linkedInImg} alt="Link to Gabriel's LinkedIn" />
            </a>
            <a href="https://twitter.com/ChickenChamp71">
                <img className="twitter-img" src={twtImg} alt="Link to Gabriel's Twitter" />
            </a>
        </footer>
    )
};

export default Footer;