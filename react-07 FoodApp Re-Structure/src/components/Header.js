import logo from '../assets/img/logo.png';
const Header = () => {
    return (
        <div className="header-container">
            <img className="logo-img" src={logo} />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>More</li>
            </ul>
        </div>
    )
}

export default Header;