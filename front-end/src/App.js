import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      students: []
    }
  }


  componentDidMount(){
    axios.get('http://localhost:3000/getStudents')
      .then((response)=>{
        console.log(response);
        this.setState({
          students: response.data
        })
      });
  }


  handleSubmit(event){
    event.preventDefault();
    const studentName = document.getElementById("new-student").value;


    axios({
      method: "POST",
      url: "http://localhost:3000/addStudent",
      data: {
        studentName: studentName
      }
    }).then((data)=>{
      console.log(data);
    })
  }


  render() {
    var studentsArray = this.state.students.map((student,i)=>{
      return(<li key={i}>{student.name} San</li>)
    })
    return (
      <div className="App">
        <h1>Frankie says REACT</h1>
        
        <form onSubmit={this.handleSubmit}>
        <input type="text" id="new-student" placeholder="New Student" />
        <button type="submit" >Add Student</button>
        </form>
        <br />
        
        {studentsArray} 
      </div>
    );
  }
}

export default App;
