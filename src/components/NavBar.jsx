import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary flex-colum">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Ton Mobles
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="#">
                Sillones
              </a>
              <a className="nav-link" href="#">
                Sillas
              </a>
              <a className="nav-link" href="#">
                Butacas
              </a>
              <a className="nav-link" href="#">
                Respaldos
              </a>
              <CartWidget />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
