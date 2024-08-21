import React, { useState, useEffect } from "react";
import { useLocation , Link } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    const [selectedLanguage, setSelectedLanguage] = useState('EN');
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        if (location.pathname === '/Page404') {
            setSelectedLanguage('CN');
        } else {
            setSelectedLanguage('EN');
        }
    }, [location.pathname]);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    useEffect(() => {
        const navMenu = document.querySelector('nav ul');
        if (menuActive) {
          navMenu.classList.add('active');
          document.body.classList.add('no-scroll');
        } else {
          navMenu.classList.remove('active');
          document.body.classList.remove('no-scroll');
        }
      }, [menuActive]);
      
    return (
        <div>
            <nav>
                <div className="navbar">
                    <div className="nav-logo">
                        <Link to="Homepage">
                            <img src="./img/web-logo-n.webp" alt="nav-logo"/>
                        </Link>
                    </div>
                    <ul>
                        <li><Link to="/Company">COMPANY</Link></li>
                        <li><Link to="#">NEWS</Link></li>
                        <li><Link to="#">PRODUCT</Link></li>
                        <li><Link to="#">SUPPORT</Link></li>
                        <li><Link to="#">CONTACT</Link></li>
                        <div className="language">
                            <Link
                                to="/"
                                style={{ fontWeight: selectedLanguage === 'EN' ? 'bold' : 'normal' }}
                            >
                                <img src="./img/usa.svg" alt="usa-logo"></img>EN
                            </Link>
                            /
                            <Link
                                to="/Page404"
                                style={{ fontWeight: selectedLanguage === 'CN' ? 'bold' : 'normal' }}
                            >
                                CN<img src="./img/roc.svg" alt="roc-logo"></img>
                            </Link>
                        </div>
                    </ul>
                    <button 
                        className={`menu-toggle ${menuActive ? 'active' : ''}`} 
                        aria-label="Toggle menu" 
                        onClick={toggleMenu}
                    >
                    </button>
                    {/* <button className="menu-toggle" aria-label="Toggle menu">
                        <img src="./img/bar-icon.svg" alt="bar-icon"/>
                    </button> */}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
