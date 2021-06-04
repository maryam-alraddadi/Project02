import React, { Component } from "react";

export default class Home extends Component {
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
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="username"
            value={this.state.inputValue}
            onChange={this.handleInput}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
