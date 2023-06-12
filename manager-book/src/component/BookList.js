import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/BookList.css'
import {NavLink} from "react-router-dom";
import '../css/Button.css'
import {ToastContainer} from "react-toastify";
import * as service from '../service/ServiceBookList'
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";


export function BookList() {
    const [bookList, setBookList] = useState([])
    const navigate = useNavigate();
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
    },[])
    const handleDelete = async (book) => {
        try {
            await service.deleteBook(book, book.id);
            toast(`Xoa ${book.title} thanh cong`)
        } catch (error) {
            toast(`Xoa ${book.title} that bai`)
        }
    }
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
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={() => handleDelete(book)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
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
            </>
        )
}