import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GdDeed from "./components/gdDeed/GdDeed";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Popup from "./components/popup/Popup";
import Working from "./components/working/Working";
import Profile from "./components/profile/Profile";
import PopupProfile from "./components/popup/PopupProfile";

class App extends Component {
  state = {
    pntsEarned: 0,
    pntsRedeemed: 0,
    selecteda: true,
    selectedb: true,
    selectedc: true,
    selectedd: true,

    selected1: true,
    selected2: true,
    selected3: true,
    selected4: true,
    selected5: true,
    selected6: true,
    selected7: true,
    selected8: true,
    isButtonDisabled1: false,
    isButtonDisabled2: false,
    isButtonDisabled3: false,
    isButtonDisabled4: false,
    isButtonDisabled5: false,
    isButtonDisabled6: false,
    isButtonDisabled7: false,
    isButtonDisabled8: false,
  };

  handlePointsa = () => {
    this.setState({
      selecteda: !this.state.selecteda,
    });
  };
  handlePointsb = () => {
    this.setState({
      selectedb: !this.state.selectedb,
    });
  };
  handlePointsc = () => {
    this.setState({
      selectedc: !this.state.selectedc,
    });
  };
  handlePointsd = () => {
    this.setState({
      selectedd: !this.state.selectedd,
    });
  };

  handlePoints1 = () => {
    this.setState({
      isButtonDisabled1: true,
      selected1: !this.state.selected1,
    });
    this.setState({
      pntsEarned: this.state.pntsEarned + 2,
      pntsRedeemed: this.state.pntsRedeemed,
    });
  };
  handlePoints2 = () => {
    this.setState({
      isButtonDisabled2: true,
      selected2: !this.state.selected2,
    });
    this.setState({
      pntsEarned: this.state.pntsEarned + 2,
      pntsRedeemed: this.state.pntsRedeemed,
    });
  };
  handlePoints3 = () => {
    this.setState({
      isButtonDisabled3: true,
      selected3: !this.state.selected3,
    });
    this.setState({
      pntsEarned: this.state.pntsEarned + 2,
      pntsRedeemed: this.state.pntsRedeemed,
    });
  };
  handlePoints4 = () => {
    this.setState({
      isButtonDisabled4: true,
      selected4: !this.state.selected4,
    });
    this.setState({
      pntsEarned: this.state.pntsEarned + 2,
      pntsRedeemed: this.state.pntsRedeemed,
    });
  };
  handlePoints5 = () => {
    this.setState({
      isButtonDisabled5: true,
      selected5: !this.state.selected5,
    });
    this.setState({
      pntsEarned: this.state.pntsEarned + 2,
      pntsRedeemed: this.state.pntsRedeemed,
    });
  };
  handlePoints6 = () => {
    this.setState({
      isButtonDisabled6: true,
      selected6: !this.state.selected6,
    });
    this.setState({
      pntsEarned: this.state.pntsEarned + 2,
      pntsRedeemed: this.state.pntsRedeemed,
    });
  };
  handlePoints7 = () => {
    this.setState({
      isButtonDisabled7: true,
      selected7: !this.state.selected7,
    });
    this.setState({
      pntsEarned: this.state.pntsEarned + 2,
      pntsRedeemed: this.state.pntsRedeemed,
    });
  };
  handlePoints8 = () => {
    this.setState({
      isButtonDisabled8: true,
      selected8: !this.state.selected8,
      pntsEarned: this.state.pntsEarned + 2,
      pntsRedeemed: this.state.pntsRedeemed,
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/popupProfile" component={PopupProfile} />
          <Route exact path="/working" component={Working} />
          <Route
            exact
            path="/profile"
            render={() => (
              <Profile
                pntsEarned={this.state.pntsEarned}
                pntsRedeemed={this.state.pntsRedeemed}
                selecteda={this.state.selecteda}
                selectedb={this.state.selectedb}
                selectedc={this.state.selectedc}
                selectedd={this.state.selectedd}
                selected1={this.state.selected1}
                selected2={this.state.selected2}
                selected3={this.state.selected3}
                selected4={this.state.selected4}
                selected5={this.state.selected5}
                selected6={this.state.selected6}
                selected7={this.state.selected7}
                selected8={this.state.selected8}
                isButtonDisabled1={this.state.isButtonDisabled1}
                isButtonDisabled2={this.state.isButtonDisabled2}
                isButtonDisabled3={this.state.isButtonDisabled3}
                isButtonDisabled4={this.state.isButtonDisabled4}
                isButtonDisabled5={this.state.isButtonDisabled5}
                isButtonDisabled6={this.state.isButtonDisabled6}
                isButtonDisabled7={this.state.isButtonDisabled7}
                isButtonDisabled8={this.state.isButtonDisabled8}
                handlePointsa={this.handlePointsa}
                handlePointsb={this.handlePointsb}
                handlePointsc={this.handlePointsc}
                handlePointsd={this.handlePointsd}
                handlePoints1={this.handlePoints1}
                handlePoints2={this.handlePoints2}
                handlePoints3={this.handlePoints3}
                handlePoints4={this.handlePoints4}
                handlePoints5={this.handlePoints5}
                handlePoints6={this.handlePoints6}
                handlePoints7={this.handlePoints7}
                handlePoints8={this.handlePoints8}
              />
            )}
          />
          <Route
            exact
            path="/popup"
            render={() => (
              <Popup
                pntsEarned={this.state.pntsEarned}
                pntsRedeemed={this.state.pntsRedeemed}
              />
            )}
          />

          <Route
            exact
            path="/gdDeed"
            render={() => (
              <GdDeed
                pntsEarned={this.state.pntsEarned}
                selected1={this.state.selected1}
                selected2={this.state.selected2}
                selected3={this.state.selected3}
                selected4={this.state.selected4}
                selected5={this.state.selected5}
                selected6={this.state.selected6}
                selected7={this.state.selected7}
                selected8={this.state.selected8}
                isButtonDisabled1={this.state.isButtonDisabled1}
                isButtonDisabled2={this.state.isButtonDisabled2}
                isButtonDisabled3={this.state.isButtonDisabled3}
                isButtonDisabled4={this.state.isButtonDisabled4}
                isButtonDisabled5={this.state.isButtonDisabled5}
                isButtonDisabled6={this.state.isButtonDisabled6}
                isButtonDisabled7={this.state.isButtonDisabled7}
                isButtonDisabled8={this.state.isButtonDisabled8}
                handlePoints1={this.handlePoints1}
                handlePoints2={this.handlePoints2}
                handlePoints3={this.handlePoints3}
                handlePoints4={this.handlePoints4}
                handlePoints5={this.handlePoints5}
                handlePoints6={this.handlePoints6}
                handlePoints7={this.handlePoints7}
                handlePoints8={this.handlePoints8}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}
export default App;
