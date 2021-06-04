import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Event from "./Event";
import EventType from "./EventType";

axios.defaults.headers.common["Authorization"] =
  process.env.REACT_APP_OAUTH_TOKEN;

const BASE_URL = "https://api.github.com";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      events: [],
    };
  }

  componentDidMount() {
    let username = this.props.match.params.username;
    this.getUserDetails(username);
    this.getEvents(username);
  }

  getUserDetails = (username) => {
    axios
      .get(`${BASE_URL}/users/${username}`)
      .then((res) => this.setState({ user: res.data }))
      .catch((err) => console.log(err));
  };

  // repo(name, url), event type,  date

  getEvents = (username) => {
    axios
      .get(`${BASE_URL}/users/${username}/events`)
      .then((res) => this.setState({ events: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    const { user, events } = this.state;
    return (
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          {/* <!-- Left Side --> */}
          <div className="w-full md:w-4/12 md:mx-6 h-full border border-gray-100">
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className="shadow mx-auto my-2 h-24 w-24 border-white rounded-full overflow-hidden border-4">
                <img
                  className="object-cover w-full h-full"
                  src={user.avatar_url}
                  alt="user profile"
                />
              </div>
              <h1 className="text-gray-900 text-center font-bold text-xl leading-8 my-3">
                {user.name}
              </h1>
              <p className="text-center ">
                <a href={user.blog} target="_blank" rel="noreferrer">
                  {user.blog}
                </a>
              </p>

              <p className="text-gray-500 text-center text-sm px-2 pb-4 leading-6">
                {user.bio}
              </p>

              <div className="text-sm py-4 flex justify-center items-center w-full divide-x divide-gray-300 divide-solid">
                <span className="text-center px-2">
                  <span className="font-bold text-gray-700">
                    {user.followers}
                  </span>
                  <span className="text-gray-600"> followers</span>
                </span>
                <span className="text-center px-2">
                  <span className="font-bold text-gray-700">
                    {user.following}
                  </span>
                  <span className="text-gray-600"> following</span>
                </span>
                <span className="text-center px-2">
                  <span className="font-bold text-gray-700">
                    {user.public_repos}
                  </span>
                  <span className="text-gray-600"> repos</span>
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Right Side --> */}
          <div className="w-full md:w-9/12 h-full border border-gray-100">
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <h1 className="text-gray-700 text-center font-semibold text-xl pl-4 my-3">
                  Activity
                </h1>
              </div>
              <div className="text-gray-700">
                {events
                  .filter((event) =>
                    Object.values(EventType).includes(event.type)
                  )
                  .map((event, index) => (
                    <Event key={index} event={event} />
                  ))}
              </div>
              <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                Load more
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(UserProfile);
