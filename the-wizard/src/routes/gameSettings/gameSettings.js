import React from "react";
import { Link } from "react-router-dom";

class GameSettings extends React.Component {
  render() {
    return (
      <Link style={{ textDecoration: "none" }} to="/onPlay">
        <div>game settings</div>
      </Link>
    );
  }
}

export default GameSettings;
