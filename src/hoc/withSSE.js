import React, { Component } from "react";
import { API_URL } from "../config.js";
import join from "url-join";

const withSSE = WrappedComponent => {
  return class extends Component {
    state = {
      data: []
    };

    constructor(props) {
      super(props);
      const es = new EventSource(join(API_URL, "stream"));
      es.onmessage = this.handleMessage;
    }

    handleMessage = event => {
      this.setState({
        data: JSON.parse(event.data)
      });
    };

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
};

export default withSSE;
