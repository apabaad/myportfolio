import React from 'react';
import dp from './dp.png';

const Header = () => {
  return (
    <nav>
      <header className="header">
        <a href="">
          <img src={dp} className="dp" />
        </a>
        <div className="menu-container">
          <a href="/" className="logo">
            RUPESH ADHIKARI
          </a>

          <ul className="menu">
            <li>
              <a href="/">ABOUT</a>
            </li>
            <li>
              <a href="/">SKILLS</a>
            </li>
            <li>
              <a href="/"> PROJECTS</a>
            </li>
            <li>
              <a href="/">CONTACT</a>
            </li>
          </ul>
        </div>
      </header>
      <div className="toggle">
        <i class="far fa-moon toggle-icon"></i>
        <i class="fas fa-sun toggle-icon"></i>
        <div className="toggle-ball"></div>
      </div>
    </nav>
  );
};

export default Header;
