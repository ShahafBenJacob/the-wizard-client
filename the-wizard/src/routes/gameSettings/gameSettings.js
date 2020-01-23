import React from "react";
import { Link } from "react-router-dom";
import "./gameSettings.scss";
import getData from '../../'

class GameSettings extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      min: 0,
      max: 0
    };
  }

  handleChangeName = e => {
    const value = e.target.value;
    this.setState({
      name: value
    });
  };

  handleChangeMin = e => {
    const value = e.target.value;
    this.setState({
      min: value
    });
  };

  handleChangeMax = e => {
    const value = e.target.value;
    this.setState({
      max: value
    });
  };

  render() {
    console.log(this.state.name);
    return (
      <div className={"page-wrapper"}>
        <h1>THE WIZARD</h1>
        <div className={"form-wrapper"}>
          <h2>What Is Your Name?</h2>
          <form>
            <input
              placeholder={"Write Here Your Name"}
              type="text"
              onChange={e => this.handleChangeName(e)}
            />
          </form>
        </div>
        <div className={"form-wrapper"}>
          <h2>Choose Range Of Numbers</h2>
          <div className={"min-max-wrapper"}>
            <form>
              <input
                placeholder={"From"}
                type="text"
                onChange={e => this.handleChangeMin(e)}
              />
            </form>
            -
            <form>
              <input
                placeholder={"To"}
                type="text"
                onChange={e => this.handleChangeMax(e)}
              />
            </form>
          </div>
          <h2>
            Now Think Of A Number <br />
            And Our Wizard Will Tell You What It Is
          </h2>
        </div>
        <h1>Ready?</h1>
        <Link style={{ textDecoration: "none" }} to="/onPlay">
          <button>YES</button>
        </Link>
      </div>
    );
  }
}

export default GameSettings;
