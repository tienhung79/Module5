import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Rooms.css'

export function RoomCard() {
    return (
        <div className="card room">
            <img src="/img/room1.jpg" className="card-img-top" alt="Room" />
            <div className="card-body">
                <h5 className="card-title">Tên phòng</h5>
                <p className="card-text">Mô tả phòng</p>
                <a href="#" className="btn btn-primary">Xem chi tiết</a>
            </div>
        </div>
    );
}
