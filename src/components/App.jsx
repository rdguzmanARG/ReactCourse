import React, { Component } from "react";
import "./App.scss";
class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
export default App;
