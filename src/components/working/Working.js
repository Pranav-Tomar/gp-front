import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./working.css";

class Working extends Component {
  render() {
    return (
      <body>
        <div className="content">
          <div className="combiner">
            <nav>
              <div className="nav1">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  <h2>Goodpoints</h2>
                </Link>
                <h6>&nbsp;&nbsp;Incentivising goodness</h6>
              </div>
              <div className="nav2">
                <ul>
                  <li>
                    <Link
                      to="/login"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontSize: "large",
                      }}
                    >
                      Sign in
                    </Link>
                  </li>
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  <li>
                    <Link
                      to="/register"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontSize: "large",
                      }}
                    >
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
              <br></br>
              <br></br>
            </nav>

            <div className="heading" style={{ marginTop: "15px" }}>
              <h1>How it works?</h1>
            </div>
            <br></br>

            <main>
              <div className="main1">
                <ul
                  style={{
                    marginLeft: "100px",
                    fontSize: "30px",
                    fontWeight: "500",
                    letterSpacing: "0.3rem",
                  }}
                >
                  <li style={{ fontFamily: "italic" }}>GIVE</li>
                  <br></br>
                  <li style={{ fontFamily: "italic" }}>EARN</li>
                  <br></br>
                  <li style={{ fontFamily: "italic" }}>REDEEM</li>
                </ul>
              </div>

              <div className="main2">
                <ul style={{ marginLeft: "20px", lineHeight: "2.5rem" }}>
                  <li>
                    <p>
                      Do your bit for the community. Any random act of kindness
                      counts.
                    </p>
                  </li>
                  <li>
                    <p>
                      Earn goodpoints for your kindness. Nothing better than
                      being recognized for doing good
                    </p>
                  </li>
                  <li>
                    <p>
                      Yesss, you read it right. Redeem your points with rewards
                      and create your goodness timeline.
                    </p>
                  </li>
                </ul>
              </div>
              <br></br>
              <br></br>
              <br></br>
            </main>

            <div className="nextpg">
              <div className="col s6">
                <Link
                  to="/gdDeed"
                  style={{
                    backgroundColor: "#4caf50",
                    border: "none",
                    borderRadius: "3px",
                    color: "white",
                    padding: "0px 10px",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "inline-block",
                    fontSize: "16px",
                    marginInlineStart: "45%",
                    marginTop: "20px",
                    cursor: "pointer",
                  }}
                  className="btnW"
                >
                  Let's Start
                </Link>
              </div>
              <br></br>
            </div>
            <br></br>
            <br></br>

            <hr
              style={{ height: "1px", backgroundColor: "blue", border: "none" }}
            ></hr>
            <footer>
              <div
                className="foot"
                style={{ marginLeft: "20px", paddingBottom: "5px" }}
              >
                <div className="footer1" style={{ float: "left" }}>
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <Link to="#" style={{ textDecoration: "none" }}>
                        <span style={{ fontSize: "x-large", color: "gold" }}>
                          About
                        </span>
                      </Link>
                    </li>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <li>
                      <Link to="#" style={{ textDecoration: "none" }}>
                        <span style={{ fontSize: "x-large", color: "gold" }}>
                          Blog
                        </span>
                      </Link>
                    </li>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <li>
                      <Link to="#" style={{ textDecoration: "none" }}>
                        <span style={{ fontSize: "x-large", color: "gold" }}>
                          Contact
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="footer2"
                  style={{ marginLeft: "80%", marginTop: "8px" }}
                >
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
              </div>
            </footer>
          </div>
        </div>
      </body>
    );
  }
}

export default Working;
