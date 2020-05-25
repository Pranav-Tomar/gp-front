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
                        fontSize: "15px",
                      }}
                    >
                      Sign in
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontSize: "15px",
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
              <div className="workMain">
                <ul>
                  <li>
                    <h1>GIVE</h1>
                    <p>
                      Do your bit for the community. Any random act of kindness
                      counts.
                    </p>
                  </li>
                  <br></br>
                  <li>
                    <h1>EARN</h1>
                    <p>
                      Earn goodpoints for your kindness. Nothing better than
                      being recognized for doing good
                    </p>
                  </li>
                  <br></br>
                  <li>
                    <h1>REDEEM</h1>
                    <p>
                      Yesss, you read it right. Redeem your points with rewards
                      and create your goodness timeline.
                    </p>
                  </li>
                </ul>
              </div>
            </main>

            <br></br>

            <div className="nextpg">
              <div
                className="col s6"
                style={{ textAlign: "center", marginTop: "40px" }}
              >
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

                    marginTop: "20px",
                    cursor: "pointer",
                  }}
                  className="btnW"
                >
                  Let's Start
                </Link>
              </div>
            </div>
            <br></br>

            <hr
              style={{
                height: "1px",
                backgroundColor: "#1c1c67",
                border: "none",
              }}
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
                        <span style={{ fontSize: "2vw", color: "gold" }}>
                          About
                        </span>
                      </Link>
                    </li>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <li>
                      <Link to="#" style={{ textDecoration: "none" }}>
                        <span style={{ fontSize: "2vw", color: "gold" }}>
                          Blog
                        </span>
                      </Link>
                    </li>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <li>
                      <Link to="#" style={{ textDecoration: "none" }}>
                        <span style={{ fontSize: "2vw", color: "gold" }}>
                          Contact
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="footer2"
                  style={{
                    float: "right",
                    marginTop: "8px",
                    marginInlineEnd: "2%",
                  }}
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
