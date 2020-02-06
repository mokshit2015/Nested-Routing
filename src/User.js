import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Marks from './Marks';
import Info from './Info';

class User extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { params } = this.props.match;
    let students = require('./students_data.json');
    let data;
    data = students.filter(student => student.id == params.id);

    return (
      <BrowserRouter>
        <div>
          <Card style={{marginBottom: "10px"}}>
          <center><Card.Header><h1> Student Details </h1></Card.Header></center>
            <Card.Body className="card-detail">
              <center> 
              <Card.Title><h4 style={{marginTop : "10px"}}> First Name : {data[0].first_name} </h4></Card.Title>
              <h4> Last Name : {data[0].last_name} </h4>
              <ListGroup variant="flush">
                <ListGroup.Item >
                  <Link to={`/user/${params.id}/info`}><Button className="buttons" variant="primary" >Information</Button></Link>
                  <Link to={`/user/${params.id}/marks`}><Button className="buttons" variant="info">Marks</Button></Link>
                </ListGroup.Item>

              </ListGroup>
              </center>
            </Card.Body>

          </Card>





        </div>
        <Switch>
          <Route path="/user/:id/marks" component={Marks} />
          <Route path="/user/:id/info" component={Info} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default User;
