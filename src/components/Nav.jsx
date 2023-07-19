import snapchat from '../images/snapchat.png'
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
        <a class="nav-link" id="navigation" href="#" key={page}
                    onClick={() => {setCurrentPage(page)}}>
                    {page}</a>
      ))}
      </div>
    </div>
  </div>
</nav>
<footer>
    <img src={snapchat}
    class="snap">
    </img>
</footer>
        </>
    );
};

export default Nav;