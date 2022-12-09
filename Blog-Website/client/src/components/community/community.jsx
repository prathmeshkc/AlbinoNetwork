import "./styles.css";
import axios from "axios";
import Card from "./card";
import React, { Component } from "react";
import ReactLoading from "react-loading";

export const hatsArr = [
  'https://as2.ftcdn.net/v2/jpg/02/86/42/45/1000_F_286424536_PyhvpbGZNKlilMWagFULHxqI6EgUhkwx.jpg',
  'https://as1.ftcdn.net/v2/jpg/02/05/29/46/1000_F_205294612_9n6laDETr97d5gX0eJske8dbJ0GvCZfC.jpg',
  'https://as1.ftcdn.net/v2/jpg/04/25/75/40/1000_F_425754085_qwgy6eEbO9x3MWA519EPxhP7sJLY9qMp.jpg',
  'https://as2.ftcdn.net/v2/jpg/03/14/96/99/1000_F_314969920_56wVn0EHb36pjjJHStuHFqO3IjndaG9V.jpg',
  'https://as2.ftcdn.net/v2/jpg/04/21/81/05/1000_F_421810572_bhUdRet5NKmx0QAbwaxdp4Fjp9bMP9hq.jpg',
  'https://as2.ftcdn.net/v2/jpg/03/89/93/97/1000_F_389939797_qDkb5LYuyDPgl2bdchZG1MZbdpIsaJ2G.jpg'
];

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
    var i=0;
    let res = this.state.users;
    let { isloading } = this.state;
    return (
      <>
        {isloading ? (
          <ReactLoading type={"bars"} color="#021155" />
        ) : (

          <><div class="three">
          <h1>Our Community Members</h1>
        </div>
          <div className="cards">
            {res?.data?.data?.map((x,i) => {
              return (
                <Card
                  img={hatsArr[i]}
                  title={x.email}
                  author={x.first_name + " " + x.last_name}
                />
              );
            }
            
            )}
          </div></>


        )}
      </>
    );
  
  }

}

