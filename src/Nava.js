import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export const Nava = (props) => {
  return (
    <Navbar
      sticky="top"
      className={`bg-${props.mode} text-${
        props.mode === "light" ? "dark" : "light"
      }`}
      expand="lg"
    >
      <Container>
        <Navbar.Brand
          to="#home"
          className={`text-${props.mode === "light" ? "dark" : "light"}`}
        >
          All News App
        </Navbar.Brand>
        <Navbar.Toggle
          className={`text-${props.mode === "light" ? "dark" : "light"} bg-${
            props.mode
          }`}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/home"
              className={`nav-link text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              Home
            </Link>
            <Link
              to="/sports"
              className={`nav-link text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              Sports
            </Link>
            <Link
              to="/business"
              className={`nav-link text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              Business
            </Link>

            <NavDropdown
              title="More Categories"
              id="bg-dark-nav-dropdown"
            >
              <Link
                to="/technology"
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                } bg-${props.mode}`}
              >
                Technology
              </Link>
              <Link
                to="/science"
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                } bg-${props.mode}`}
              >
                Science
              </Link>
              <Link
                to="/politics"
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                } bg-${props.mode}`}
              >
                Politics
              </Link>
              <Link
                to="/world"
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                } bg-${props.mode}`}
              >
                World
              </Link>
              <Link
                to="/national"
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                } bg-${props.mode}`}
              >
                National
              </Link>
              <Link
                to="/entertainment"
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                } bg-${props.mode}`}
              >
                Entertainment
              </Link>
              <Link
                to="/automobile"
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                } bg-${props.mode}`}
              >
                Automobile
              </Link>
              <Link
                to="/startup"
                className={`nav-link text-${
                  props.mode === "light" ? "dark" : "light"
                } bg-${props.mode}`}
              >
                Startup
              </Link>
            </NavDropdown>
          </Nav>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.togglemode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {`${
                props.mode === "light"
                  ? "Enable Dark Mode"
                  : "Enable Light Mode"
              }`}
            </label>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
