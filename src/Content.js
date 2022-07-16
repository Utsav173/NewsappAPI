import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Row, Col, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

const Content = (props) => {
  const [isLoading, setIsLoading] = useState([]);
  const [mydata, setData] = useState([]);
  const { category } = props;
  async function apiGet() {
    setIsLoading(true);
    await fetch(`https://inshorts.deta.dev/news?category=${category}`)
      .then((response) => response.json())
      .then((json) => {
        console.log("updating..");
        setData(json.data);
        setIsLoading(false);
      });
  }

  useEffect(
    () => {
      apiGet();
      const interval = setInterval(async () => {
        await fetch(`https://inshorts.deta.dev/news?category=${category}`)
          .then((response) => response.json())
          .then((json) => {
            console.log("updating..");
            setData(json.data);
          });
      }, 9000);
      return () => clearInterval(interval);
    },
    []
  );

  return (
    <div
      key="diva"
      className={`container justify-content-center align-items-center my-5 bg-${props.mode}`}
      id="cgh"
    >
      {isLoading ? (
        <Container className="text-center">
          <Spinner
            variant={`${props.mode === "light" ? "dark" : "light"}`}
            animation="border"
            role="status"
          >
            <span className="visually-hidden text-center">Loading...</span>
          </Spinner>
        </Container>
      ) : (
        <Container key="conta" fluid>
          <Row key="rows" xs={1} md={3} className={`my-4 bg-${props.mode}`}>
            {mydata.map((value) => {
              return (
                <>
                  <Col
                    key="aads"
                    className={`container-fluid my-3 bg-${props.mode} text-${
                      props.mode === "light" ? "dark" : "light"
                    }`}
                  >
                    <Card
                      key={value.id}
                      className={`mx-2 shadow- bg-${props.mode} text-${
                        props.mode === "light" ? "dark" : "light"
                      }`}
                      style={{ borderRadius: "10px !important" }}
                    >
                      <Card.Img
                        variant="top"
                        src={value.imageUrl}
                        style={{ borderRadius: "10px 10px 0px 0px" }}
                      />
                      <Card.Body key="dsa">
                        <Card.Title
                          className={`text-${
                            props.mode === "light" ? "dark" : "light"
                          }`}
                        >
                          {value.title}
                        </Card.Title>
                        <Card.Text
                          className={`text-${
                            props.mode === "light" ? "dark" : "secondary"
                          }`}
                        >
                          {value.content.substring(0, 90)}...
                        </Card.Text>
                        <p className="card-text">
                          <small
                            className={`text-muted text-${
                              props.mode === "light" ? "dark" : "light"
                            }`}
                          >
                            {value.time}
                            {value.date} By {value.author}
                          </small>
                        </p>

                        <Card.Link href={value.readMoreUrl}>
                          <Button
                            key="bot1"
                            variant={`${
                              props.mode === "light" ? "primary" : "secondary"
                            }`}
                            text="dark"
                          >
                            View More
                          </Button>
                        </Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Content;
