import React, {useEffect, useState} from "react";
import axios from "axios";
import {Field, FieldArray, Form, Formik} from "formik";
import * as service from '../service/Service'
import {useNavigate} from "react-router-dom";


export function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
            // axios.get('http://localhost:8080/todoList')
            //     .then((res) => {
            //         setTodoList(res.data)
            //         alert('Todolist')
            //     })
            //     .catch((error) => {
            //         console.log('Bị lỗi')
            //     })
            const fetchApi = async () => {
                try {
                    const result = await service.display()
                    setTodoList(result)
                } catch (error) {
                    console.log('error')
                }
            }
            fetchApi();
        }, []
    )


    return (
        <>
            <h1>Todo List</h1>
            <Formik
                initialValues={
                    {
                        valueTodo:""
                    }
                }
                onSubmit={(values) => {
                    const creat = async () => {
                        await service.save(values)
                        setTodoList(await service.display())
                    }
                    creat();

                }
                }
            >
                <Form>
                    <Field name='valueTodo' type='text'/>
                    <button type='submit'>Add</button>
                </Form>
            </Formik>
            <ul>
                {
                    todoList.map((todo) => (
                        <li>{todo.valueTodo}</li>
                    ))
                }
            </ul>
        </>
    )
}