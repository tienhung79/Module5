import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Rooms.css';
import ReactPaginate from 'react-paginate';
import * as serviceHouse from '../service/ServiceHouse';
import '../css/page.css'

export function House() {
    const [houseList, setHouseList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const housesPerPage = 3;
    const pagesVisited = pageNumber * housesPerPage;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setHouseList(await serviceHouse.getAll());
            } catch (error) {
                console.log('error');
            }
        };
        fetchData();
    }, []);

    const pageCount = Math.ceil(houseList.length / housesPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const displayHouse = houseList.slice(pagesVisited, pagesVisited + housesPerPage).map((house, index) => (
        <div className="card" key={index}>
            <img src={`/img/${house.img}`} className="card-img-top" alt="Room" />
            <div className="card-body">
                <h5 className="card-title">{house.serviceName}</h5>
                <p className="card-text">Diện tích: {house.area}</p>
                <p className="card-text">Số lượng người: {house.maxCapacity} người</p>
            </div>
            <div className="card-footer">
                <span className="price">Chi phí thuê: {house.rentalCost}đ/ngày</span>
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
        </>
    );
}
