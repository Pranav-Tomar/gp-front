import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./gdDeed.css";

class GdDeed extends Component {
  render() {
    let btn_class1 = this.props.selected1 ? "btnWork" : "btnWorkS";
    let btn_class2 = this.props.selected2 ? "btnWork" : "btnWorkS";
    let btn_class3 = this.props.selected3 ? "btnWork" : "btnWorkS";
    let btn_class4 = this.props.selected4 ? "btnWork" : "btnWorkS";
    let btn_class5 = this.props.selected5 ? "btnWork" : "btnWorkS";
    let btn_class6 = this.props.selected6 ? "btnWork" : "btnWorkS";
    let btn_class7 = this.props.selected7 ? "btnWork" : "btnWorkS";
    let btn_class8 = this.props.selected8 ? "btnWork" : "btnWorkS";
    return (
      <body>
        <div className="content">
          <div className="combiner">
            <nav>
              <div className="nav1" style={{ lineHeight: "1rem" }}>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  <h1
                    style={{
                      letterSpacing: "1px",
                      fontSize: "large",
                      marginLeft: "20px",
                      marginTop: "20px",
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

            <div className="container1" style={{ marginBottom: "20px" }}>
              <h3>Stay home stay SAFE*</h3>
              <h3>Start sharing your goodness stories</h3>
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

              <div className="input" style={{ textAlign: "center" }}>
                <input
                  size="30"
                  className="goodness"
                  placeholder="anything else-please type here"
                ></input>
              </div>
            </main>

            <div className="submit" style={{ textAlign: "center" }}>
              <Link
                to="/popup"
                style={{
                  width: "80px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",

                  padding: "0",
                }}
                className="btnWork"
              >
                <span>Submit </span>
              </Link>
            </div>
            <br></br>
            <br></br>
          </div>
        </div>
      </body>
    );
  }
}

export default GdDeed;
