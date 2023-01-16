export default function NavTabs() {
    return (
      <nav class="navbar">
        <div class="container-fluid">
          <a id="navbarText" href="/">
            The NHL Project
          </a>
          <button
            id="navbarBtn"
            class="navbar-toggler ms-auto"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarToggleExternalContent3"
            aria-controls="navbarToggleExternalContent3"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </nav>
      
    );
}