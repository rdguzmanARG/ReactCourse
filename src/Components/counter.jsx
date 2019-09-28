import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>{" "}
          <button
            onClick={() => this.props.onDecrement(counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={counter.value === 0}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(counter)}
            className="btn btn-danger btn-sm"
          >
            X
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
