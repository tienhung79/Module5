import React, { useState } from 'react';
import '../css/DropDown.css';
import {NavLink} from "react-router-dom"; // File CSS tùy chỉnh

export const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-container">
            <button className="dropdown-button" onClick={toggleDropdown}>
               Thêm mới
                <span className={`dropdown-icon ${isOpen ? 'open' : ''}`}>
          {/* Một biểu tượng của mũi tên xuống, ví dụ: <i className="fas fa-chevron-down"></i> */}
        </span>
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    <li className="dropdown-item"><NavLink to="/creatVilla" className="btn-primary-navlink ">Thêm mới</NavLink></li>
                    <li className="dropdown-item">Option 2</li>
                    <li className="dropdown-item">Option 3</li>
                </ul>
            )}
        </div>
    );
};

