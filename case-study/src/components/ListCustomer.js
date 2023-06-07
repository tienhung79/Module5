import React from 'react';


export const ListCustomer = () => {
    return (
        <div>
            <h1>Customers List</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Ngô Tiến Hưng</td>
                    <td>Đà Nẵng</td>
                    {/*<td>*/}
                    {/*    <button onClick={() => handleEdit(customer.id)}>Edit</button>*/}
                    {/*    <button onClick={() => handleDelete(customer.id)}>Delete</button>*/}
                    {/*</td>*/}
                </tr>
                </tbody>
            </table>
            {/*<div>*/}
            {/*    {Array.from({ length: Math.ceil(customersData.length / customersPerPage) }, (_, i) => (*/}
            {/*        <button key={i} onClick={() => paginate(i + 1)}>{i + 1}</button>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>
    );
};
