import React, { Component } from "react";
import axios from "axios";
import Options from "./Options";
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
    return (
      <div>
        {this.state.users.map(user => {
          return (
            <div>
              {user.name}
              <div>{/*insert manager compoennt here*/}</div>
              <div>
                <Options key={user.id} users={this.state.users} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Main;
