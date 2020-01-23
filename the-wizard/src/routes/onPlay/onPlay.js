import React from "react";
import { Link } from "react-router-dom";
import { postData } from "../../api/api";


class OnPlay extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      min: 0,
      max: 0,
      name: ""
    };
  }

  componentDidMount() {

    this.setState({
      id: this.props.match.params.id,
      min: this.props.match.params.min,
      max: this.props.match.params.max,
      name: this.props.match.params.name,

    })
  }

  render() {
    return (
      <div>
        <h2>O.K. {this.state.name}, Did you pick:</h2>
        <h2></h2>

        <Link style={{ textDecoration: "none" }} to="/">
          <div>on play</div>
        </Link>
      </div>
    );
  }
}

export default OnPlay;
