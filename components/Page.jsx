import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact'

const Page = ({ currentPage }) => {
    switch (currentPage) {
        case 'Home':
            return <Home />;
        case 'About':
            return <About />;
        case 'Contact':
            return <Contact />;
        default:
            return <Home />
        
    }
};

export default Page;