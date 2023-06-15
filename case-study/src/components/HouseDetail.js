import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Rooms.css';
import ReactPaginate from 'react-paginate';
import * as serviceHouse from '../service/ServiceHouse';
import '../css/page.css'
import Header from "./Header";
import Footer from "./Footer";
import {NavLink} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../css/ModalCustom.css'


export function HouseDetail() {
    const [houseList, setHouseList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [idDelete,setIdDelete] = useState(null)
    const [nameDelete,setNameDelete] = useState(null)
    const housesPerPage = 4;
    const pagesVisited = pageNumber * housesPerPage;

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            setHouseList(await serviceHouse.getAll());
        } catch (error) {
            console.log('error');
        }
    };
   const handleConfirm = (id,name) =>{
       setIdDelete(id)
       setNameDelete(name)
   }
   const handleDelete = async (id,name) =>{
      await serviceHouse.deleteHouse(id)
       toast(`Xóa ${name} thành công`)
      fetchData()
   }
    const pageCount = Math.ceil(houseList.length / housesPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    };

    const displayHouse = houseList.slice(pagesVisited, pagesVisited + housesPerPage).map((house, index) => (
        <div className="card" key={index}>
            <img src={`/img/${house.img}`} className="card-img-top" alt="Room"/>
            <div className="card-body">
                <h5 className="card-title">{house.serviceName}</h5>
                <p className="card-text">Diện tích: {house.area}</p>
                <p className="card-text">Số lượng người: {house.maxCapacity} người</p>
            </div>
            <div className="card-footer">
                <span className="price">Chi phí thuê: {house.rentalCost}đ/ngày</span>
            </div>
            <div className="card-footer">
                <NavLink to={'/updateHouse/' + house.id}><i
                    className="bi bi-gear-wide-connected"/></NavLink>
                <button data-bs-toggle="modal" data-bs-target="#myModal" onClick={()=> handleConfirm(house.id,house.serviceName)}>Xóa</button>
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
                        <h1 className="h1ForRoom">Loại House</h1>
                    </div>
                </div>
                <div className="card-container">
                    {displayHouse}
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
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

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
