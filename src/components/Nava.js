import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Form } from "react-bootstrap";
import { NewsState } from "../Conetext";
// import { useNavigate } from "react-router-dom";

const Nava = () => {
  const { togglemode, mode, category, setCategory } = NewsState();
  // const navigate = useNavigate();
  return (
    <Navbar
      sticky="top"
      className={`bg-${mode} text-${mode === "light" ? "dark" : "light"}`}
      expand="lg"
    >
      <Container>
        <Navbar.Brand
          to="#home"
          className={`text-${mode === "light" ? "dark" : "light"}`}
        >
          All News App
        </Navbar.Brand>
        <Navbar.Toggle
          className={`text-${mode === "light" ? "dark" : "light"} bg-${mode}`}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Form.Select
              className={`bg-${mode} text-${
                mode === "light" ? "dark" : "light"
              } border-0 m-1`}
              aria-label="Default select example"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value={"national"}>National</option>
              <option value={"sports"}>Sports</option>
              <option value={"technology"}>Technology</option>
              <option value={"politics"}>Politics</option>
              <option value={"science"}>Science</option>
              <option value={"business"}>Business</option>
              <option value={"startup"}>Startup</option>
              <option value={"world"}>World</option>
              <option value={"automobile"}>Automobile</option>
              <option value={"entertainment"}>Entertainment</option>
            </Form.Select>
          </Nav>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={togglemode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {`${mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}`}
            </label>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nava;
