import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/FormMedical.css';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const FormMedical = () => {
    return (
        <>
            <Formik
                initialValues={
                    {
                        name: '',
                        identityCard: '',
                        dayOfbirth: '',
                        gender: '',
                        nationality: '',
                        company:'',
                        partment: '',
                        insuranceCard: '',
                        city: '',
                        district: '',
                        ward: '',
                        home: '',
                        email: '',
                        phone: null,
                        informationFill: '',
                        informationTick: [],
                        informationTick2: []
                    }
                }
                onSubmit={(values) => {
                    console.log(values)
                    toast(`Tao ${values.name} thanh cong`)
                }
                }
                validationSchema={Yup.object(
                    {
                        name: Yup.string().required('Vui lòng nhập'),
                        email: Yup.string().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email address').required(' Vui lòng nhập'),
                        phone: Yup.number('Phai nhap so').integer().required('Vui long nhap'),
                        identityCard: Yup.string().required('Vui lòng nhập'),
                        nationality: Yup.string().required('Vui lòng nhập'),
                        city: Yup.string().required('Vui lòng nhập'),
                        district: Yup.string().required('Vui lòng nhập'),
                        ward: Yup.string().required('Vui lòng nhập'),
                        home: Yup.string().required('Vui lòng nhập'),
                        dayOfbirth: Yup.date().required('Vui lòng nhập').min(1900,'Nhập năm sinh phải lớn hơn 1900')
                    }
                )}
            >

                <div className="containerForm">
                    <h1 style={{textAlign: "center"}}>Tờ khai y tế</h1>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="fullName">Họ tên</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="fullName"
                                name="name"
                            />
                            <ErrorMessage name='name' component='span' className='text-danger'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="identityCard">Số hộ chiếu/CMND</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="identityCard"
                                name="identityCard"
                            />
                            <ErrorMessage name='identityCard' component='span' className='text-danger'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="dayOfbirth">Năm sinh</label>
                            <Field
                                type="date"
                                className="form-control"
                                id="dayOfbirth"
                                name="dayOfbirth"
                            />
                            <ErrorMessage name='dayOfbirth' component='span' className='text-danger'/>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className="form-check-input"
                                type="radio"
                                value="Nam"
                                name='gender'
                            />
                            <span className="form-check-label">
                                Nam
                            </span>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className="form-check-input"
                                type="radio"
                                value="Nữ"
                                name='gender'
                            />
                            <span className="form-check-label">
                                Nữ
                            </span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="nationality">Quốc tịch</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="nationality"
                                name="nationality"
                            />
                            <ErrorMessage name='nationality' component='span' className='text-danger'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="company">Công ty làm việc</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="company"
                                name="company"
                            />
                            <ErrorMessage name='company' component='span' className='text-danger'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="partment">Bộ phận làm việc</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="partment"
                                name="partment"
                            />
                            <ErrorMessage name='partment' component='span' className='text-danger'/>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label" htmlFor='insuranceCard'>
                                <p>Có thẻ bảo hiểm y tế</p>
                            </label>
                            <Field
                                id='insuranceCard'
                                className="form-check-input"
                                type="radio"
                                value="Có"
                                name='insuranceCard'
                            />
                        </div>
                        <h2 style={{textAlign: "center"}}>Địa chỉ liên lạc tại Việt nam</h2>
                        <div className="form-group">
                            <label htmlFor="city">Tỉnh thành</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="city"
                                name="city"
                            />
                            <ErrorMessage name='city' component='span' className='text-danger'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="district: ">Quận/Huyện</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="district"
                                name="district"
                            />
                            <ErrorMessage name='district' component='span' className='text-danger'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="ward">Phường/Xã</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="ward"
                                name="ward"
                            />
                            <ErrorMessage name='ward' component='span' className='text-danger'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="home">Số nhà, phố, tổ dân phố/thôn/đội</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="home"
                                name="home"
                            />
                            <ErrorMessage name='home' component='span' className='text-danger'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <Field
                                type="number"
                                className="form-control"
                                id="phone"
                                name="phone"
                            />
                            <ErrorMessage name='phone' component='span' className='text-danger'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field
                                className="form-control"
                                id="email"
                                name="email"
                            />
                            <ErrorMessage name='email' component='span' className='text-danger'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="informationFill">Trong vòng 14 ngày qua, anh/chị có đến quốc gia/vùng lãnh
                                thổ nào (có thể đi qua nhiều quốc gia) </label>
                            <Field as='textarea'
                                   type="text"
                                   className="form-control"
                                   id="informationFill"
                                   name="informationFill"
                            />
                            <ErrorMessage name='identityCard' component='span' className='text-danger'/>
                        </div>
                        <div className='form-group'>
                            <label>Trong vòng 14 ngày qua, anh/chị có thấy xuất hiện dấu hiệu
                                nào sau đây không?</label>
                            <div className="form-check">
                                <Field
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Sốt"
                                    name='informationTick'
                                />
                                <span className="form-check-label">
                                    <p >Sốt</p>
                                </span>
                            </div>
                            <div className="form-check">
                                <Field
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Ho"
                                    name='informationTick'
                                />
                                <span className="form-check-label">
                                    <p>Ho</p>
                                </span>
                            </div>
                            <div className="form-check">
                                <Field
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Khó thở"
                                    name='informationTick'
                                />
                                <span className="form-check-label">
                                    <p>Khó thở</p>
                                </span>
                            </div>
                            <div className="form-check">
                                <Field
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Viêm phổi"
                                    name='informationTick'
                                />
                                <span className="form-check-label">
                                    <p>Viêm phổi</p>
                                </span>
                            </div>
                            <div className="form-check">
                                <Field
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Đau họng"
                                    name='informationTick'
                                />
                                <span className="form-check-label">
                                    <p>Đau họng</p>
                                </span>
                            </div>
                            <div className="form-check">
                                <Field
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Mệt mỏi"
                                    name='informationTick'
                                />
                                <span className="form-check-label">
                                    <p>Mệt mỏi</p>
                                </span>
                            </div>
                        </div>
                        <div className='form-group'>
                            <label>Trong vòng 14 ngày qua, anh/chị có tiếp xúc với?</label>
                            <div className="form-check">
                                <Field
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Người bệnh hoặc nghi ngờ mắc bệnh covid 19"
                                    name='informationTick2'
                                />
                                <span className="form-check-label">
                                    <p>Người bệnh hoặc nghi ngờ mắc bệnh covid 19</p>
                                </span>
                            </div>
                            <div className="form-check">
                                <Field
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Người từ nước có bệnh covid 19"
                                    name='informationTick2'
                                />
                                <span className="form-check-label">
                                    <p>Người từ nước có bệnh covid 19</p>
                                </span>
                            </div>
                            <div className="form-check">
                                <Field
                                    className="form-check-input"
                                    type="checkbox"
                                    value="Người có biểu hiện (sốt, ho, khó thở, viêm phổi)"
                                    name='informationTick2'
                                />
                                <span className="form-check-label">
                                    <p>Người có biểu hiện (sốt, ho, khó thở, viêm phổi</p>
                                </span>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Khai báo</button>
                    </Form>
                </div>
            </Formik>
        </>
    )
};

