import {useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import React from "react";
import Header from "./Header";
import '../css/CreatService.css'
import * as service from '../service/ServiceRoom'

export function CreatRoom() {
    const navigate = useNavigate()
    return (
        <>
            <Header/>
            <Formik
                initialValues={
                    {
                        serviceName: '',
                        area: 0,
                        rentalCost: 0,
                        maxCapacity: 0,
                        rentalType: '',
                        serviceIncluded: '',
                    }
                }
                onSubmit={(values)=>{
                    const create = async () =>{
                        await service.creat(values)
                        navigate('/')
                    }
                    create()
                }}
            >
                <div className='container container-service'>
                    <h1>Thêm mới Room</h1>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="serviceName">Tên dịch vụ:</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="serviceName"
                                name="serviceName"
                            />
                            <ErrorMessage
                                name="serviceName"
                                component="div"
                                className="error-message"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="area">Diện tích:</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="area"
                                name="area"
                            />
                            <ErrorMessage name="area" component="div" className="error-message"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="rentalCost">Chi phí thuê</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="rentalCost"
                                name="rentalCost"
                            />
                            <ErrorMessage
                                name="rentalCost"
                                component="div"
                                className="error-message"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="maxCapacity">Số lượng người</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="maxCapacity"
                                name="maxCapacity"
                            />
                            <ErrorMessage
                                name="maxCapacity"
                                component="div"
                                className="error-message"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="serviceIncluded">Dịch vụ miễn phí đi kèm</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="serviceIncluded"
                                name="serviceIncluded"
                            />
                            <ErrorMessage
                                name="serviceIncluded"
                                component="div"
                                className="error-message"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="rentalType">Thời gian thuê</label>
                            <Field
                                as="select"
                                className="form-control"
                                id="rentalType"
                                name="rentalType"
                            >
                                <option value="">Select rental type</option>
                                <option value="year">Năm</option>
                                <option value="month">Tháng</option>
                                <option value="day">Ngày</option>
                                <option value="hour">Giờ</option>
                            </Field>
                            <ErrorMessage
                                name="rentalType"
                                component="div"
                                className="error-message"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Thêm mới
                        </button>
                    </Form>
                </div>
            </Formik>
        </>
    )
}