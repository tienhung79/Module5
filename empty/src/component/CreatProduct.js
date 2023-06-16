import React, {useEffect, useState} from "react";
import * as serviceProduct from "../service/ProductService"
import * as serviceCategory from "../service/CategoryService"
import {ErrorMessage, Field, Form, Formik} from "formik";
import '../css/text.css'
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import * as yup from 'yup'

export function CreatProduct() {
    const [categoryList, setCategoryList] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        displayCategoryList()
    }, [])
    const displayCategoryList = async () => {
        setCategoryList(await serviceCategory.getAll())
    }
    if (!categoryList) {
        return null
    }
    return (
        <>
            <Formik
                initialValues={{
                    codeOfProduct: "",
                    nameOfProduct: "",
                    description: "",
                    categoryOfProduct: "",
                    priceOfProduct: 0,
                    quantityOfProduct: 0,
                    dateOfProduct: ""
                }}
                onSubmit={(values) => {
                    const createProduct = async () => {
                        await serviceProduct.create(values)
                        toast(`Thêm mới ${values.nameOfProduct} thành công`)
                        navigate('/')
                    }
                    createProduct()
                }}

            >
                <div className='container-creat'>
                    <Form>

                        <h2>Add New Item</h2>
                        <div className="form-group">
                            <label>Mã sản phẩm</label>
                            <Field type="text" className="form-control" id="name" name="codeOfProduct"/>
                            <div style={{color: "red"}}><ErrorMessage name='codeOfProduct'/></div>

                        </div>
                        <div className="form-group">
                            <label>Tên sản phẩm</label>
                            <Field type="text" className="form-control" name="nameOfProduct"/>
                            <div style={{color: "red"}}><ErrorMessage name='nameOfProduct'/></div>
                        </div>

                        <div className="form-group">
                            <label>Thể loại</label>
                            <Field as='select' className="form-control" name="categoryOfProduct" required>
                                {
                                    categoryList.map(category => (
                                        <option value={category.id}>{category.nameOfCategory}</option>
                                    ))
                                }
                            </Field>
                        </div>
                        <div className="form-group">
                            <label>Giá sản phẩm</label>
                            <Field type="number" className="form-control" name="priceOfProduct"/>
                            <div style={{color: "red"}}><ErrorMessage name='priceOfProduct'/></div>
                        </div>
                        <div className="form-group">
                            <label>Số lượng</label>
                            <Field type="number" className="form-control" name="quantityOfProduct"/>
                            <div style={{color: "red"}}><ErrorMessage name='quantityOfProduct'/></div>
                        </div>
                        <div className="form-group">
                            <label>Ngày nhập</label>
                            <Field type="date" className="form-control" name="dateOfProduct"/>
                            <div style={{color: "red"}}><ErrorMessage name='dateOfProduct'/></div>
                        </div>
                        <div className="form-group">
                            <label>Mô tả sản phẩm</label>
                            <Field as='textarea' type="text" className="form-control" name="description"/>
                            <div style={{color: "red"}}><ErrorMessage name='description'/></div>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary">Thêm mới</button>
                        </div>
                    </Form>
                </div>

            </Formik>
        </>
    )
}