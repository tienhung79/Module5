import * as service from '../service/ServiceBookList'
import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Form.css'
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";

export function UpdateBookList() {
    let param = useParams()
    const [book, setBook] = useState()
    const navigate = useNavigate()
    useEffect(()=>{
       const getBookById = async () =>{
           const result = await service.getAll()
           const bookById = await result.find((book) => book.id === param.id)
           setBook(bookById)
       }
       getBookById()
    },[])
    return (
        <>
            <Formik
                initialValues={
                    {
                        title: book.title,
                        quantity: book.quantity
                    }
                }
                onSubmit={(values) => {

                }
                }
            >
                <div className="container">
                    <h1>Chỉnh sửa</h1>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="nameInput">Title</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="nameInput"
                                name ='title'
                                value = 'title'
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantityInput">Quantity</label>
                            <Field
                                type="number"
                                className="form-control"
                                id="quantityInput"
                                name='quantity'
                                value = 'quantity'
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Chỉnh sửa</button>
                    </Form>
                </div>

            </Formik>
        </>
    )
}