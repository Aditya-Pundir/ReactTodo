import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  // Instead of props as a parameter you can write curly braces and write title inside that and then you can directly use the title variable instead of writing props.title

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>

          {/* If you want to give a condition that if it is true then only show this component otherwise don't or show something else then you can do it like below: */}

          {/* The below is known as turnery operator */}
          {props.searchBar ? (
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          ) : (
            ""
            // And if you want to show something instead of this blank space, then you can write it instead of this empty space.
          )}
        </div>
      </div>
    </nav>
  );
}

// Declaring the type of the props, Proptypes
Header.propTypes = {
  title: PropTypes.string,
  // searchBar: PropTypes.bool.isRequired, // The method isRequired is used when you want a component to be required but only if you haven't passed the defaultProps for that
  searchBar: PropTypes.bool,
};
// The benefit of Proptypes is that you can build your code robust and can do strict type checking.

// Declaring the defaultProps
Header.defaultProps = {
  title: "Your title here",
  searchBar: true,
};
// The benefit of defaultProps is that if the user has not passed the props then these props will be shown.
