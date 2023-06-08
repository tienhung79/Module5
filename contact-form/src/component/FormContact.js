import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/FormContact.css';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const FormContact = () => {
    return (
        <>
            <Formik
                initialValues={
                    {
                        name: '',
                        email: '',
                        phone: null,
                        message: '',
                    }
                }
                onSubmit={(values) => {
                    console.log(values)
                    toast(`Tao ${values.name} thanh cong`)
                }
                }
                validationSchema={Yup.object(
                    {
                        name: Yup.string().required('Vui lòng nhập'),
                        email: Yup.string().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,'Vui lòng nhập đúng định dạng của email').required(' Vui lòng nhập'),
                        phone: Yup.number('Phai nhap so').integer().required('Vui long nhap')
                    }
                )}
            >

                <div className="containerForm">
                    <h1 style={{textAlign: "center"}}>Contact Form</h1>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="fullName">Name</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="fullName"
                                name="name"
                            />
                            <ErrorMessage name='name' component='span' className='text-danger'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                            />
                            <ErrorMessage name='email' component='span' className='text-danger'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <Field
                                type="number"
                                className="form-control"
                                id="phone"
                                name="phone"
                            />
                            <ErrorMessage name='phone' component='span' className='text-danger'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <Field
                                className="form-control"
                                id="message"
                                name="message"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Add Customer</button>
                    </Form>
                </div>
            </Formik>
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
};

