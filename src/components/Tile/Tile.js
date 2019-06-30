import React, { Component } from "react";
import "./Tile.css";

export default class Tile extends Component {
  handleClick = event => {
    this.props.onClick(this.props.id);
  };

  render() {
    const { name, style } = this.props;
    return (
      <div onClick={this.handleClick} className="Tile">
        <div style={style}>{name}</div>
      </div>
    );
  }
}
