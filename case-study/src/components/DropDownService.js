import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/DropDown.css'
import {NavLink} from "react-router-dom";
import '../css/DropDownService.css'

export const DropdownService = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={`dropdown ${isOpen ? 'show' : ''}`}>
            <button
                className='nav-link green-button'
                type="button"
                onClick={toggleDropdown}
            >
                Dịch vụ
            </button>
            <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                <NavLink to="/villa" className="dropdown-item">Villa</NavLink>
                <NavLink to="/house" className="dropdown-item">House</NavLink>
                <NavLink to="/room" className="dropdown-item">Room</NavLink>
            </div>
        </div>
    );
};

