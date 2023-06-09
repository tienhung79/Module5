import React, {useEffect, useState} from "react";
import * as service from '../service/ServiceBookList'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/BookList.css'
import {NavLink} from "react-router-dom";
import '../css/Button.css'
import {getById} from "../service/ServiceBookList";

export function BookList() {
    const [bookList, setBookList] = useState([])
    useEffect(() => {
        const disPlay = async () => {
            try {
                const result = await service.getAll()
                setBookList(result)
            } catch (error) {
                console.log('error')
            }
        }
        disPlay();

        const getById = async (id) => {
           await service.getById(id)
        }
    },[])
        return(
            <>
                <div className="container">
                    <h1>Library</h1>
                    <button className="btn btn-primary btn-add"><NavLink to={'/creatNews'} className='nav-link'>Thêm mới</NavLink></button>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Tên</th>
                            <th>Số lượng</th>
                            <th>Chức năng</th>
                        </tr>
                        </thead>
                        <tbody>
                        { bookList.map((book) => (
                            <tr key={book}>
                                <td>{book.title}</td>
                                <td>{book.quantity}</td>
                                <td>
                                    <button >
                                        <NavLink className='nav-link'  to={'/updateBook/' + book.id}> Chỉnh sửa</NavLink>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </>
        )
}