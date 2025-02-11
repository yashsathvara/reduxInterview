import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addItemForm">AddItemForm</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Disabled</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav" role="search">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/signin">Sign in</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className="nav-link active" aria-current="page" to="/signup">Sign up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
