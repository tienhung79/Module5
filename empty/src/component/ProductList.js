import React, {useEffect, useState} from "react";
import * as serviceProduct from "../service/ProductService"
import * as serviceCategory from "../service/CategoryService"
import {NavLink} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import {Field, Form, Formik} from "formik";
import '../css/text.css'
import 'react-toastify/dist/ReactToastify.css'

export function ProductList() {
    const [productList, setProductList] = useState([])
    const [categoryList, setCategoryList] = useState([])
    const [idDelete,setIdDelete] = useState()
    useEffect(() => {
        displayProductList()
        displayCategoryList()
    }, [])
    const displayProductList = async () => {
        setProductList(await serviceProduct.getAll())
    }
    const displayCategoryList = async () => {
        setCategoryList(await serviceCategory.getAll())
    }
    function handleDelete(id) {
        setIdDelete(id)
    }
    const handleComfirm = async (id)=>{
        await serviceProduct.deleteProduct(id)
        toast('Xoa thanh cong')
        displayProductList()
    }
    return (
        <>
            <div className='container'>
                <h1>Danh sách sản phẩm</h1>
                {/*<Formik*/}
                {/*    initialValues={{*/}
                {/*        nameOfProduct: "",*/}
                {/*        categoryOfProduct: ""*/}
                {/*    }}*/}
                {/*    onSubmit={(values) => {*/}
                {/*        const findProduct = async () => {*/}
                {/*            const res = await serviceProduct.findProduct(values.categoryOfProduct, values.nameOfProduct)*/}
                {/*            setProductList(res)*/}
                {/*        }*/}
                {/*        findProduct()*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <Form>*/}
                {/*        <div className="form-group row">*/}
                {/*            <div className='col-2'>*/}
                {/*                <Field type='text' name='nameOfProduct'/>*/}
                {/*            </div>*/}
                {/*            <div className='col-3'>*/}
                {/*                <Field as='select' className="form-control" name="categoryOfProduct" required>*/}
                {/*                    <option>Chọn</option>*/}
                {/*                    {*/}
                {/*                        categoryList.map(category => (*/}
                {/*                            <option value={category.id}>{category.nameOfCategory}</option>*/}
                {/*                        ))*/}
                {/*                    }*/}
                {/*                </Field>*/}
                {/*            </div>*/}
                {/*            <div className='col-3'>*/}
                {/*                <button type='submit'>Tìm kiếm</button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </Form>*/}
                {/*</Formik>*/}
                <NavLink to='/create'>Thêm mới</NavLink>
                <table className='container'>
                    <thead>
                    <tr>
                        <td>STT</td>
                        <td>Mã sản phẩm</td>
                        <td>Tên sản phẩm</td>
                        <td>Thể loại</td>
                        <td>Số lượng</td>
                        <td>Giá</td>
                        <td>Ngày nhập</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        productList?.map((product, index) => (
                            <tr key={index}>
                                <td>{product.id}</td>
                                <td>{product.codeOfProduct}</td>
                                <td>{product.nameOfProduct}</td>
                                <td>{categoryList?.find(category => category.id === product.categoryProduct.id)?.nameOfCategory}</td>
                                <td>{product.quantityOfProduct}</td>
                                <td>{product.priceOfProduct}</td>
                                <td>{product.dateOfProduct}</td>
                                <td> <button onClick={()=>handleDelete(product.id)} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Xóa
                                </button></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>handleComfirm(idDelete)}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}