import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SearchField from "./SearchField";
import axios from "axios";
import octocatImg from "../icons/octocat.png";

class Home extends Component {
  // getRandomUser = () => {
  //   // randoom number between 1 - 70000000
  //   const rndInt = Math.floor(Math.random() * 500000) + 1;
  //   var randomUser;
  //   axios
  //     .get(`https://api.github.com/users?since=${rndInt}&per_page=1`)
  //     .then((res) => {
  //       randomUser = res.data[0].login;
  //       if (randomUser) this.props.history.push(`users/${randomUser}`);
  //     })
  //     .catch((err) => console.log(err));
  // };

  render() {
    return (
      <div className="flex items-center justify-center h-screen flex-col">
        <img src={octocatImg} alt="octocat" className="w-1/5" />
        <SearchField className="w-full" />
        {/* <a className="py-5 text-sm" onClick={() => this.getRandomUser()}>
          Randomize
        </a> */}
      </div>
    );
  }
}

export default withRouter(Home);
