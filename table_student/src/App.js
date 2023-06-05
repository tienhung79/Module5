import logo from './logo.svg';
import './App.css';
import {students} from './newFolder/data.js';

function App() {
  return (
    <table className='container' >
      <>
      <h1 className='titleH1'>Student</h1>
      <tr>
        <td>Company</td>
        <td>contact</td>
        <td>Country</td>
      </tr>
    {students.map(student => (
      <tr>
        <td>{student.company}</td>
        <td>{student.contact}</td>
        <td>{student.country}</td>
      </tr>
    ))}
    </>
    </table>
)}

export default App;
