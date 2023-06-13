import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Rooms.css';
import { Dropdown } from "./DropDown";
import ReactPaginate from 'react-paginate';
import * as serviceVilla from '../service/ServiceVilla';
import '../css/page.css'

export function Villa() {
    const [villaList, setVillaList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const villasPerPage = 3;
    const pagesVisited = pageNumber * villasPerPage;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setVillaList(await serviceVilla.getAll());
            } catch (error) {
                console.log('error');
            }
        };
        fetchData();
    }, []);

    const pageCount = Math.ceil(villaList.length / villasPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const displayVilla = villaList.slice(pagesVisited, pagesVisited + villasPerPage).map((villa, index) => (
        <div className="card" key={index}>
            <img src={`/img/${villa.img}`} className="card-img-top" alt="Room" />
            <div className="card-body">
                <h5 className="card-title">{villa.serviceName}</h5>
                <p className="card-text">Diện tích: {villa.area}</p>
                <p className="card-text">Số lượng người: {villa.maxCapacity} người</p>
            </div>
            <div className="card-footer">
                <span className="price">Chi phí thuê: {villa.rentalCost}đ/ngày</span>
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
                        <h1 className="h1ForRoom">Loại Villa</h1>
                    </div>
                </div>
                <div className="card-container">
                    {displayVilla}
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
