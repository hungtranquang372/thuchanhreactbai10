import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Logo from '../images/phongcanh.jpg'
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                        <img src={Logo} alt='logo'/>
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <Link to="/">TaskList</Link>
                        </li>
                        <li>
                            <Link to="/taskform">TaskForm</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
