import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GoogleMap from "../database/GoogleMap";

function HomePage() {
    useEffect(() => {
        const boxes = document.querySelectorAll('.home-banner__content, .box-2, .content-1, .content-5, .content-next-1, .content-next-2');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('home-banner__content')) {
                        entry.target.classList.add('animate__slideInLeft');
                    } else if (entry.target.classList.contains('box-2')) {
                        entry.target.classList.add('animate__fadeInUp');
                    } else if (entry.target.classList.contains('content-1')) {
                        entry.target.classList.add('animate__fadeInUp');
                    } else if (entry.target.classList.contains('content-5')) {
                        entry.target.classList.add('animate__fadeIn');
                    } else if (entry.target.classList.contains('content-next-1')) {
                        entry.target.classList.add('animate__slideInLeft');
                    } else if (entry.target.classList.contains('content-next-2')) {
                        entry.target.classList.add('animate__slideInLeft');
                    }
                    entry.target.classList.add('animate__animated');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        boxes.forEach(box => {
            observer.observe(box);
        });
    }, []);

    return (
        <div>
            <div className="home-banner">
                <div className="home-banner__img animate__animated animate__fadeIn">
                    <img src={`${process.env.PUBLIC_URL}/img/ah4em-9udwd.webp`} alt="home-banner"></img>
                </div>
                <div className="home-banner__content">
                    <div className="home-banner__box">
                        <div className="home-banner__btn">
                            <Link to="Contact">
                                <div className="contact-us-text">
                                    <p>CONTACT US</p>
                                    <img src={`${process.env.PUBLIC_URL}/img/next-icon-b.svg`} alt="icon-next"></img>
                                </div>
                            </Link>
                            <div className="contact-us-btn">
                                <img src={`${process.env.PUBLIC_URL}/img/contact-us-btn.webp`} alt="contact-us-btn"></img>
                            </div>
                        </div>
                        <div className="home-banner__text">
                            <h2>Absolutely supply good quality and comfort shock absorber</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card */}
            <div className="box-1">
                <div className="box-2" onClick={() => window.location.href = '#'}>
                    <div className="box-3">
                        <img src={`${process.env.PUBLIC_URL}/img/a6e05-i715q.webp`}  alt="news-img"></img>
                    </div>
                    <div className="box-4">
                        <h3>NEWS</h3>
                        <img src={`${process.env.PUBLIC_URL}/img/next-icon-b.svg`} alt="icon-next-box"></img>
                    </div>
                </div>
                <div className="box-2" style={{ backgroundColor: '#FF9900' }} onClick={() => window.location.to = '/Product'}>
                    <div className="box-3">
                        <img src={`${process.env.PUBLIC_URL}/img/ahrxv-tdyro.webp`}  alt="product-img"></img>
                    </div>
                    <div className="box-4">
                        <h3>PRODUCT</h3>
                        <img src={`${process.env.PUBLIC_URL}/img/next-icon-b.svg`}  alt="icon-next-box"></img>
                    </div>
                </div>
                <div className="box-2" onClick={() => window.location.href = '#'}>
                    <div className="box-3">
                        <img src={`${process.env.PUBLIC_URL}/img/aksph-8aazk.webp`}  alt="suprot-img"></img>
                    </div>
                    <div className="box-4" style={{ backgroundColor: '#3B322E' }}>
                        <h3 style={{ color: '#FFF' }}>SUPROT</h3>
                        <img src={`${process.env.PUBLIC_URL}/img/next-icon-w.svg`}  alt="icon-next-box" ></img>
                    </div>
                </div>
            </div>

            {/* Ikoma */}
            <div className="content">
                <div className="content-1">
                    <div className="content-2">
                        <h2>IKOMA</h2>
                        <p>Ikoma tech Co. has long been specialized in this field and is currently one of the leading manufacturers of high performance shock absorber and various auto related accessories in taiwan since 1978.</p>
                        <Link to="/Company" alt="go-company" >COMPANY<img src={`${process.env.PUBLIC_URL}/img/next-icon-b.svg`} alt="icon-next"></img></Link>
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
                    <img src={`${process.env.PUBLIC_URL}/img/a4yhc-u70on.svg`}  alt="content-next-img"></img>
                </div>
                <div className="content-5">
                    <h2>Address</h2>
                    <div className="content-map">
                        <GoogleMap />
                    </div>
                </div>
                <div className="content-next-2">
                    <img src={`${process.env.PUBLIC_URL}/img/a4yhc-u70on.svg`}  alt="content-next-img"></img>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
