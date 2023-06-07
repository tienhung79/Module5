import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/CreateNewCustomer.css'; // File CSS tùy chỉnh

export const CreateNewCustomer = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        birthDate: '',
        gender: '',
        idCardNumber: '',
        phoneNumber: '',
        email: '',
        customerType: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý gửi dữ liệu form
        console.log(formData);
        // Reset form sau khi gửi
        setFormData({
            fullName: '',
            birthDate: '',
            gender: '',
            idCardNumber: '',
            phoneNumber: '',
            email: '',
            customerType: '',
            address: '',
        });
    };

    return (
        <div className="containerForm">
            <h1 style={{textAlign: "center"}}>Thêm mới khách hàng</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullName">Họ và tên</label>
                    <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="birthDate">Ngày tháng năm sinh</label>
                    <input
                        type="date"
                        className="form-control"
                        id="birthDate"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Giới tính</label>
                    <select
                        className="form-control"
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="idCardNumber">Chứng minh nhân dân</label>
                    <input
                        type="text"
                        className="form-control"
                        id="idCardNumber"
                        name="idCardNumber"
                        value={formData.idCardNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Số điện thoại</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="customerType">Loại khách hàng</label>
                    <select
                        className="form-control"
                        id="customerType"
                        name="customerType"
                        value={formData.customerType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Customer Type</option>
                        <option value="regular">Regular</option>
                        <option value="vip">VIP</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <textarea
                        className="form-control"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Add Customer</button>
            </form>
        </div>
    );
};

