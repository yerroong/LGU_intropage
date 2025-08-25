import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>프론트엔드 개발 김예린입니다❤️‍🔥</h1>
            <nav>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>홈</NavLink>
                <NavLink to="/photo" className={({ isActive }) => (isActive ? "active" : "")}>사진</NavLink>
                <a href="#">업데이트중</a>
            </nav>
        </header>
    );
}

export default Header;