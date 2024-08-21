import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <div>
            <footer>
                <div className="footer-bar">
                    <div className="nav-logo">
                        <Link to="/">
                            <img src="./img/web-logo-n.webp" alt="nav-logo" />
                        </Link>
                    </div>
                    <ul>
                <li><Link to="#">COMPANY</Link></li>
                <li><Link to="#">NEWS</Link></li>
                <li><Link to="#">PRODUCT</Link></li>
                <li><Link to="#">SUPPORT</Link></li>
                <li><Link to="#">CONTACT</Link></li>
                    </ul>   
                </div>
                <div className="footer-text">
            <p>Absolutely supply good quality and comfort shock absorber</p>
            <div className="footer-icon">
                <ul>
                    <li><Link to="#"><img src="./img/instagram.webp"></img></Link></li>
                    <li><Link to="#"><img src="./img/email.webp"></img></Link></li>
                    <li><Link to="#"><img src="./img/facebook.webp"></img></Link></li>
                    <li><Link to="#"><img src="./img/whatapp.webp"></img></Link></li>
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