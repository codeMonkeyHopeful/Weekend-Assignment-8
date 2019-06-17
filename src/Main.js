import React, { Component } from "react";
import axios from "axios";
class Main extends Component {
  constructor() {
    super();
    this.state = { users: [] };
    this.loadData = this.loadData.bind(this);
  }
  componentDidMount() {
    this.loadData();
  }

  loadData() {
    axios
      .get("/api/users")
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(e => {
        console.error(e);
      });
  }
  render() {
    return <div>{/* users */}</div>;
  }
}

export default Main;
