import React, { Component } from "react";
import "font-awesome/scss/font-awesome.scss";
import { red } from "ansi-colors";

class Like extends Component {
  render() {
    const classes = "fa fa-heart" + (!this.props.liked ? "-o" : "");
    return (
      <i
        style={{ cursor: "pointer" }}
        onClick={this.props.onClick}
        className={classes}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Like;
