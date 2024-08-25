import React, { useState, useEffect } from "react";
import { useLocation , Link } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    const [selectedLanguage, setSelectedLanguage] = useState('EN');
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        // 根据路径选择语言
        if (location.pathname === '/Page404') {
            setSelectedLanguage('CN');
        } else {
            setSelectedLanguage('EN');
        }

        // 确保菜单在页面路径改变时被关闭
        setMenuActive(false);
    }, [location.pathname]);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    useEffect(() => {
        const navMenu = document.querySelector('nav ul');

        if (menuActive) {
            navMenu.classList.add('active');
            document.body.classList.add('no-scroll');
            document.body.style.position = 'fixed';
            document.body.style.top = `-${window.scrollY}px`;
        } else {
            navMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        }

        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        };
    }, [menuActive]);
    useEffect(() => {
        const handleClickOutside = (event) => {
            const navMenu = document.querySelector('nav');
            if (navMenu && !navMenu.contains(event.target)) {
                setMenuActive(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <div>
            <nav>
                <div className="navbar">
                    <div className="nav-logo">
                        <Link to="/">
                            <img src="./img/web-logo-n.webp" alt="nav-logo"/>
                        </Link>
                    </div>
                    <ul>
                        <li><Link to="/Company">COMPANY</Link></li>
                        <li><Link to="#">NEWS</Link></li>
                        <li><Link to="#">PRODUCT</Link></li>
                        <li><Link to="#">SUPPORT</Link></li>
                        <li><Link to="/Contact">CONTACT</Link></li>
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
