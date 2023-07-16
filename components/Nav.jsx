const Nav = ({ setCurrentPage, allPages }) => {
    return (
        <nav>
            {allPages.map(page => (
                <button
                    key={page}
                    onClick={() => {setCurrentPage(page)}}>
                    {page}
                </button>
            ))}
        </nav>
    );
};

export default Nav;