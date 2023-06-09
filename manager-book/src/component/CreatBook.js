import * as service from '../service/ServiceBookList'
import React, {useEffect, useState} from "react";
import {Field, FieldArray, Form, Formik} from "formik";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Form.css'
import {useNavigate} from "react-router";

export function CreatBookList() {
    const navigate = useNavigate()
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
                    const createBook = async ()=>{
                        await service.save(values)
                        navigate('/')
                    }
                    createBook()
                }
                }
            >
                <div className="container">
                    <h1>Thêm mới</h1>
                    <Form>
                        <div className="form-group">
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
                        <button type="submit" className="btn btn-primary">Create</button>
                    </Form>
                </div>

            </Formik>
        </>
    )
}