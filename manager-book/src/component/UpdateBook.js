import * as service from '../service/ServiceBookList'
import React, {useEffect, useState} from "react";
import {Field, FieldArray, Form, Formik} from "formik";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Form.css'
import {useNavigate} from "react-router-dom";

export function UpdateBookList() {
    const [book, setBook] = useState()
    const navigate = useNavigate()
    useEffect(()=>{
       const getBookById = async () =>{
           setBook(await service.getById())
       }
       getBookById()
    })
    return (
        <>
            <Formik
                initialValues={
                    {
                        title: '',
                        quantity: ''
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
                                value = {book.title}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantityInput">Quantity</label>
                            <Field
                                type="number"
                                className="form-control"
                                id="quantityInput"
                                name='quantity'
                                value = {book.quantity}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Chỉnh sửa</button>
                    </Form>
                </div>

            </Formik>
        </>
    )
}