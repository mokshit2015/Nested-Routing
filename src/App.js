import React from 'react';
import { Redirect } from 'react-router-dom';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
     <Redirect to={"/user"} />
    );  
  }
}

export default App;
