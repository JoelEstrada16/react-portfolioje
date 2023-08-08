import React from 'react';
import About from '../pages/About';
import Resume from '../pages/resume';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';


const Page = ({ currentPage }) => {
    switch (currentPage) {
        case 'About':
            return <About />;
        case 'Resume':
            return <Resume />;
        case 'Portfolio':
            return < Portfolio />;
        case 'Contact':
            return <Contact />;
        default:
            return <About />
        
    }
};



export default Page;