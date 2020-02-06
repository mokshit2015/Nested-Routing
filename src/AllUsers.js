import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import User from './User';
import { BrowserRouter,Route,Switch,Link } from 'react-router-dom';
import './App.css';


class AllUsers extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
   
    let students = require('./students_data.json');
    return   <Table  bordered hover size="md" responsive><thead>
          <tr>
            <th colSpan="4"> ALL STUDENTS</th>
          </tr>
					<tr>
						<th> First Name </th>
						<th> Last Name </th>
						<th> Email </th>
						<th> Show Details </th>
					</tr>
				</thead>
     {
       
						students.map((student) => {
							return <tbody>
								<tr key={student.id}>
									<td> {student.first_name} </td>
									<td> {student.last_name} </td>
									<td> {student.email} </td>
									<td>

                  <Link to={`/user/${student.id}`}><Button variant="outline-primary" >Details</Button></Link>
                  </td>
                 
								</tr>
							</tbody>
					
        })
      }
      <tfoot>
      </tfoot>
    </Table>
    {/* <Switch>
      <Route path="/user/:id/marks" component={Marks} />
      <Route path="/user/:id" component={User} />
    </Switch>
    </BrowserRouter> */}
    
  }
}

export default AllUsers;