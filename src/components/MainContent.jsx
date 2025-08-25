import React from 'react';

const images = [
    "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg",
    "img7.jpg", "img8.jpg", "img9.jpg", "img10.jpg", "img11.jpg", "img12.jpg"
];

function MainContent() {
    return (
        <div id="main">
            <section id="home">
                <h2>Who am I?</h2>
                <p>인하대 정보통신공학과 휴학중인 김예린입니다!<br />프론트엔드 개발자를 꿈꾸고 있습니다!<br />취미는 노래듣기🎶, 게임하기🎮, 농구🏀, 잠자기💤입니다!</p>
                <div id="information">자세한 사진은 '사진'에서!</div>
                <div id="slider">
                    <div className="image-box">
                        {images.map((img, index) => (
                            <div key={index}><img src={`/picture/${img}`} alt={`Image ${index + 1}`} /></div>
                        ))}
                        {/* 클론 이미지 */}
                        {images.slice(0, 5).map((img, index) => (
                            <div key={`clone-${index}`}><img src={`/picture/${img}`} alt={`Image ${index + 1} (clone)`} /></div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="likes">
                <h2>기술 스택/언어</h2>
                <div className="like-item">
                    <span><b>C++</b>: 학과 수업을 바탕으로 꾸준히 키웠습니다.</span>
                </div>
                <div className="like-item">
                    <span><b>HTML/CSS, 자바스크립트, 타입스크립트</b>: 멋쟁이사자처럼 12기 FE 세션 수료를 기점으로 꾸준히 공부 및 프로젝트 진행중</span>
                </div>
                <div className="like-item">
                    <span><b>React 및 기타 협업도구(github, notion. figma)</b>: 꾸준히 발전 중 입니다.</span>
                </div>
            </section>

            <section id="experience">
                <h2>Experience</h2>
                <p><b>현 관심분야:</b> 프론트엔드</p>
                <ul>
                    <li>프론트엔드
                        <ul>
                            <li>멋쟁이 사자처럼 12기 FE 이수</li>
                            <li>멋쟁이 사자처럼 13기 운영진 ing</li>
                            <li>LG유플러스 유레카 프론트엔드 교육 ing</li>
                        </ul>
                    </li>
                    <li>과 활동
                        <ul>
                            <li>과 축구..농구 소모임 활동</li>
                            <li>학과 부회장 등등</li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section id="education">
                <h2>Education</h2>
                <table>
                    <caption>학력 사항</caption>
                    <thead>
                        <tr>
                            <th>출신학교</th>
                            <th>전공</th>
                            <th>기간</th>
                            <th>구분</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>인하대학교</td>
                            <td>정보통신공학과</td>
                            <td>2022.03~</td>
                            <td>휴학(4-2)</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default MainContent;