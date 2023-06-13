import {Field, FieldArray, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import * as service from '../service/ServiceMusic'
import {useNavigate, useParams} from "react-router-dom";

export function Update() {
    const [music,setMusic] = useState()
    const navigate = useNavigate()
    const param = useParams()
    useEffect(()=>{
        const getById = async () =>{
            const result = await service.getById(param.id)
            setMusic(result)
            console.log(result)
        }
        getById()
    },[param.id])
    if (!music){
        return null
    }
    return(
        <Formik
            initialValues={
                {
                    name: music?.name,
                    category: music?.category,
                    single: music?.single
                }
            }
            onSubmit={async (values) =>{
                await service.update(param.id,values);
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