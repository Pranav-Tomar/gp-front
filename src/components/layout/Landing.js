import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <body>
        <div className="content">
          <div className="combiner">
            <nav>
              <div className="nav1" style={{ lineHeight: "1rem" }}>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  <h1
                    style={{
                      letterSpacing: "1px",
                      fontSize: "large",
                      marginLeft: "5%",
                      marginTop: "12px",
                    }}
                  >
                    Goodpoints
                  </h1>
                </Link>
                <h6>&nbsp;Incentivising goodness</h6>
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
            </nav>
            <br></br>
            <br></br>
            <br></br>

            <div className="center">
              <div className="quote">
                <h2>
                  <b>Do Something good today</b>
                </h2>
                <p className="flow-text grey-text text-darken-1">
                  And checkout so much you can do with your goodpoints
                </p>
                <br />
              </div>

              <div className="links">
                <div className="authBtn" style={{ textAlign: "center" }}>
                  <ul id="linkbtn">
                    <li>
                      <Link
                        to="/register"
                        style={{
                          width: "140px",
                          borderRadius: "3px",
                          letterSpacing: "1.5px",
                        }}
                        className="btnHome"
                      >
                        Register
                      </Link>
                    </li>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <li>
                      <Link
                        to="/login"
                        style={{
                          width: "140px",
                          borderRadius: "3px",
                          letterSpacing: "1.5px",
                        }}
                        className="btnHome"
                      >
                        Log In
                      </Link>
                    </li>
                  </ul>
                </div>

                <h1 style={{ textAlign: "center", marginTop: "15px" }}>OR</h1>
                <div
                  className="skipbtn"
                  style={{ textAlign: "center", marginTop: "10px" }}
                >
                  <Link
                    to="/working"
                    style={{
                      width: "140px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                    }}
                    className="btnHome"
                  >
                    <span>Skip and Browse </span>
                  </Link>
                </div>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
export default Landing;
