import React from "react";
import {Link} from "react-router-dom"
import Googlemap from '../components/Googlemap'

function Homepage(){
    return(
        <div>
            <div className="home-banner">
                <div className="home-banner__img">
                    <img src="./img/ah4em-9udwd.webp" alt="home-banner"></img>
                </div>
                <div className="home-banner__content">
                    <div className="home-banner__box">
                        <div className="home-banner__btn">
                            <Link to="Page404">
                                <div className="contact-us-text">
                                    <p>CONTACT US</p>
                                    <img src="./img/next-icon-b.svg" alt="icon-next"></img>
                                </div>
                            </Link>
                            <div className="contact-us-btn">
                            <img src="./img/contact-us-btn.webp" alt="contact-us-btn"></img>
                            </div>
                        </div>
                    <div className="home-banner__text">
                        <h2>Absolutely supply good quality and comfort shock absorber</h2>
                    </div>
                    </div>
                </div>
                {/* <div className="contact-us-btn">
                    <Link to="#">
                        <div className="contact-us-text">
                            CONTACT US
                            <img src="./img/next-icon-b.svg" alt="icon-next"></img>
                        </div>
                        <img src="./img/contact-us-btn.webp" alt="contact-us-btn"></img>
                    </Link>
                </div>
                <div className="home-banner-text">
                    <h2>Absolutely supply good quality and comfort shock absorber</h2>
                </div> */}
            </div>

            {/* Card */}
            <div className="box-1">
                <div className="box-2" onclick="window.location.href='#'">
                    <div className="box-3">
                        <img src="./img/Rectangle 64.png" alt="news-img"></img>
                    </div>
                    <div className="box-4">
                        <h3>NEWS</h3>
                        <img src="./img/next-icon-b.svg" alt="icon-next-box"></img>
                    </div>
                </div>
                <div className="box-2" style={{backgroundColor: '#FF9900'}} onclick="window.location.href='#'">
                    <div className="box-3">
                        <img src="./img/Rectangle 52.png" alt="news-img"></img>
                    </div>
                    <div className="box-4">
                        <h3>PRODUCT</h3>
                        <img src="./img/next-icon-b.svg" alt="icon-next-box"></img>
                    </div>
                </div>
                    <div className="box-2" onclick="window.location.href='#'">
                <div className="box-3">
                    <img src="./img/Rectangle 51.png" alt="news-img"></img>
                </div>
                <div className="box-4" style={{backgroundColor: '#3B322E'}}>
                    <h3 style={{color: '#FFF'}}>SUPROT</h3>
                    <img src="./img/next-icon-w.svg" alt="icon-next-box" ></img>
                </div>
                </div>
            </div>

            {/* Ikoma */}
            <div className="content">
                <div className="content-1">
                    <div className="content-2">
                        <h2>IKOMA</h2>
                        <p>Ikoma tech Co. has long been specialized in this field and is currently one of the leading manufacturers of high performance shock absorber and various auto related accessories in taiwan since 1978.</p>
                        <Link to="/Company" alt="go-company" >COMPANY<img src="./img/next-icon-b.svg" alt="icon-next"></img></Link>
                    </div>
                    <div className="content-3">
                        <img src={`${process.env.PUBLIC_URL}/img/a2ylt-uyy6q.webp`} alt="contect-img"></img>
                    </div>
                </div>
                <div className="content-color">
                </div>
            </div>

            {/* Address */}
            <div className="content-4">
                    <div className="content-next-1">
                        <img src="./img/a4yhc-u70on.svg" alt="content-next-img"></img>
                    </div>
                <div className="content-5">
                    <h2>Address</h2>
                    <div className="content-map">
                        <Googlemap />
                    </div>
                </div>
                <div className="content-next-2">
                    <img src="./img/a4yhc-u70on.svg" alt="content-next-img"></img>
                </div>
            </div>

        </div>
    );

}

export default Homepage;
