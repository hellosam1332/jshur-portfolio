import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer-contents'>
                <div className="social-links">
                    <ul className='flex-row'>
                        <li>
                            <a href="https://github.com/hellosam1332"><i className="fab fa-github"/></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jinseog-hur-27781488/"><i className="fab fa-linkedin"/></a>
                        </li>
                        <li>
                            <a href="https://velog.io/@hellosam"><i className="fas fa-blog"/></a>
                        </li>
                    </ul>
                </div>
                <div className="source">
                    <div className="powered-by-react">
                        <span>Powered by <i className="fab fa-react"/> React</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;