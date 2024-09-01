import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../animations/Carousel';
// import NewsData from '../database/NewsData';

const News = () => {
        const navigate = useNavigate();
      
        const handleClick = (id) => {
          navigate(`/news/${id}`);
        };
      
    return (
        <div>
            <div className="banner-page">
                <img src={`${process.env.PUBLIC_URL}/img/abprt-mh120.webp`} alt="Company-banner" />
            </div>
            <div className="news-page">
                <div className="news-page__carousel">
                    <Carousel/>
                </div>
                <div className='news-page__contact'>
                    <div className="news-page__list">
                        <div className='news-page__card-1'>
                            <div className='news-page__box-1 clickable-div' onClick={() => handleClick(1)}>
                                <h1>公司產線設備升級</h1>
                                <p>2024/06/01</p>
                                <img src={`${process.env.PUBLIC_URL}/img/a2ylt-uyy6q.webp`} alt=''></img>
                            </div>
                            <div className='news-page__box-2 clickable-div' onClick={() => handleClick(1)}>
                                <p>22024/05/25</p>
                                <h1>一日最高生產萬支</h1>
                                <img src={`${process.env.PUBLIC_URL}/img/afvlu-17oek.webp`} alt=''></img>
                            </div>
                        </div>
                        <div className='news-page__card-2'>
                            <img src={`${process.env.PUBLIC_URL}/img/a6e05-i715q.webp`} alt=''></img>
                            <div className='news-page__card-text'>
                                <h1>工程師驗證把關產品有保證</h1>
                                <p>避震器改裝市場大，也淺藏不少劣質仿冒品，以一組國產避震器3萬起跳，進口的更貴8至12萬都有，大陸仿冒的避震器，最便宜1萬元買的到，避震器就像人的小腦穩定車身，呼籲車主張大眼睛看仔細，不要省荷包，魔鬼藏在細節沒發現。</p>
                                <a>#工程師  #嚴選  #保證</a>
                                <div className='news-page__btn clickable-div' onClick={() => handleClick(1)}>
                                <p>看更多</p>
                                <img src={`${process.env.PUBLIC_URL}/img/ayt9f-rc0z5.svg`} alt='news-page__btn'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
