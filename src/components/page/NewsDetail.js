import React from 'react';
import { useParams ,Link } from 'react-router-dom';
import  NewsData  from '../database/NewsData';

const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = NewsData.find(item => item.id === parseInt(id));

  if (!newsItem) {
    return <div>新聞未找到</div>;
  }


  return (
    <div>
      <div className="banner-page">
        <img src={`${process.env.PUBLIC_URL}/img/abprt-mh120.webp`} alt="Company-banner" />
      </div>
    <div className="news-detail">
      <h1 className="news-title">{newsItem.title}</h1>
      <div className='news-contact'>
        <p className="news-date">{newsItem.date}</p>
        <div className='news-icon'>
          <ul>
            <li><Link to="https://www.instagram.com/"><img src={`${process.env.PUBLIC_URL}/img/instagram.webp`} alt="instagram-icon"></img></Link></li>
            <li><a href="mailto:ikoma@ikoma-tw.com"><img src={`${process.env.PUBLIC_URL}/img/email.webp`} alt="email-icon"></img></a></li>
            <li><Link to="https://www.facebook.com/"><img src={`${process.env.PUBLIC_URL}/img/facebook.webp`} alt="facebook-icon"></img></Link></li>
            <li><Link to="https://www.whatsapp.com/"><img src={`${process.env.PUBLIC_URL}/img/whatapp.webp`} alt="whatapp-icon"></img></Link></li>
            <li><Link to=""><img src={`${process.env.PUBLIC_URL}/img/share-icon.svg`} alt="share-icon"></img></Link></li>
          </ul>
        </div>
      </div>
      <img src={newsItem.imageUrl} alt="News" className="news-image" />
      <p className="news-content">{newsItem.content1}</p>
      <img src={newsItem.imageUrl2} alt="News" className="news-image" />
      <p className="news-content">{newsItem.content2}</p>
      <div className="news-content__btn">
        <Link to="/News" alt="back-Homepage" ><img src={`${process.env.PUBLIC_URL}/img/back-icon.svg`} alt="back-icon"></img>BACK</Link>
      </div>
    </div>
    </div>
  );
};

export default NewsDetail;