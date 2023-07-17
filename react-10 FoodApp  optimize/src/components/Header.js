import { useState } from 'react';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
import useAvailable from '../utils/useAvailable';
const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    const isOnline = useAvailable();

    return (
        <div className="header-container">
            <img className="logo-img" src={logo} />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {isOnline ? '🟢' : '🔴'}
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