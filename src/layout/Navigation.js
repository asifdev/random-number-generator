import React from "react";
import PropTypes from "prop-types";

const NavBar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>
    </nav>
  );
};

NavBar.defaultProps = {
  title: "Random Number Generator",
  icon: "fas fa-sort-numeric-up"
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default NavBar;
