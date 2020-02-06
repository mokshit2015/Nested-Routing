import React from 'react';
import Table from 'react-bootstrap/Table';
import './App.css';

class Info extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { params } = this.props.match;
    let students = require('./students_data.json');
    let data;
    data = students.filter(x => x.id == params.id);
    
    return (
      <div>
         <Table striped bordered hover><thead>
					<tr>
						<th> Email </th>
						<th> DOB </th>
						<th> Father Name </th>
						<th> Mother Name </th>
            <th> Gender </th>
					</tr>
        </thead>
        <tbody>
        <tr>
        <td> {data[0].email} </td>  
        <td> {data[0].DOB} </td>  
        <td> {data[0].father} </td>  
        <td> {data[0].mother} </td>
        <td> {data[0].gender} </td>  
        </tr>
        </tbody>
        <tfoot>

        </tfoot>
        </Table>
      </div>
    );
  }
}

export default Info;
