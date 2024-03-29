import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import logo from "../assets/personarylogo.png";
import "../styles/sidebar.css";
import IndividualUser from "../components/IndividualUser";

const Sidebar = (props) => {
  return (
    <div className="mainSidebar">
      <div>
        <img className="sidebarLogo" src={logo} alt="personary logo" />
      </div>
      <div className="sidebarUser">
        <img
          className="profilePic"
          src="https://ih1.redbubble.net/image.1096215820.0456/ur,shower_curtain_closed,square,600x600.1.jpg"
          alt="user profile"
        />
        <h2>
          Welcome back,
          <br /> {props.accountInfo.username}
        </h2>
        <IndividualUser />
      </div>
      <div>
        <Nav className="mainNav" vertical>
          <NavItem>
            <Link to="/account">
              <NavLink className="NavLink" to="/account">
                Account
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/mycharacters">
              <NavLink className="NavLink" to="/mycharacters">
                My Characters
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/createnewcharacter">
              <NavLink className="NavLink" to="/createnewcharacter">
                Create A Character
              </NavLink>
            </Link>
          </NavItem>
        </Nav>
        <div className="footer">
          <footer>
            <Link className="footerLink" to="/About">
              About
            </Link>{" "}
            |
            <Link className="footerLink" to="/contactus">
              {" "}
              Contact Us
            </Link>{" "}
            |
            <Link className="footerLink" to="/privacypolicy">
              {" "}
              Privacy Policy
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
