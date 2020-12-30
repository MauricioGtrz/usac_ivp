import React, { Component } from "react";
import $ from "jquery";

class events extends Component {
  componentDidMount() {
    console.log($(".name").val());
  }
  render() {
    return (
      <div>
        <h1> Instagram Feed </h1>
        <input className="name" value="Mau" />

        {/* <form id="myFrorm" autoComplete="off">
        <input
          type="text"
          id="username"
          plpaceholder="Enter Username"
          required
        />
        <input type="submit" value="Search" />
      </form> */}
      </div>
    );
  }
}

export default events;
