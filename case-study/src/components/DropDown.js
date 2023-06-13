import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/DropDown.css'
import {NavLink} from "react-router-dom";

export const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={`dropdown ${isOpen ? 'show' : ''}`}>
            <button
                className="btn btn-primary"
                type="button"
                onClick={toggleDropdown}
            >
                Thêm mới
            </button>
            <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                <NavLink to="/creatVilla" className="dropdown-item">Villa</NavLink>
                <NavLink to="/creatHouse" className="dropdown-item">House</NavLink>
                <NavLink to="/creatRoom" className="dropdown-item">Room</NavLink>
            </div>
        </div>
    );
};

