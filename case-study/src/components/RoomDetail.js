import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Rooms.css';
import { Dropdown } from "./DropDown";
import { NavLink } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import * as serviceRoom from '../service/ServiceRoom';
import '../css/page.css'
import Header from "./Header";
import Footer from "./Footer";
import '../css/ModalCustom.css'
import * as serviceHouse from "../service/ServiceHouse";
import {toast} from "react-toastify";

export function RoomDetail() {
    const [roomList, setRoomList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [idDelete,setIdDelete] = useState(null)
    const [nameDelete,setNameDelete] = useState(null)
    const roomsPerPage = 4;
    const pagesVisited = pageNumber * roomsPerPage;

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            setRoomList(await serviceRoom.getAll());
        } catch (error) {
            console.log('error');
        }
    };
    const handleConfirm = (id,name) =>{
        setIdDelete(id)
        setNameDelete(name)
    }
    const handleDelete = async (id,name) =>{
        await serviceRoom.deleteRoom(id)
        toast(`Xóa ${name} thành công`)
        fetchData()
    }
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
                <NavLink to={'/updateRoom/' + room.id}><i
                    className="bi bi-gear-wide-connected"></i></NavLink>
                <button data-bs-toggle="modal" data-bs-target="#myModal" onClick={()=> handleConfirm(room.id,room.serviceName)}>Xóa</button>
            </div>
        </div>
    ));

    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"/>
            <Header/>
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
            <Footer/>
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title"></h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"/>
                        </div>

                        <div className="modal-body">
                            <p>Bạn có muốn xóa {nameDelete}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="text-danger" data-bs-dismiss="modal" style={{border: 'none'}} onClick={()=>handleDelete(idDelete,nameDelete)}>Xóa</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
