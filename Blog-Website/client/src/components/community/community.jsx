import "./styles.css";
import axios from "axios";
import Card from "./card";
import React, { Component } from "react";
import ReactLoading from "react-loading";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isloading: true
    };
  }

  async componentDidMount() {
    await axios.get(`https://reqres.in/api/users?page=1`).then((res) => {
      const users = res;
      this.setState({ users, isloading: false });
    });
  }

  render() {
    let res = this.state.users;
    let { isloading } = this.state;
    return (
      <>
        {isloading ? (
          <ReactLoading type={"bars"} color="#021155" />
        ) : (
          <div className="cards">
            {res?.data?.data?.map((x) => {
              return (
                <Card
                  img={x.avatar}
                  title={x.email}
                  author={x.first_name + " " + x.last_name}
                />
              );
            })}
          </div>
        )}
      </>
    );
  }

}

