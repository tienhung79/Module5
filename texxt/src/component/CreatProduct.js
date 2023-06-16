import React, {useEffect, useState} from "react";
import * as serviceCategory from '../service/CategoryService'
import * as serviceProduct from '../service/ProductService'
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router";
import * as yup from 'yup'

export function CreatProduct() {
    const [categoryList, setCategoryList] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const disPlaycategory = async () => {
            setCategoryList(await serviceCategory.getAll())
        }
        disPlaycategory()
    },[])
    if (!categoryList){
        return null
    }
    return (
        <>
            <Formik
                initialValues={
                    {
                        codeOfProduct: "",
                        nameOfProduct: "",
                        priceOfProduct: 0,
                        kindOfProduct: null,
                        dateOfProduct: ""
                    }
                }
                validationSchema={yup.object(
                    {
                        codeOfProduct: yup.string().required('Yêu cầu nhập'),
                        nameOfProduct: yup.string().required('Yêu cầu nhập'),
                        priceOfProduct: yup.number().min(1,'Giá phải lớn 0').required('Yêu cầu nhập'),
                        kindOfProduct: yup.string().required('Yêu cầu nhập'),
                        dateOfProduct: yup.string().required('Yêu cầu nhập')
                    }
                )}
                onSubmit={(values)=>{
                    const create = async() =>{
                        await serviceProduct.create(values)
                        navigate('/')
                    }
                    create()
                }}
            >
                <Form>
                    <div>
                        <label>Điền mã sản phẩm</label>
                        <Field type='text' name='codeOfProduct'/>
                        <ErrorMessage name = 'codeOfProduct' component ='span'  className = 'text-danger' />
                    </div>
                    <div>
                    <label>Điền tên sản phẩm</label>
                    <Field type='text' name='nameOfProduct'/>
                        <ErrorMessage name = 'nameOfProduct' component ='span'  className = 'text-danger' />
                    </div>
                    <div>
                        <label>Điền giá sản phẩm</label>
                        <Field type='number' name='priceOfProduct'/>
                        <ErrorMessage name = 'priceOfProduct' component ='span'  className = 'text-danger' />
                    </div>
                    <div>
                        <Field as = 'select' name='kindOfProduct'>
                            <option value={''}>Chọn</option>
                            {categoryList.map((category) =>(
                                <option value={category.id}>{category.nameOfCategory}</option>
                            ))}
                        </Field>
                    </div>
                    <div>
                        <label>Ngày sản xuất</label>
                        <Field type='date' name='dateOfProduct'/>
                        <ErrorMessage name = 'dateOfProduct' component ='span'  className = 'text-danger' />
                    </div>
                    <div>
                        <button type='submit'>Thêm mới</button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}