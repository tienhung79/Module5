import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import * as serviceCategory from '../service/CategoryService'
import * as serviceProduct from '../service/ProductService'
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";

export function UpdateProduct() {
    const [productList, setProductList] = useState()
    const [categoryList, setCategoryList] = useState([])
    const param = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        getCategory()
        getById()
    }, [])
    const getById = async () => {
        setProductList(await serviceProduct.getById(param.id))
    }
    const getCategory = async () => {
        setCategoryList(await serviceCategory.getAll())
    }
    if (!productList) {
        return null
    }
    return (
        <>

            <Formik
                initialValues={
                    {
                        codeOfProduct: productList.codeOfProduct,
                        nameOfProduct: productList.nameOfProduct,
                        priceOfProduct: productList.priceOfProduct,
                        kindOfProduct: productList.kindOfProduct,
                        dateOfProduct: productList.dateOfProduct
                    }
                }
                validationSchema={yup.object(
                    {
                        codeOfProduct: yup.string().required('Yêu cầu nhập'),
                        nameOfProduct: yup.string().required('Yêu cầu nhập'),
                        priceOfProduct: yup.number().min(0, 'Giá phải lớn 0').required('Yêu cầu nhập'),
                        kindOfProduct: yup.string().required('Yêu cầu nhập'),
                        dateOfProduct: yup.string().required('Yêu cầu nhập')
                    }
                )}
                onSubmit={(values) => {
                    const update = async () => {
                        await serviceProduct.update(param.id, values)
                        navigate('/')
                    }
                    update()
                }}
            >
                <Form>
                    <div>
                        <label>Điền mã sản phẩm</label>
                        <Field type='text' name='codeOfProduct'/>
                        <ErrorMessage name='codeOfProduct' component='span' className='text-danger'/>
                    </div>
                    <div>
                        <label>Điền tên sản phẩm</label>
                        <Field type='text' name='nameOfProduct'/>
                        <ErrorMessage name='nameOfProduct' component='span' className='text-danger'/>
                    </div>
                    <div>
                        <label>Điền giá sản phẩm</label>
                        <Field type='number' name='priceOfProduct'/>
                        <ErrorMessage name='priceOfProduct' component='span' className='text-danger'/>
                    </div>
                    <div>
                        <Field as='select' name='kindOfProduct'>
                            <option value={''}>Chọn</option>
                            {categoryList.map((category) => (
                                <option value={category.id}>{category.nameOfCategory}</option>
                            ))}
                        </Field>
                    </div>
                    <div>
                        <label>Ngày sản xuất</label>
                        <Field type='date' name='dateOfProduct'/>
                        <ErrorMessage name='dateOfProduct' component='span' className='text-danger'/>
                    </div>
                    <div>
                        <button type='submit'>Chỉnh sửa</button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}