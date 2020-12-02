import React from 'react';
import './about.scss';

const AboutPage = () => {
    return (
        <section className='page'>
            <div className='card-container'>
                <div className='card-header'>
                    <h2>Skills</h2>
                </div>
                <div className="card-body skills">
                    <ul>
                        <li>
                            <h3>Language</h3>
                            <p>
                                Javascript(ES6), Typescript, HTML/CSS(SASS), Java
                            </p>
                        </li>
                        <li>
                            <h3>Framework</h3>
                            <p>React js, React Native, Spring Framework, </p>
                        </li>
                        <li>
                            <h3>Tool</h3>
                            <p>Webstorm, Intellij, Git, Bitbucket, Bamboo (CI/CD), JIRA</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card-container">
                <div className="card-header">
                    <h2>Education</h2>
                </div>
                <div className="card-body">
                    <div className="card-year">
                        <span>2008<br/> ~ 2013</span>
                    </div>
                    <div className="separator"/>
                    <div className="card-content">
                        <div className='title'>
                            <a href="http://su.edu.ph">
                                <span>Silliman University (Philippines)</span>
                            </a>
                        </div>
                        <span>경영학과</span>
                    </div>
                </div>
                <div className="card-body">
                    <div className="card-year">
                        <span>2014<br/> ~ 2016</span>
                    </div>
                    <div className="separator"/>
                    <div className="card-content">
                        <div className='title'>
                            <a href="https://kwww.knou.ac.kr"><span>한국방송통신대학교</span></a>
                        </div>
                        <span>컴퓨터과학과</span>
                    </div>
                </div>
            </div>
            <div className="card-container">
                <div className="card-header">
                    <h2>Experience</h2>
                </div>
                <div className="card-body">
                    <div className="card-year">
                        <span>2017.3<br/> ~ 2020.9</span>
                    </div>
                    <div className="separator"/>
                    <div className="card-content">
                        <div className='title'><a href="https://www.miridih.com/"><span>(주)미리디</span></a></div>
                        <span>웹 개발자</span>
                        <span>사진인화 및 포토북 서비스 '스마일캣' 신규 서비스 개발 및 유지보수</span>
                        <span>인쇄물 서비스 '비즈하우스' 신규서비스 개발 및 유지보수</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutPage;