import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api-new-sql.herokuapp.com/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Home components</h1>
      <h1>Product</h1>
      {/*Dipaly data in 3 row cards */}
      <Container class="col-md-6 col-md-offset-3">
        <Row xs={1} md={3} className="g-4">
          {data.map((item) => {
            return (
              <Col className="d-flex">
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    className="w-auto"
                    style={{ width: 100, height: 300 }}
                    variant="top"
                    src={item.img}
                    alt="img"
                  />
                  <Card.Body>
                    <Card.Title>{item.productid}</Card.Title>
                    <Card.Text>{item.productprice}</Card.Text>
                    <Card.Text>{item.productdetails}</Card.Text>

                  </Card.Body>
                  <br></br>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
     
    </div>
  )
}

export default Home;
