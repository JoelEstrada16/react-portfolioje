import { useState } from 'react'

function App() {
    const [currentPage, setCurrentPage] = useState('Home');
    const allPages = ['Home', 'About', 'Contact'];

    return(
        <>
            <Nav setCurrentPage={setCurrentPage} allPages={allPages} />

            <Page currentPage={currentPage} />
        </>
    )
}

export default App