import * as service from '../service/ServiceBookList'
import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Form.css'
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export function UpdateBookList() {
    let param = useParams()
    const [book, setBook] = useState()

    const navigate = useNavigate()
    useEffect(()=>{
       const getBookById = async () =>{
           // const result = await service.getAll()
           // const bookById = await result.find((book) => book.id === param.id)
           const result = await service.getById(param.id)
           setBook(result)
       }
       getBookById()
    },[param.id])


    if (!book) {
        return null;
    }

    return (
        <>
            <Formik
                initialValues={
                    {
                        id: book?.id,
                        title: book?.title,
                        quantity: book?.quantity,
                    }
                }
                onSubmit={(values) => {
                    const update = async () => {
                        console.log(values)
                        try {
                            await service.update(values,param.id)
                            toast(`Chinh sua ${values.title} thanh cong`)
                            navigate("/");
                        } catch (error) {
                            toast(`Chinh sua ${values.title} that bai`)
                        }
                    };
                    update();
                }}
            >
                <div className="container">
                    <h1>Chỉnh sửa</h1>
                    <Form>
                        <div className="form-group">
                            {/*{console.log(book.title)}*/}
                            <label htmlFor="nameInput">Title</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="nameInput"
                                name ='title'
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantityInput">Quantity</label>
                            <Field
                                type="number"
                                className="form-control"
                                id="quantityInput"
                                name='quantity'
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Chỉnh sửa</button>
                    </Form>
                </div>

            </Formik>
        </>
    )
}