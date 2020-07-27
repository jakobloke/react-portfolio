import React, { useState } from 'react';
import Navigation from './Nav';
import About from './pages/About';
import Project from './Project';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio() {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch(currentPage) {
            case 'About': 
            return (<About></About>)

            case 'Portfolio':
            return (<Project></Project>)

            case 'Contact':
            return (<Contact></Contact>)

            case 'Resume': 
            return (<Resume></Resume>)

            default: 
            return (<About></About>)
        }
    };
    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>
                {
                    renderPage()
                }
            </div>
        </div>
    );
}

export default Portfolio;