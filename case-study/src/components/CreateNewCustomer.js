import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/CreateNewCustomer.css';
import {Field, Form, Formik} from "formik";
import {toast} from "react-toastify"; // File CSS tùy chỉnh

export const CreateNewCustomer = () => {

    return (
        <>
            <Formik
                initialValues={
                    {
                        name: '',
                        dayOfBirth: '',
                        gender: '',
                        insuranceCard: '',
                        email: '',
                        phoneNumber: null,
                        kindOfCustomer: '',
                        address: ''
                    }
                }
                onSubmit={(values) => {
                    console.log(values)
                    toast(`Thêm khách hàng ${values.name} thành công`)
                }}
            >
                <Form>
                    <div className="containerForm">
                        <h1 style={{textAlign: "center"}}>Thêm mới khách hàng</h1>
                        <div className="form-group">
                            <label htmlFor="fullName">Họ và tên</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="fullName"
                                name="name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="birthDate">Ngày tháng năm sinh</label>
                            <Field
                                type="date"
                                className="form-control"
                                id="birthDate"
                                name="dayOfBirth"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Giới tính</label>
                            <select
                                className="form-control"
                                id="gender"
                                name="gender"
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="idCardNumber">Chứng minh nhân dân</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="idCardNumber"
                                name="insuranceCard"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Số điện thoại</label>
                            <Field
                                type="tel"
                                className="form-control"
                                id="phoneNumber"
                                name="phoneNumber"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="customerType">Loại khách hàng</label>
                            <select
                                className="form-control"
                                id="customerType"
                                name="kindOfCustomer"
                            >
                                <option value="">Loại khách hàng</option>
                                <option value="regular">Regular</option>
                                <option value="vip">VIP</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <Field as='textarea'
                                   className="form-control"
                                   id="address"
                                   name="address"
                            ></Field>
                        </div>
                        <button type="submit" className="btn btn-primary">Thêm mới khách hàng</button>
                    </div>
                </Form>
            </Formik>
        </>
    );
};

