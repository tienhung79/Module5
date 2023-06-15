import React, {useEffect, useState} from "react";
import {useParams,useNavigate} from "react-router-dom";
import Header from "./Header";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as service from '../service/ServiceVilla'
import {toast} from "react-toastify";
export function UpdateVilla() {
    const [villa,setVilla] = useState()
    const param = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        const getById = async () =>{
            setVilla(await service.getById(param.id))
        }
        getById()
    })
    if (!villa){
        return null
    }
    return (
        <>
            <Header/>
            <Formik
                initialValues={
                    {
                        serviceName: villa.serviceName,
                        area: villa.area,
                        rentalCost: villa.rentalCost,
                        maxCapacity: villa.maxCapacity,
                        rentalType: villa.rentalType,
                        description: villa.description,
                        areaPool: villa.areaPool,
                        numberOfFloor: villa.numberOfFloor,
                    }
                }
                onSubmit={(values) => {
                    const update =async () =>{
                        await service.update(param.id,values)
                        toast(`Chỉnh sửa ${values.serviceName} thanh cong`)
                        navigate('/')
                    }
                    update()
                }}

            >
                <div className='container container-service'>
                    <h1>Thêm mới Villa</h1>
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
                                type="number"
                                className="form-control"
                                id="area"
                                name="area"
                            />
                            <ErrorMessage name="area" component="div" className="error-message"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="rentalCost">Chi phí thuê</label>
                            <Field
                                type="number"
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
                                type="number"
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
                            <label htmlFor="description">Mô tả tiện nghi khác</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="description"
                                name="description"
                            />
                            <ErrorMessage
                                name="description"
                                component="div"
                                className="error-message"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="areaPool">Diện tích hồ bơi</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="areaPool"
                                name="areaPool"
                            />
                            <ErrorMessage
                                name="areaPool"
                                component="div"
                                className="error-message"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="numberOfFloor">Số tầng</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="numberOfFloor"
                                name="numberOfFloor"
                            />
                            <ErrorMessage
                                name="numberOfFloor"
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
                            Chỉnh sửa
                        </button>
                    </Form>
                </div>
            </Formik>
        </>
    )
}