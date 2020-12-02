import React from 'react';
import './contact.scss';

const ContactPage = () => {
    return (
        <section className='page'>
            <div className='page-title'>
                <h1>Contact me!</h1>
            </div>
            <div className="contact-me">
                <p>
                    저에게 관심 있으시다면 😊 아래 연락처로 연락주세요.
                    <br/>
                    빠르게 답장드리겠습니다!
                </p>

            </div>
            <div className="contact-list">
                <ul>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/jinseog-hur-27781488/">Jinseog Hur</a></li>
                    <li>Github: <a href="https://github.com/hellosam1332">hellosam1332</a></li>
                    <li>Email: <a href="mailto:hellosam1332@gmail.com">hellosam1332@gmail.com</a></li>
                </ul>
            </div>
        </section>
    );
}

export default ContactPage;