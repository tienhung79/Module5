
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg  ">
        <a className="navbar-brand" href="#">
        <img  src="/img/favicon.png" alt="Logo" className="logo" /></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Trang chủ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Giới thiệu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Ẩm thực</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Loại phòng</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Giải trí</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Spa</a>
            </li>
          </ul>
        </div>
      </nav>
      
    </header>
  );
};

export default Header;