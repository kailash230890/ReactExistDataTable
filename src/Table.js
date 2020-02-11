import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //state is by default an object
      students: [
        { id: 1, firstname: "Ram", lastname:"suriyavashi", age: 21, email: "ram@email.com", mobile: "9865783245" },
        { id: 2, firstname: "Kesav", lastname:"yadav", age: 19, email: "kesav@email.com", mobile: "8978675678" },
        { id: 3, firstname: "Radhay", lastname:"krishna", age: 16, email: "radhay@email.com", mobile: "7898765434" },
        { id: 4, firstname: "Virat", lastname:"kohli", age: 25, email: "virat@email.com", mobile: "9989765656" },
        { id: 5, firstname: "Kailash", lastname:"pawar", age: 28, email: "kc@email.com", mobile: "7898654534" }
      ]
    };
  }

  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, firstname, lastname, age, email, mobile } = student; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{firstname}</td>
          <td>{lastname}</td>
          <td>{age}</td>
          <td>{email}</td>
          <td>{mobile}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.students[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
  render() {
    return (
      <div>
        <h1 id="title">Existing Data Dynamic Table</h1>
        <table id="students">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table; //exporting a component make it reusable and this is the beauty of react
