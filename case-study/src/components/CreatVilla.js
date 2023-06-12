import {useNavigate} from "react-router-dom";
import {ErrorMessage, Form, Formik} from "formik";
import * as Yup from 'yup';
import React from "react";

export function creatVilla() {
    const navigate = useNavigate()
    return (
        <>
        <Formik
            initialValues={
                {
                    serviceName: '',
                    area: '',
                    rentalCost: '',
                    maxCapacity: '',
                    rentalType: '',
                }
            }

        >
            <div className="form-group">
                <Form>
                    <label htmlFor="serviceName">Service Name:</label>
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
                <label htmlFor="area">Area (in square meters):</label>
                <Field
                    type="text"
                    className="form-control"
                    id="area"
                    name="area"
                />
                <ErrorMessage name="area" component="div" className="error-message"/>
            </div>
            <div className="form-group">
                <label htmlFor="rentalCost">Rental Cost:</label>
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
                <label htmlFor="maxCapacity">Max Capacity:</label>
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
                <label htmlFor="rentalType">Rental Type:</label>
                <Field
                    as="select"
                    className="form-control"
                    id="rentalType"
                    name="rentalType"
                >
                    <option value="">Select rental type</option>
                    <option value="year">Year</option>
                    <option value="month">Month</option>
                    <option value="day">Day</option>
                    <option value="hour">Hour</option>
                </Field>
                <ErrorMessage
                    name="rentalType"
                    component="div"
                    className="error-message"
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Add Service
            </button>
        </Form>

        </div>
</Formik>
</>
)
}