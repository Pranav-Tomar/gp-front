import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./profile.css";
import { isAutheticated } from "../auth/helper/index";

class Profile extends Component {
  render() {
    const {
      user: { name },
    } = isAutheticated();

    let btn_classa = this.props.selecteda ? "btnProfile" : "btnProfileS";
    let btn_classb = this.props.selectedb ? "btnProfile" : "btnProfileS";
    let btn_classc = this.props.selectedc ? "btnProfile" : "btnProfileS";
    let btn_classd = this.props.selectedd ? "btnProfile" : "btnProfileS";

    let btn_class1 = this.props.selected1 ? "btnProfile" : "btnProfileS";
    let btn_class2 = this.props.selected2 ? "btnProfile" : "btnProfileS";
    let btn_class3 = this.props.selected3 ? "btnProfile" : "btnProfileS";
    let btn_class4 = this.props.selected4 ? "btnProfile" : "btnProfileS";
    let btn_class5 = this.props.selected5 ? "btnProfile" : "btnProfileS";
    let btn_class6 = this.props.selected6 ? "btnProfile" : "btnProfileS";
    let btn_class7 = this.props.selected7 ? "btnProfile" : "btnProfileS";
    let btn_class8 = this.props.selected8 ? "btnProfile" : "btnProfileS";
    return (
      <body>
        <div className="content">
          <nav>
            <div className="nav1" style={{ lineHeight: "1rem" }}>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <h1
                  style={{
                    letterSpacing: "1px",
                    fontSize: "large",
                    marginLeft: "20px",
                  }}
                >
                  Goodpoints
                </h1>
              </Link>
              <h6>&nbsp;&nbsp;Incentivising goodness</h6>
            </div>
            <div className="nav2" style={{ float: "right" }}>
              <ul>
                <li>
                  <Link to="/">
                    <img
                      src={require("../images/icon-facebook.svg")}
                      alt="fbLogo"
                    ></img>
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/getgoodpoints/"
                    target="_blank"
                  >
                    <img
                      src={require("../images/icon-instagram.svg")}
                      alt="fbLogo"
                    ></img>
                  </a>
                </li>
                <li>
                  <Link to="/">
                    <img
                      src={require("../images/icon-twitter.svg")}
                      alt="fbLogo"
                    ></img>
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/goodpoints/?viewAsMember=true"
                    target="_blank"
                  >
                    <img
                      src={require("../images/Linkedin_icon.svg")}
                      alt="fbLogo"
                    ></img>
                  </a>
                </li>
              </ul>
            </div>
            <br></br>
            <br></br>
          </nav>

          <div
            className="left"
            style={{ float: "left", width: "20%", marginLeft: "20px" }}
          >
            <div className="profile">
              <div
                id="blockp"
                style={{
                  border: "1px solid black",
                  backgroundColor: "coral",
                }}
              >
                <svg
                  height="80"
                  width="80"
                  style={{
                    marginLeft: "30%",
                    marginTop: "20px",
                  }}
                >
                  <circle
                    cx="35"
                    cy="35"
                    r="30"
                    stroke="black"
                    strokeWidth="1"
                    fill="red"
                  />
                  Sorry, your browser does not support inline SVG.
                </svg>
                <span
                  style={{
                    fontSize: "20px",
                    color: "black",
                    marginLeft: "18%",
                  }}
                >
                  <b>{name}</b>
                </span>
              </div>

              <div className="blockp1">
                <h3>Causes you care</h3>
                <ul>
                  <li>
                    <button
                      className={btn_classa}
                      onClick={this.props.handlePointsa}
                    >
                      Environment
                    </button>
                  </li>
                  <li>
                    <button
                      className={btn_classb}
                      onClick={this.props.handlePointsb}
                    >
                      Education
                    </button>
                  </li>
                  <li>
                    <button
                      className={btn_classc}
                      onClick={this.props.handlePointsc}
                    >
                      Children
                    </button>
                  </li>
                  <li>
                    <button
                      className={btn_classd}
                      onClick={this.props.handlePointsd}
                    >
                      Poverty
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right" style={{ float: "right", width: "70%" }}>
            <div className="points">
              <div className="blocke">
                <p>Goodpoints earned</p>
                <span>{this.props.pntsEarned}</span>
              </div>
              <div className="blockr">
                <p>Goodpoints redeemed</p>
                <span>{this.props.pntsRedeemed}</span>
              </div>
            </div>

            <div className="quote">
              <p>Continue sharing your goodness stories</p>
            </div>
            <main>
              <div
                className="main1"
                style={{
                  float: "left",
                  marginLeft: "10%",
                  marginRight: "20px",
                  width: "40%",
                }}
              >
                <h1>HOME</h1>
                <ul>
                  <li>
                    <button
                      onClick={this.props.handlePoints1}
                      disabled={this.props.isButtonDisabled1}
                      className={btn_class1}
                    >
                      Maintained social distance
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={this.props.handlePoints2}
                      disabled={this.props.isButtonDisabled2}
                      className={btn_class2}
                    >
                      Donated to relief fund
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={this.props.handlePoints3}
                      disabled={this.props.isButtonDisabled3}
                      className={btn_class3}
                    >
                      Tipped delivery person
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={this.props.handlePoints4}
                      disabled={this.props.isButtonDisabled4}
                      className={btn_class4}
                    >
                      Volunteered online and helped
                    </button>
                  </li>
                </ul>
              </div>

              <div
                className="main2"
                style={{
                  float: "right",
                  marginRight: "5%",
                  width: "40%",
                  marginTop: "10px",
                }}
              >
                <h1>AWAY</h1>
                <ul>
                  <li>
                    <button
                      onClick={this.props.handlePoints5}
                      disabled={this.props.isButtonDisabled5}
                      className={btn_class5}
                    >
                      Donated blood and contribute
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={this.props.handlePoints6}
                      disabled={this.props.isButtonDisabled6}
                      className={btn_class6}
                    >
                      Delivered essential items
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={this.props.handlePoints7}
                      disabled={this.props.isButtonDisabled7}
                      className={btn_class7}
                    >
                      Voluteered in Covid19 relief
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={this.props.handlePoints8}
                      disabled={this.props.isButtonDisabled8}
                      className={btn_class8}
                    >
                      Helped Covid19 TF
                    </button>
                  </li>
                </ul>
              </div>

              <input
                size="30"
                className="goodness"
                placeholder="anything else-please type here"
              ></input>

              <div className="submit">
                <Link
                  to="/popupProfile"
                  style={{
                    width: "80px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    padding: "0",
                    float: "right",
                    marginRight: "30%",
                  }}
                  className="btnProfile"
                >
                  <span>Submit </span>
                </Link>
              </div>
            </main>
          </div>
        </div>
      </body>
    );
  }
}

export default Profile;
