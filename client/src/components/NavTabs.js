export default function NavTabs() {
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
        <div class="collapseBackground shadow-3 p-4">
            <button class="btn btn-link btn-block border-bottom m-0">
                <a class="dropdown-item" href="/">Home</a>
            </button>
            <button class="btn btn-link btn-block border-bottom m-0">
                <a class="dropdown-item" href="/pages/current/games">Games</a>
            </button>
            <button class="btn btn-link btn-block m-0">
                <a id="logoutBtn" class="dropdown-item" href="/">Sign Out</a>
            </button>
        </div>
        <div class="collapseBackground shadow-3 p-4">
            <button class="btn btn-link btn-block border-bottom m-0">
                <a class="dropdown-item" href="/">Home</a>
            </button>
            <button class="btn btn-link btn-block border-bottom m-0">
                <a class="dropdown-item" href="/pages/current/games">Games</a>
            </button>
            <button class="btn btn-link btn-block m-0">
                <a class="dropdown-item" href="/pages/users/login">Sign In</a>
            </button>
        </div>
    </div>
    </nav>;
}