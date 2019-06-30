import React, { Component } from "react";
import withSSE from "../../hoc/withSSE";
import withClickAction from "../../hoc/withClickAction";

import "./App.css";
import Tile from "../Tile/Tile";

class App extends Component {
  handleClick = id => {
    this.props.onAction(id);
  };

  render() {
    return (
      <div className="App">
        {this.props.data.map(tile => (
          <Tile key={tile.id} onClick={this.handleClick} {...tile} />
        ))}
      </div>
    );
  }
}

export default withSSE(withClickAction(App));
