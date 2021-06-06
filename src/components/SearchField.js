import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ inputValue: e.target.value });
  }

  submitHandler(e) {
    e.preventDefault();
    // verfiy userneame format
    this.props.history.push(`users/${this.state.inputValue}`);
  }

  render() {
    return (
      <div className="">
        <span className="px-2">github.com/</span>
        <div className="bg-white shadow inline-block">
          <form className="flex" onSubmit={this.submitHandler}>
            <input
              className="w-full rounded rounded-r-none p-2 focus:outline-none  focus:ring-2 focus:ring-gray-300"
              type="text"
              placeholder="username"
              onChange={this.handleInput}
            />
            <button className="bg-red-300 hover:bg-red-400 rounded rounded-l-none text-white p-2 pl-4 pr-4">
              <p className="font-semibold text-xs">Search</p>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchField);
