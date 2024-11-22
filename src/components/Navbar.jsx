const Navbar = ({ setCategory }) => {
    return (
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
        style={{ border: "0.4px solid black" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/src/assets/newspaper.png" width="35" height="35" alt="logo" />
          </a>
          <span className="navbar-brand mb-0 h1">NationScope</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("technology")}>
                  Technology
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("Business")}>
                  Business
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("Science")}>
                  Science
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("Health")}>
                  Health
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("Sports")}>
                  Sports
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("Entertainment")}>
                  Entertainment
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("Politics")}>
                  Politics
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  
