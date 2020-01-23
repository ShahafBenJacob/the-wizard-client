import React from "react";
import { Link } from "react-router-dom";
import { updateData } from "../../api/api";
import "./onPlay.scss";

class OnPlay extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: "",
      min: 0,
      max: 0,
      number: 0,
      computerGuesses: "",
      display: false,
      win: false
    };
  }

  getNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const pickedNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    this.setState({
      number: pickedNumber,
      display: true
    });
  }

  componentDidMount() {
    this.setState({
      id: this.props.match.params.id,
      min: this.props.match.params.min,
      max: this.props.match.params.max,
      name: this.props.match.params.name
    });
  }

  less = number => {
    this.setState({
      max: number,
      computerGuesses: this.state.computerGuesses.concat(this.state.number)
    });
    updateData("games/guess", {
      computer_guesses: this.state.computerGuesses,
      id: this.state.id
    });
  };

  more = number => {
    this.setState({
      min: number
    });
    updateData("games/guess", {
      computer_guesses: `${this.state.computerGuesses}`,
      id: this.state.id
    });
  };

  win = () => {
    updateData("games/win", {
      user_number: this.state.number,
      id: this.state.id
    })
    this.setState({
      win: true
    });
  };

  render() {
    return (
      <div className={"page-wrapper"}>
        <button onClick={() => this.getNumber(this.state.min, this.state.max)}>
          Click Here To Find Out The Wizard Choice
        </button>
        {this.state.display ? (
          <div className={"number-display"}>
            <h2>O.K. {this.state.name}, This Is Your Number?</h2>
            <h2 className={"number"}>{this.state.number}</h2>
          </div>
        ) : (
          <span></span>
        )}
        <div className={"buttons-wrapper"}>
          <button onClick={() => this.less(this.state.number)}>Less</button>
          <button onClick={() => this.win()}>Yes!!!</button>
          <button onClick={() => this.more(this.state.number)}>More</button>
        </div>
        {this.state.win ? (
          <div className={"buttons-wrapper"}>
            <Link style={{ textDecoration: "none" }} to="/">
              <button>Another Game</button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/gameHistory">
              <button>Game History</button>
            </Link>
          </div>
        ) : (
          <span></span>
        )}
      </div>
    );
  }
}

export default OnPlay;
