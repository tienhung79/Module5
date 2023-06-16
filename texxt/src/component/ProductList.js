import React, {useEffect, useState} from "react";
import * as serviceProduct from '../service/ProductService'
import * as serviceCategory from '../service/CategoryService'
import {NavLink} from "react-router-dom";
import {Field, Form, Formik} from "formik";

export function ProductList() {
    const [productList, setProductList] = useState([])
    const [categoryList, setCategoryList] = useState([])
    const [idDelete, setIdDelete] = useState(0)
    const [nameDelete, setNameDelete] = useState("")

    useEffect(() => {
        disPlay()
        disPlayCategory()
    }, [])
    const disPlay = async () => {
        setProductList(await serviceProduct.getAll())
    }
    const disPlayCategory = async () => {
        setCategoryList(await serviceCategory.getAll())
    }

    const handleIDName = async (id, nameOfProduct) => {
        await setNameDelete(nameOfProduct)
        await setIdDelete(id)
    }
    const handleDelete = async (id) => {
        await serviceProduct.deleteProduct(id)
        disPlay()
    }

    return (
        <>
            <div className='container'>
                <h1>Danh sách sản phẩm</h1>
                <div>
                <Formik
                    initialValues={
                        {
                            priceOfProduct:0
                        }
                    }
                    onSubmit={(values) =>{
                      const searchByPrice = async () => {
                          setProductList(await serviceProduct.findByPrice(values.priceOfProduct))
                        }
                        searchByPrice()
                    }}
                >
                    <Form>
                        <label>Tìm theo giá</label>
                        <Field type='number' name='priceOfProduct'></Field>

                            <button type='submit'>Tìm kiếm</button>
                    </Form>
                </Formik>
                </div>
                <Formik
                    initialValues={
                        {
                            nameOfProduct: "",
                            kindOfProduct: "1"
                        }
                    }
                    onSubmit={(values => {
                            console.log("value", values)
                            const searchProduct = async () => {
                                const res = await serviceProduct.findByName(values.nameOfProduct, values.kindOfProduct)
                                setProductList(res)
                            }
                            searchProduct()
                        }
                    )}
                >
                    <Form>
                        <Field type="text" name="nameOfProduct"/>
                        <Field as="select" name="kindOfProduct">
                            {
                                categoryList?.map((value =>
                                        <option key={value} value={value.id}>{value.nameOfCategory}</option>
                                ))
                            }
                        </Field>
                        <button type="submit">Tìm</button>
                    </Form>
                </Formik>
                <NavLink to='/create'>Thêm mới</NavLink>
                <table className='table '>
                    <thead>
                    <tr>
                        <td>#</td>
                        <td>Mã sản phẩm</td>
                        <td>Tên sản phẩm</td>
                        <td>Giá sản phẩm</td>
                        <td>Loại sản phẩm</td>
                        <td>Ngày sản xuất</td>
                    </tr>
                    </thead>
                    <tbody>
                    {productList?.map((product) =>
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.codeOfProduct}</td>
                            <td>{product.nameOfProduct}</td>
                            <td>{product.priceOfProduct}</td>
                            <td>{
                                categoryList.find(category => category.id === product.kindOfProduct)?.nameOfCategory
                            }</td>
                            <td>{product.dateOfProduct}</td>
                            <td><NavLink to={"/update/" + product.id}>Chỉnh sửa</NavLink></td>
                            <td>
                                <button onClick={() => handleIDName(product.id, product.nameOfProduct)} type="button"
                                        className="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">
                                    Xóa
                                </button>
                            </td>
                        </tr>)

                    }

                    </tbody>

                </table>
            </div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Bạn có muốn xóa {nameDelete}
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                                    onClick={() => handleDelete(idDelete)}>Xóa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
