import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Rooms.css';
import { Dropdown } from "./DropDown";
import { NavLink } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import * as serviceRoom from '../service/ServiceRoom';
import '../css/page.css'

export function Rooms() {
    const [roomList, setRoomList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const roomsPerPage = 3;
    const pagesVisited = pageNumber * roomsPerPage;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setRoomList(await serviceRoom.getAll());
            } catch (error) {
                console.log('error');
            }
        };
        fetchData();
    }, []);

    const pageCount = Math.ceil(roomList.length / roomsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const displayRooms = roomList.slice(pagesVisited, pagesVisited + roomsPerPage).map((room, index) => (
        <div className="card" key={index}>
             <img src={`/img/${room.img}`} className="card-img-top" alt="Room" />
            <div className="card-body">
                <h5 className="card-title">{room.serviceName}</h5>
                <p className="card-text">Diện tích: {room.area}</p>
                <p className="card-text">Số lượng người: {room.maxCapacity} người</p>
            </div>
            <div className="card-footer">
                <span className="price">Chi phí thuê: {room.rentalCost}đ/ngày</span>
            </div>
            <div className="card-footer">
                <button className="btn btn-primary">Đặt ngay</button>
            </div>
        </div>
    ));

    return (
        <>
            <div>
                <div className='row col-12'>
                    <div className='col-3'></div>
                    <div className="col-6">
                        <h1 className="h1ForRoom">Loại phòng</h1>
                    </div>
                    <div className='col-3 div-navlink'>
                        <Dropdown />
                    </div>
                </div>
                <div className="card-container">
                    {displayRooms}
                </div>
                <ReactPaginate
                    previousLabel={"<<"}
                    nextLabel={">>"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                />

            </div>
        </>
    );
}
