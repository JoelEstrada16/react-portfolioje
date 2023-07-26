import './Nav.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Nav = ({ setCurrentPage, allPages }) => {
    return (
        <>

        <nav class="navbar navbar-expand-lg"
        >
  <div class="container-fluid">
    <h1 class="name">Joel Estrada</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div >
      <div class="navbar-nav">
      {allPages.map(page => (
        <button class="nav-link" id="navigation" key={page}
                    onClick={() => {setCurrentPage(page)}}>
                    {page}</button>
      ))}
      </div>
    </div>
  </div>
</nav>

        </>
    );
};

export default Nav;