import React, { Component } from "react";
import "./Tile.css";

export default class Tile extends Component {
  handleClick = () => {
    this.props.onClick(this.props.id);
  };

  render() {
    const { name, state } = this.props;
    const style = {
      opacity: state.isLocked ? 0.5 : 1,
    };

    return (
      <div onClick={this.handleClick} className="Tile" data-is-locked={state.isLocked}>
        <div style={{ ...this.props.style, ...style }}><span>{name}</span></div>
      </div>
    );
  }
}
