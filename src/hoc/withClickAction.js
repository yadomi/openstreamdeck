import React, { Component } from "react";
import { API_URL } from "../config";
import join from "url-join";

const withClickAction = WrappedComponent => {
  return class extends Component {
    handleClick = id => {
      console.log(id);
      fetch(join(API_URL, "action", id.toString()), {
        method: "post"
      });
    };

    render() {
      return <WrappedComponent onAction={this.handleClick} {...this.props} />;
    }
  };
};

export default withClickAction;
