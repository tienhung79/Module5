import {Field, FieldArray, Form, Formik} from "formik";
import React from "react";
import * as service from '../service/ServiceMusic'
import {useNavigate} from "react-router-dom";

export function Creat() {
    const navigate = useNavigate()
    return(
        <Formik
        initialValues={
            {
                name: "",
                category: "",
                single: ""
            }
        }
        onSubmit={async (values) =>{
           await service.create(values);
            navigate('/')
        }}
        >
            <Form>
                <div>
                    <label>Tên</label>
                    <Field type="text" name="name"/>
                </div>
               <div>
                   <label>Thể loại</label>
                   <Field type="text" name="category"/>
               </div>
                <div>
                    <label>Ca sĩ</label>
                    <Field type="text" name="single"/>
                </div>

                <button type='submit'>Thêm mới</button>
            </Form>
        </Formik>
    )
}