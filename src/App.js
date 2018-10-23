import React, { Component } from "react";
import Home from "./containers/Home";
import "bootstrap/dist/css/bootstrap.css";
import "./styles//index.scss";
import styleModues from "./styles/index.module.scss";
import { Container, Row, Col } from "reactstrap";
import { AppHeader } from "./components/";
import { IconContext } from "react-icons";

class App extends Component {
  render() {
    return (
      <IconContext.Provider value={{ className: styleModues["font--color"] }}>
        <Container fluid>
          <AppHeader />
          <Row>
            <Col
              md={{ size: 10, offset: 1 }}
              xs={{ size: 12, offset: 0 }}
              sm={{ size: 10, offset: 1 }}
              lg={{ size: 8, offset: 2 }}
            >
              <Home />
            </Col>
          </Row>
        </Container>
      </IconContext.Provider>
    );
  }
}

export default App;
