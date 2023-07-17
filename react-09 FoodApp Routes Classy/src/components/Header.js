import { useState } from 'react';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
const Header = () => {

    const [btnName, setBtnName] = useState("Login")

    return (
        <div className="header-container">
            <img className="logo-img" src={logo} />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <button onClick={() => {
                    btnName === "Login" ?
                        setBtnName("Logout")
                        : setBtnName("Login")
                }}>{btnName}</button>
            </ul>
        </div>
    )
}

export default Header;