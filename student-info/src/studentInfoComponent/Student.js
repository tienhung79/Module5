import {Component} from "react"
import '../css/layout.css'
export class Student extends Component{
    constructor(){
        super();
        this.state = {
            studentList:[
                {
                    id:1,
                    name: "Nguyen Van A",
                    age: 30,
                    add: "Ha Noi"
                },
                {
                    id:2,
                    name: "Nguyen Van B",
                    age: 28,
                    add: "Da Nang"
                },
                {
                    id:3,
                    name: "Nguyen Van C",
                    age: 29,
                    add: "Quang Tri"
                }
            ]
        }
    }
    render(){
        return(
            <table>
            <>
            <h1>List Student</h1>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Age</td>
                <td>Add</td>
            </tr>
            {
                this.state.StudentList.map((student) => (
                        <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.add}</td>
                        </tr>
                ))
            }
            </>
            </table>
        )
    }
}