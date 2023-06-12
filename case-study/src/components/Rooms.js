import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Rooms.css'
import {NavLink} from "react-router-dom";
import {Dropdown} from "./DropDown";

export function Rooms() {

    return (
        <div>
            <div className='row col-12'>
                <div className='col-3'></div>
                <div className="col-6">
                    <h1 className="h1ForRoom">Loại phòng</h1>
                </div>
                <div className='col-3 div-navlink'>
                        <Dropdown/>
                </div>
            </div>
            <div className="card-container">
                <div className="card ">
                    <img src="/img/room1.jpg" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Phòng Vip</h5>
                        <p className="card-text">Phòng view biển</p>
                    </div>
                    <div className="card-footer">
                        <span className="price">23000</span>
                        <button className="btn btn-primary">Đặt ngay</button>
                    </div>
                </div>
                <div className="card ">
                    <img src="/img/room2.jpg" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Phòng Vip</h5>
                        <p className="card-text">Phòng view biển</p>
                    </div>
                    <div className="card-footer">
                        <span className="price">23000</span>
                        <button className="btn btn-primary">Đặt ngay</button>
                    </div>
                </div>
                <div className="card ">
                    <img src="/img/room3.jpg" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Phòng Vip</h5>
                        <p className="card-text">Phòng view biển</p>
                    </div>
                    <div className="card-footer">
                        <span className="price">23000</span>
                        <button className="btn btn-primary">Đặt ngay</button>
                    </div>
                </div>
                <div className="card ">
                    <img src="/img/room4.jpg" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Phòng Vip</h5>
                        <p className="card-text">Phòng view biển</p>
                    </div>
                    <div className="card-footer">
                        <span className="price">23000</span>
                        <button className="btn btn-primary">Đặt ngay</button>
                    </div>
                </div>
            </div>
            <div className="card-container">
                <div className="card ">
                    <img src="/img/room1.jpg" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Phòng Vip</h5>
                        <p className="card-text">Phòng view biển</p>
                    </div>
                    <div className="card-footer">
                        <span className="price">23000</span>
                        <button className="btn btn-primary">Đặt ngay</button>
                    </div>
                </div>
                <div className="card ">
                    <img src="/img/room2.jpg" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Phòng Vip</h5>
                        <p className="card-text">Phòng view biển</p>
                    </div>
                    <div className="card-footer">
                        <span className="price">23000</span>
                        <button className="btn btn-primary">Đặt ngay</button>
                    </div>
                </div>
                <div className="card ">
                    <img src="/img/room3.jpg" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Phòng Vip</h5>
                        <p className="card-text">Phòng view biển</p>
                    </div>
                    <div className="card-footer">
                        <span className="price">23000</span>
                        <button className="btn btn-primary">Đặt ngay</button>
                    </div>
                </div>
                <div className="card ">
                    <img src="/img/room4.jpg" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Phòng Vip</h5>
                        <p className="card-text">Phòng view biển</p>
                    </div>
                    <div className="card-footer">
                        <span className="price">23000</span>
                        <button className="btn btn-primary">Đặt ngay</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
