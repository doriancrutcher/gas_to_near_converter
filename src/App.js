import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useState, useEffect } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Alert,
} from "react-bootstrap";

function App() {
  const gasRef = useRef();
  const nearRef = useRef();
  const usdRef = useRef();

  const [gas, changeGas] = useState("");
  const [near, changeNEAR] = useState("00");
  const [usd, changeUSD] = useState("");

  const [usdToNearConversion, changeUsdToNearConversion] = useState("");

  // conversion caluclators

  // 1 TGAS=1milliseond of compute time = 0.1 milliNEAR = 100 million yoctoNEAR

  const gasToNear = async () => {
    const gasVal = gasRef.current.value;
    changeGas(gasVal);
    changeNEAR((0.0001 /* NEAR */ / 1) /*TGas */ * gasVal);
  };

  return (
    <React.Fragment>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='https://docs.near.org/docs/concepts/gas'>
            Gas -> NEAR Converter
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row className='justify-content-center d-flex'>
          {" "}
          <Card style={{ width: "18rem", marginTop: "5vh" }}>
            <Card.Body>
              <Container>
                <Card.Title>Gas</Card.Title>
                <Card.Text>Enter your Amount In Gas Here</Card.Text>
                <Form>
                  <Form.Group
                    className='mb-3'
                    controlId='exampleForm.ControlInput1'
                  >
                    <Alert variant={"info"}>{near} NEAR</Alert>
                    <Form.Label>Amount </Form.Label>
                    <Form.Control
                      ref={gasRef}
                      placeholder='enter amount of GAS'
                    />
                  </Form.Group>
                </Form>

                <Button variant='primary' onClick={gasToNear}>
                  Submit
                </Button>
              </Container>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
