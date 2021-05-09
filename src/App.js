import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      information: {
        name: "Khoa vip pro",
        age: 21,
        job: "Student",
        company: "QWE",
      },
      undone: ["Item1", "Item2", "Item3", "Item4", "Item5"],
      done: [],
    };
  }

  changeName1 = () => {
    //cách 1
    // const newInformation = Object.assign(this.state.information, {
    //   name: "Khoa ngu",
    // });

    //cách 2 spread operator
    const newInformation = {
      ...this.state.information,
      name: "Khoa ngu",
    };

    this.setState({
      information: newInformation,
    });
  };

  changeListFromUnToDone = async (index) => {
    const removeItem = this.state.undone.splice(index, 1);
    this.state.done.push(removeItem);
    const newDone = this.state.done;
    const newUndone = this.state.undone;
    this.setState({
      undone: newUndone,
      done: newDone,
    });
  };
  changeListFromDoneToUn = (index) => {
    const removeItem = this.state.done.splice(index, 1);
    this.state.undone.push(removeItem);
    const newDone = this.state.done;
    const newUndone = this.state.undone;
    this.setState({
      undone: newUndone,
      done: newDone,
    });
  };
  changeAge = () => {
    const newInformation = { ...this.state.information, age: 99 };
    this.setState({
      information: newInformation,
    });
  };
  changName = () => {
    // this.setState({
    //   state1: value,
    //   state2: value,
    // });
    this.setState({
      information: {
        name: "Khoa dep trai",
        age: "12",
        job: "ABC",
        company: "HOHO",
      },
    });
  };

  renderUndoneList = () => {
    return this.state.undone.map((ele, index) => {
      return (
        <li
          id={index}
          onClick={() => {
            this.changeListFromUnToDone(index);
          }}
        >
          {ele}
        </li>
      );
    });
  };
  renderDoneList = () => {
    return this.state.done.map((ele, index) => {
      return (
        <li
          onClick={() => {
            this.changeListFromDoneToUn(index);
          }}
        >
          {ele}
        </li>
      );
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="list">
            <div className="undoneList">
              <h1>Todo</h1>
              <ul>{this.renderUndoneList()}</ul>
            </div>
            <div className="doneList">
              <h1>Complete</h1>
              <ul>{this.renderDoneList()}</ul>
            </div>
          </div>

          {/* <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.changName}>Change Information</button>
          <p onClick={this.changeName1}>Name: {this.state.information.name}</p>
          <p onClick={this.changeAge}>Age: {this.state.information.age}</p>
          <p>Job: {this.state.information.job}</p>
          <p>Company: {this.state.information.company}</p> */}
        </header>
      </div>
    );
  }
}

export default App;
