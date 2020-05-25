import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAutheticated } from "../auth/helper";

const PopupProfile = ({ history }) => (
  <body>
    <div
      className="popup"
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "20%",
        width: "60%",
        border: "1px solid black",
        padding: "10px",
        backgroundColor: "coral",
      }}
    >
      <p style={{ textAlign: "center", fontWeight: "500" }}>
        Thank you for participating. Have a Nice Day!
      </p>
      <div className="col s6" style={{ marginInlineStart: "30%" }}>
        <Link
          to="/profile"
          style={{
            width: "100px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            padding: "6px 15px",
            backgroundColor: "blue",
            textDecoration: "none",
            color: "white",
            textAlign: "center",
          }}
          className="btnPopup"
        >
          Continue
        </Link>
        {"    "}

        {isAutheticated() && (
          <li
            style={{
              width: "100px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              padding: "0px 5px",
              backgroundColor: "blue",
              textDecoration: "none",
              color: "white",
              textAlign: "center",
              cursor: "pointer",
            }}
            className="btnPopup"
          >
            <span
              onClick={() => {
                signout(() => {
                  history.push("/");
                });
              }}
            >
              Signout
            </span>
          </li>
        )}
      </div>
    </div>
  </body>
);

export default withRouter(PopupProfile);
