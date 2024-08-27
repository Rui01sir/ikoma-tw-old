import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ hide }) => {
    return(
        <div>
            <footer className={hide ? 'hidden' : ''}>
                <div className="footer-bar">
                    <div className="nav-logo">
                        <Link to="/">
                            <img src="./img/web-logo-n.webp" alt="nav-logo" />
                        </Link>
                    </div>
                    <ul>
                <li><Link to="/Campany">COMPANY</Link></li>
                <li><Link to="#">NEWS</Link></li>
                <li><Link to="/Product">PRODUCT</Link></li>
                <li><Link to="#">SUPPORT</Link></li>
                <li><Link to="/Contact">CONTACT</Link></li>
                    </ul>   
                </div>
                <div className="footer-text">
            <p>Absolutely supply good quality and comfort shock absorber</p>
            <div className="footer-icon">
                <ul>
                    <li><Link to="https://www.instagram.com/"><img src="./img/instagram.webp" alt="instagram-icon"></img></Link></li>
                    <li><a href="mailto:ikoma@ikoma-tw.com"><img src="./img/email.webp" alt="email-icon"></img></a></li>
                    <li><Link to="https://www.facebook.com/"><img src="./img/facebook.webp" alt="facebook-icon"></img></Link></li>
                    <li><Link to="https://www.whatsapp.com/"><img src="./img/whatapp.webp" alt="whatapp-icons"></img></Link></li>
                </ul>
            </div>
                </div>
                <div className="footer-line"></div>
                <div className="footer-name">
            <h6>© IKOMA CO., LTD. All Rights Reserved Designed</h6>
            <p>By RUI Design Studio Inc.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer