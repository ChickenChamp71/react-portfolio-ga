import React, { useState, useEffect, useRef } from "react";
import Main from "./pages/Main";
import Resume from "./pages/Resume";
import Footer from "./Footer";
import "../styles/Container.css";

export default function Container() {

    const [currentPage, setCurrentPage] = useState('Main');
    const [notifFailState, setNotifFailState] = useState(false);
    const [notifSuccessState, setNotifSuccessState] = useState(false);
    const [notifState, setNotifState] = useState(false);
    const [open, setOpen] = useState(false);
    const [isVisible, setVisible] = useState(true);

    const handlePageChange = (page) => setCurrentPage(page);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {

            if (menuRef.current && !menuRef.current.contains(e.target)) {

                if (e.target.id === "trigger-target") {
                    return;
                }

                setOpen(false);
            }
        }

        document.addEventListener('mousedown', handler);

        document.removeEventListener('mousedown', handler);
    }, []);

    const renderPage = () => {

        if (currentPage === 'Resume') {
            return <Resume />
        }

        return <Main handleFailState={handleFailState} handleSuccessState={handleSuccessState} notifState={notifState} checkVisibility={checkVisibility} isVisible={isVisible} handlePageChange={handlePageChange} />

    };

    const handleFailState = (failState) => {

        setNotifFailState(failState);
        handleNotifState(notifSuccessState, failState);

    }

    const handleSuccessState = (successState) => {

        setNotifSuccessState(successState);
        handleNotifState(successState, notifSuccessState);

    }

    const handleNotifState = (success, fail) => {

        if (success || fail) {

            setNotifState(true);
            return;
        }
        setNotifState(false);
    }

    const checkVisibility = (visible) => {

        if (!visible === isVisible) {

            setVisible(visible);
            return;
        }

        return;
    }

    return (
        <div className="body">

            <dialog className={`notif-success ${notifSuccessState? 'active' : 'inactive'}`}>
                <h3 className="dialog-text">
                    Message sent.
                </h3>

                <button onClick={() => handleSuccessState(!notifSuccessState)}
                id="close-success"
                name="close-window"
                className="close-btn">
                    Close
                </button>
            </dialog>

            <dialog className={`notif-fail ${notifFailState? 'active' : 'inactive'}`}>
                <h3 className="dialog-text">
                    Please try again.
                </h3>

                <button onClick={() => handleFailState(!notifFailState)}
                id="close-fail"
                name="close-window"
                className="close-btn">
                    Close
                </button>
            </dialog>

            <nav className={`mobile-dropdown-nav ${notifState? 'dialog' : ''}`} ref={menuRef}>
                <button className='drop-trigger' id='trigger-target' onClick={() => setOpen(!open)}>
                    <hr />
                    <hr />
                    <hr />
                </button>

                <ul className={`drop-menu ${open? 'active' : 'inactive'} ${notifState? 'dialog' : ''}`}>
                    <li id='about-drop-menu'>
                        <a href='#about-me' onClick={() => {
                            setOpen(false);
                            handlePageChange('Main');
                        }}>
                            About Me
                        </a>
                    </li>

                    <li id='portfolio-drop-menu'>
                        <a href='#portfolio' 
                        onClick={() => {
                            setOpen(false);
                            handlePageChange('Main');
                        }}>
                            Portfolio
                        </a>
                    </li>

                    <li id='contact-drop-down'>
                        <a href='#contact'
                        onClick={() => {
                            setOpen(false);
                            handlePageChange('Main');
                        }}>
                            Contact
                        </a>
                    </li>

                    <li id='resume-drop-down'>
                        <a href='#resume'
                        onClick={() => {
                            setOpen(false);
                            handlePageChange('Resume');
                        }}>
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="page-render">
                {renderPage()}
            </div>

            <div className={`footer-container ${notifState? 'dialog' : ''}`}>
                <Footer notifState={notifState} />
            </div>
        </div>

    );
};