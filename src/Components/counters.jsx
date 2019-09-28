import React, { Component } from "react";
import Counter from "./counter.jsx";

class Counters extends Component {
  render() {
    const {
      counters,
      onReset,
      onIncrement,
      onDecrement,
      onDelete
    } = this.props;

    return (
      <div className="container">
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(c => (
          <Counter
            key={c.id}
            counter={c}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
