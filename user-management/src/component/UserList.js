import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getAllUser} from "../redux/action/User";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";

export function UserList() {
    const users = useSelector(state => state.users)
    const dispatch =  useDispatch()

    useEffect(()=>{
        dispatch(getAllUser())
    },[])
    return (
        <>
            <div className="container">
                <h1>User List</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>WebSite</th>
                    </tr>
                    </thead>
                    <tbody>
                    { users.map((user,index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}