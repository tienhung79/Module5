import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Header.css';
import {NavLink} from "react-router-dom";
import {DropdownService} from "./DropDownService";

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-custom">
                <NavLink className="navbar-brand" to='/'>
                    <img src="/img/favicon.png" alt="Logo" className="logo"/></NavLink>
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
                            <NavLink className="nav-link" to='/'>Trang chủ</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Giới thiệu</a>
                        </li>
                        <li className="nav-item">
                           <DropdownService/>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://furamavietnam.com/vi/our-rooms/">Loại
                                phòng</a>
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