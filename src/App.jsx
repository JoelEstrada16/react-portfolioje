import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Page from './components/Page.jsx'

function App() {
    const [currentPage, setCurrentPage] = useState('Home');
    const allPages = ['About', 'Resume', 'Contact', 'Portfolio'];

    return(
        <>
            <Nav setCurrentPage={setCurrentPage} allPages={allPages} />

            <Page currentPage={currentPage} />
        </>
    )
}

export default App
