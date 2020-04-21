import React from "react";
//component imports
import TransitionsModal from "./Modal";
import SvgComponent from "./SvgComponent";
import Date from "./Date";
// react router dom imports
import { NavLink, Route, Switch } from "react-router-dom";
// Styles
import "../sass/navigation.scss";
// asset imports
import Menu from "../assets/icons8-menu-vertical-30.svg";
import { drawerswitch, drawerOpen } from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AssessmentIcon from "@material-ui/icons/Assessment";

const Navigation = props => {
  return (
    <div>
      <div className="navContainer">
        <div className="navButtonContainer">
          <TransitionsModal />
        </div>
        <nav className="navLinks">
          <ul>
            <NavLink
              onClick={() => {
                if (props.user.drawerContent === "HOME" || !props.user.drawer) {
                  props.drawerswitch();
                }
                props.drawerOpen("HOME");
              }}
              className="linkNav"
              activeClassName="linkActive"
              to="/home"
            >
              <li className="link">
                <HomeIcon
                  className="navImage"
                  style={{ width: "30px", height: "30px" }}
                />
                Home
              </li>
            </NavLink>
            <NavLink
              onClick={() => {
                if (
                  props.user.drawerContent === "ACCOUNT" ||
                  !props.user.drawer
                ) {
                  props.drawerswitch();
                }
                props.drawerOpen("ACCOUNT");
              }}
              className="linkNav"
              activeClassName="linkActive"
              to="/account"
            >
              <li className="link">
                <AccountCircleIcon
                  className="navImage"
                  style={{ width: "30px", height: "30px" }}
                />
                Account
              </li>
            </NavLink>
            <NavLink
              onClick={() => {
                if (
                  props.user.drawerContent === "ANALYTICS" ||
                  !props.user.drawer
                ) {
                  props.drawerswitch();
                }
                props.drawerOpen("ANALYTICS");
              }}
              className="linkNav"
              activeClassName="linkActive"
              to="/analytics"
            >
              <li className="link">
                <AssessmentIcon
                  className="navImage"
                  style={{ width: "30px", height: "30px" }}
                />
                Analytics
              </li>
            </NavLink>
            <NavLink
              onClick={() =>
                // localStorage.removeItem("token") &
                // localStorage.removeItem("CURRENTUSER") &
                localStorage.clear() &
                sessionStorage.clear() &
                window.location.reload(false)
              }
              className={"linkNav"}
              to="/"
            >
              <li className="link">
                <img className="navImage" src={Menu} alt="Menu icon" />
                Logout{" "}
              </li>
            </NavLink>
          </ul>
        </nav>
        <Date className="date" />
      </div>
      <Switch>
        {/* <Route path='/home'>{HomeNav}</Route> */}
        <Route path="/search"></Route>
        <Route path="/account"></Route>
        <Route path="/analytics"></Route>
        <Route path="/messages"></Route>
        <Route path="/notifications"></Route>
      </Switch>
    </div>
  );
};
const mapStateToProps = state => ({
  user: state.user,
  topics: state.topics
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ drawerswitch, drawerOpen }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
