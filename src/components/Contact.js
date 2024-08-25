import React, { useState } from 'react';
// import { Link } from "react-router-dom";

function Contact(){
    const [formData, setFormData] = useState({
        name: '',
        country: '',
        position: '',
        phoneCode: '+1',
        phoneNumber: '',
        email: '',
        message: ''
    });

    // 处理输入框值变化
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // 处理表单提交
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/mpwakgew', { // 替换为你的Formspree表单ID
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert('信息发送成功！');
                form.reset();
            } else {
                const result = await response.json();
                console.error('发送信息时出错:', result);
                alert('发送信息时出错。');
            }
        } catch (error) {
            console.error('发生了意外错误:', error);
            alert('发生了意外错误。');
        }
    };
    return(
        <div>
            <div className="banner-page">
                <img src={`${process.env.PUBLIC_URL}/img/aq7xm-hh20y.webp`} alt="Contact-banner"></img>
            </div>
        <div className="Contact">
            <div className="Contact-page">
                <div className="Contact-form">
                <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">NAME<span className="required">*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">COUNTRY<span className="required">*</span></label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">SELECT COUNTRY</option>
            <option value="Taiwan">Taiwan</option>
            <option value="USA">Usa</option>
            <option value="Japan">Japan</option>
            {/* 根据需要添加更多选项 */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="position">POSITION TITLE<span className="required">*</span></label>
          <select
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          >
            <option value="">SELECT POSITION</option>
            <option value="boss">boss</option>
            <option value="Manager">Manager</option>
            <option value="Staff">Staff</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="phoneCode">PHONE NUMBER<span className="required">*</span></label>
          <div className="phone-number">
            <select
              id="phoneCode"
              name="phoneCode"
              value={formData.phoneCode}
              onChange={handleChange}
              required
            >
                <option value="">SELECT COUNTRY CODE</option>
                <option value="+1">+1 (美国)</option>
                <option value="+44">+44 (英国)</option>
                <option value="+33">+33 (法国)</option>
                <option value="+49">+49 (德国)</option>
                <option value="+86">+86 (中国)</option>
                <option value="+81">+81 (日本)</option>
                <option value="+82">+82 (韩国)</option>
                <option value="+91">+91 (印度)</option>
                <option value="+61">+61 (澳大利亚)</option>
                <option value="+55">+55 (巴西)</option>
                <option value="+27">+27 (南非)</option>
                <option value="+1">+1 (加拿大)</option>
                <option value="+34">+34 (西班牙)</option>
                <option value="+39">+39 (意大利)</option>
            </select>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              placeholder="PHONE NUMBER"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">EMAIL<span className="required">*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">YOUR MESSAGE<span className="required">*</span></label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">提交</button>
      </form>
                </div>
                <div className="Contact-add">
                    <div className="Contact-add__img">
                        <img src="./img/am8bx-v2r8r.svg" alt="Contact-add-img"></img>
                    </div>
                    <div className="Contact-add__text">
                        <p>
                        <a
                        href="https://maps.app.goo.gl/c4GWNf7Px4qRdEic9"
                        target="_blank" 
                        rel="noopener noreferrer"
                        >No.20 Lien Cheng,Shing Ren Li,Pate City,Taoyuan,Taiwan R.O.C.</a></p>
                        <p>Tel : <a href="tel:+88633659985">+886-3-3659985</a></p>
                        <p>Fax : <a href="fax:+88633653739">+886-3-3653739</a></p>
                        <p>Email : <a href="mailto:ikoma@ikoma-tw.com">ikoma@ikoma-tw.com</a></p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;