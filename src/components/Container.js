import React, { useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import "../styles/Container.css";

export default function Container() {

    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        return <Resume />
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="body">
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            <main className="main-page">
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
}