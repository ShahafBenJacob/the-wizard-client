import React from "react";
import { Link } from "react-router-dom";


class OnPlay extends React.Component {

  render() {
    return (
        <Link style={{ textDecoration: "none" }} to="/">
          <div>on play</div>
        </Link>
      );
  }
}

export default OnPlay;