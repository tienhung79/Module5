import {Component} from "react";

export class Work extends Component {
    constructor() {
        super();
        this.state = {
            studentName: '',
            studentList: ["Nguyen Van A", "Nguyen Van B"]
        }
    }

    handleInputName(value) {
        this.setState({
            studentName: value
        })
    }

    handleAdd() {
        let newName = this.state.studentName
        this.setState({
            studentName: '',
            studentList: [newName, ...this.state.studentList]
        })
    }

    render() {
        return (
            <>
                <div>
                <h1>Tudo App</h1>
                <div>
                    <input
                        value={this.state.studentName}
                        onChange={(event) => this.handleInputName(event.target.value)}
                    />
                    <button onClick={() => this.handleAdd()}>Add</button>
                </div>

                <ul>
                    {
                        this.state.studentList.map((student) => (
                                <li>{student}</li>
                        ))
                    }
                </ul>
                </div>
            </>
        );
    }
}