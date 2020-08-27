import React from 'react';
import './Navbar.css';
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) => {
    return (
        <div>
           <nav className="navbar navbar-dark bg-primary">
                <a href = "/home" className="navbar-brand ml-5 pl-5">React online course</a>
                    <form className="form-inline mr-5 pr-5">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search course" aria-label="Search"/>
                        <FontAwesomeIcon className = "icon-white mr-2" icon={faShoppingCart}/><span className = "text-white">{props.cart.length}</span>
                    </form>
            </nav>
        </div>
    );
};

export default Navbar;