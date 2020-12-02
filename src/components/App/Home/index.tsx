import React from 'react';
import './home.scss'

const Home = () => {
    return (
        <section className='page'>
            <div className="head">
                <h1 className='greeting'>안녕하세요! 개발자 허진석입니다.</h1>
            </div>
            <div className='contents'>
                <p>
                    저는 풀스택 개발자로 커리어를 시작하였고 다양한 개발을 하다보니 <br/>
                    현재 <strong>Front-end</strong> 영역에 관심을 두고 있습니다.<br/>
                    사람들에게 유익한 어플리케이션을 만들어 모두의 일상에 조금이라도 도움이 되고 <br/>
                    그리하여 긍정적인 피드백을 받을 때 개발자로써 자부심과 희열감을 느낍니다. 😎
                </p>
                <p>
                    좋은 개발자가 되려면 실제 개발을 하며 시간복잡도, 성능적 이슈, <br/>
                    디자인패턴 및 구조와 확장성 등의 학문적 지식을 공부하는데 게을지 하지 않고<br/>
                    동료들과 협업하는데 있어 필요한 소프트 스킬 또한 중요하다고 생각합니다. 👨‍💻
                </p>
                <p>
                    이를 위해 사이드 프로젝트 진행, 블로그 포스팅, 스터디 참여 등을 하고있고,<br/>
                    또한 기회가 생기면 오픈소스 프로젝트에 기여해보고 싶습니다. 😊😊
                </p>

            </div>
        </section>
    )
}

export default Home;
