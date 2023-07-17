import { useState } from 'react';
import logo from '../assets/img/logo.png';
const Header = () => {

    const [btnName, setBtnName] = useState("Login")

    return (
        <div className="header-container">
            <img className="logo-img" src={logo} />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>More</li>
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