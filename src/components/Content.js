import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Row, Col, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { NewsState } from "../Conetext";
import axios from "axios";

const Content = () => {

  const { mode, NewsList, category, Txt } = NewsState();
  const [isLoading, setIsLoading] = useState([]);
  const [mydata, setData] = useState([]);


  const apiGet = async () => {
    setIsLoading(true);
    const { data } = await axios.get(NewsList(category));
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
   apiGet()

   const interval = setInterval(async () => {
    const { data } = await axios.get(NewsList(category));
    setData(data);
  }, 9000);
  return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <div
      className={`container justify-content-center align-items-center my-5 bg-${mode}`}
      id="cgh"
    >
      {isLoading ? (
        <Container className="text-center">
          <Spinner
            variant={`${mode === "light" ? "dark" : "light"}`}
            animation="border"
            role="status"
          >
          </Spinner>
        </Container>
      ) : (
        <Container fluid>
          <Row className={`text-center bg-${mode} text-${
                      mode === "light" ? "dark" : "light"
                    }`}>
            <h3>Todys latest <b>{Txt}</b> News</h3>
          </Row>
          <Row xs={1} md={3} className={`my-4 bg-${mode}`}>
            {mydata.data.map((value, index) => {
              return (
                <>
                  <Col
                    key={index}
                    className={`container-fluid my-3 bg-${mode} text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  >
                    <Card
                      className={`mx-2 shadow- bg-${mode} text-${
                        mode === "light" ? "dark" : "light"
                      }`}
                      style={{ borderRadius: "10px !important" }}
                    >
                      <Card.Img
                        variant="top"
                        src={value.imageUrl}
                        style={{ borderRadius: "10px 10px 0px 0px" }}
                      />
                      <Card.Body>
                        <Card.Title
                          className={`text-${
                            mode === "light" ? "dark" : "light"
                          }`}
                        >
                          {value.title}
                        </Card.Title>
                        <Card.Text
                          className={`text-${
                            mode === "light" ? "dark" : "secondary"
                          }`}
                        >
                          {value.content.substring(0, 90)}...
                        </Card.Text>
                        <p className="card-text">
                          <small
                            className={`text-muted text-${
                              mode === "light" ? "dark" : "light"
                            }`}
                          >
                            {value.time}
                            {value.date} By {value.author}
                          </small>
                        </p>

                        <Card.Link href={value.readMoreUrl}>
                          <Button
                            variant={`${
                              mode === "light" ? "primary" : "secondary"
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