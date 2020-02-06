import React from 'react';
import Table from 'react-bootstrap/Table';
import './App.css';

class Marks extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { params } = this.props.match;
    let students = require('./students_data.json');
    let data;
    data = students.filter(student => student.id == params.id);
    
    return (
      <div>
        <Table striped bordered hover><thead>
					<tr>
						<th> Maths </th>
						<th> Science </th>
						<th> History </th>
						<th> English </th>
					</tr>
        </thead>
        <tbody>
        <tr>
        <td> {data[0].maths} </td>  
        <td> {data[0].science} </td>  
        <td> {data[0].history} </td>  
        <td> {data[0].english} </td>  
        </tr>
        </tbody>
        <tfoot>

        </tfoot>
        </Table>
      </div>
    );
  }
}

export default Marks;
