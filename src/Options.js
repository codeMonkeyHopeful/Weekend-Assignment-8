import React, { Component } from "react";
import axios from "axios";

class Options extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log("lower", this.props.users[1]);
    return (
      <select>
        {this.props.users.map((user, index) => {
          return <option value={user.id}>{user.name}</option>;
        })}
      </select>
    );
  }
}

export default Options;
