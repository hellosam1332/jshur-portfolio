import React from 'react';
import './works.scss';

const WorksPage = () => {
    return (
        <section className='page'>
            <div className='page-title'>
                <h1>What I have done so far...😇</h1>
            </div>
            <div className="work-card">
                <div className="card-header">
                    <h1>사진인화 및 포토북 서비스 스마일캣</h1>
                </div>
                <div className='b-tags'>
                    <ul className='flex-row'>
                        <li>Full Stack</li>
                        <li>Java</li>
                        <li>Jsp</li>
                        <li>Spring Framework</li>
                        <li>HTML/CSS</li>
                        <li>Javascript</li>
                    </ul>
                </div>
                <div className="work-content">
                    <p>
                        사용자의 추억의 순간들이 담긴 사진들로 인화상품 및 포토북을 제공하는 서비스입니다.
                        Smile Canvas 라는 Windows 어플리케이션과 웹 서비스를 결합하여 고객한테 제공하는 형태로
                        저는 웹 파트를 담당하여 특히 회원관리, 이미지 합성 워크플로우 및 인프라 개발 등
                        Back-end, Front-end 모두 경험 해 볼 수 있었던 경험이였습니다.
                    </p>
                    <ul>
                        <li>온라인 포토북 뷰어 디지털포토북 개발</li>
                        <li>상품화 프로세스 자동화</li>
                        <li>모바일 포토북 에디터 기능 개발</li>
                        <li>Google enhanced ecommerce 도입</li>
                    </ul>
                </div>
            </div>
            <div className="work-card">
                <div className="card-header">
                    <h1>모바일 사진인화 어플리케이션</h1>
                </div>
                <div className='b-tags'>
                    <ul className='flex-row'>
                        <li>React js</li>
                        <li>Mobx</li>
                        <li>Webpack</li>
                        <li>Typescript</li>
                        <li>Sass</li>
                        <li>Npm</li>
                    </ul>
                </div>
                <div className="work-content">
                    <p>
                        모바일 환경에 최적화된 사진인화 어플리케이션입니다.
                        모바일 환경에서 제공되는 서비스인 만큼 사용자경험을 기획단계에서부터 중시하였으며,
                        전환율 및 퍼널 측정등을 통해 끊임없이 어플리케이션을 개선한 결과 좋은 성과를 얻을 수 있었습니다.
                        특히 모바일 환경상 사진선택기와 웹 어플리케이션의 통신 및 데이터를 주고 받는 과정에서 다양한 문제가 발생하였는데
                        이를 해결해나가는 과정이 본격적으로 FE 에 관심을 가지게 될 수 있었던 기회였습니다.
                    </p>
                    <ul>
                        <li>모바일 최적화 사진인화 서비스 개발</li>
                        <li>CSR, SPA 기반 서비스</li>
                        <li>사용자 경험을 중시한 UI/UX 도입</li>
                        <li>Google cloud platform 의 vision api 를 활용한 사진 해석 및 트리밍 자동 조정 기능</li>
                        <li>관련 백엔드 서비스 및 인프라 개발</li>
                    </ul>
                </div>
            </div>
            <div className="work-card">
                <div className="card-header">
                    <h1>스마일캣, 비즈하우스 Android, IOS 앱 출시</h1>
                </div>
                <div className='b-tags'>
                    <ul className='flex-row'>
                        <li>React Native</li>
                        <li>Typescript</li>
                        <li>Android</li>
                        <li>IOS</li>
                        <li>Firebase</li>
                    </ul>
                </div>
                <div className="work-content">
                    <p>
                        기존 레거시 앱을 대체하기 위한 앱 개발 요구가 팀내 있었지만 앱 개발자가 아무도 없던 상황이였습니다.
                        그리하여 <span className='b-tag'>Javascript</span> 베이스 와 One source 로 개발 및 유지보수가 가능 한
                        <span className='b-tag'>React Native</span> 를 생각하게 되어 습득하고 출시까지 성공적으로 진행하였습니다.
                        <br/>
                        전채적인 틀은 웹뷰 기반의 네이티브 앱이였음으로 기존 웹 개발자들도 유지보수가 가능하였고, 기존에 있던 다양한 기능도 재사용
                        할 수 있었습니다.
                    </p>
                    <ul>
                        <li>Android 사용자 사진선택 기능을 위한 커스텀 네이티브 모듈 개발</li>
                        <li>웹뷰, 네이티브 앱 통신을 위한 인터페이스 개발</li>
                        <li>Google Firebase 의 다양한 기능들 적용</li>
                    </ul>
                </div>
            </div>
            <div className="work-card">
                <div className="card-header">
                    <h1>Push notification 시스템</h1>
                </div>
                <div className='b-tags'>
                    <ul className='flex-row'>
                        <li>Java</li>
                        <li>Spring Framework</li>
                        <li>MSA</li>
                        <li>RabbitMQ</li>
                    </ul>
                </div>
                <div className="work-content">
                    <p>
                        Firebase console 자체 제공하는 push notification 페이지가 있었지만,
                        특정 사용자를 상대로 notification 을 보내는 등 요구사항이 생겨
                        push notification 시스템을 개발하게 되었습니다.
                        기존 서비스와는 독립되어야한다는 생각에 관련 인프라 페이지들과
                        <span className='b-tag'>Mirco Service Architecture</span>
                        를 적용하였고 앞으로 점점 늘어날 수 있는 처리량을 감당할수 있게 Message Queue 를 사용해 구현하여
                        <span className='b-tag'>RabbitMQ</span> 를 적용하였습니다.
                    </p>

                </div>
            </div>
        </section>
    );
}

export default WorksPage;