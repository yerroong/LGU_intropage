import React from 'react';

function Sidebar() {
    return (
        <aside>
            <div id="namecard" style={{ textAlign: 'center' }}>
                <img src="/picture/profile.jpg" alt="프로필 사진" style={{ width: '180px' }} />
                <h2>KIM Yerin</h2>
                <p><b>comment:</b> 졸리다 Zzzz..</p>
            </div>
            <div id="detail" style={{ textAlign: 'center' }}>
                <p><b>MBTI:</b> INFJ </p>
                <p><b>Birth:</b> 03.12.14 / 천안</p>
                <p>wbflqldks90@naver.com</p>
            </div>
            <div id="sns" style={{ textAlign: 'center' }}>
                <h3>SNS</h3>
                <img src="/picture/insta.png" alt="인스타" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} /> yerin1412 <br />
                <a href="https://github.com/yerroong" target="_blank" rel="noopener noreferrer">
                    <img src="/picture/git.png" alt="GitHub" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} /> yerroong
                </a>
            </div>
        </aside>
    );
}

export default Sidebar;