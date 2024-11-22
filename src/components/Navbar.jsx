const Navbar = ({setCategory}) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" style={{border: "0.4px solid black"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/src/assets/newspaper.png" width="35" height="35" alt="logo"/>
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
                            <div className="nav-link" onClick={() => setCategory("technology")} href="#">Technology</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("Business")} href="#">Business</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("Science")} href="#">Science</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("Health")} href="#">Health</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("Sports")} href="#">Sports</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("Entertainment")} href="#">Entertainment</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("Politics")} href="#">Politics</div>
                        </li>
                    </ul>
                    <form className="d-flex ms-auto" role="search">
                        <input
                            className="mr-sm-2"
                            type="text"
                            placeholder="Search here..."
                            aria-label="Search"
                            style={{ color: 'white', backgroundColor: 'black' }} // For styling the input text
                        />
                        <button className="btn btn-outline-secondary" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>

            {/* Customizing placeholder color */}
            <style>
                {`
                    .form-control::placeholder {
                        color: grey;  /* Change placeholder text color to grey */
                    }
                `}
            </style>
        </nav>
    )
}

export default Navbar;
