import React, {useEffect, useState} from "react";
import * as service from '../service/ServiceMusic'
import {NavLink} from "react-router-dom";

export function Music() {
    const [musicList, setMusicList] = useState([])
    useEffect(() => {
        const disPlay = async () => {
            const result = await service.getAll()
            setMusicList(result)
        }
        disPlay()
    }, [])
    return (
        <>
            <NavLink to='/create'>Thêm mới</NavLink>
            <table>
                <thead>
                <tr>
                    <td>#</td>
                    <td>Tên</td>
                    <td>Thể loại</td>
                    <td>Tác giả</td>
                </tr>
                </thead>
                <tbody>
                {
                    musicList.map((music,index)=>(
                        <tr key={index}>
                            <td>{music.id}</td>
                            <td>{music.name}</td>
                            <td>{music.category}</td>
                            <td>{music.single}</td>
                            <td><NavLink to={'/update/'+music.id}>Update</NavLink></td>
                            <td><button></button></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}