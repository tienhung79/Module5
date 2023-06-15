import React, {useEffect, useState} from "react";
import {useParams,useNavigate} from "react-router-dom";
import * as service from '../service/ServiceRoom'
import Header from "./Header";
import {ErrorMessage, Field, Form, Formik} from "formik";

export function UpdateRoom() {
    const [room, setRoom] = useState()
    const param = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        const getById = async () =>{
           setRoom( await service.getById(param.id))
        }
        getById()
    },[param.id])
    if (!room){
        return null
    }
    return (
        <>
            <Header/>
            <Formik
                initialValues={
                    {
                        serviceName: room.serviceName,
                        area: room.area,
                        rentalCost: room.rentalCost,
                        maxCapacity: room.maxCapacity,
                        rentalType: room.rentalType,
                        serviceIncluded: room.serviceIncluded,
                    }
                }
               onSubmit={(values) => {
                   const update = async () =>{
                       await service.update(param.id,values)
                       navigate('/')
                   }
                   update()
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
                           Chỉnh sửa
                        </button>
                    </Form>
                </div>
            </Formik>
        </>
    )
}
