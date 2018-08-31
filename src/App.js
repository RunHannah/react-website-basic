import React, { Component } from "react";
import "./App.css";
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Textfield
} from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Layout fixedHeader>
        <Header
          className="header-color"
          title="Title"
          scroll
          title={
            <span>
              <span style={{ color: "#ddd" }} />
              <strong>Hannah Lee</strong>
            </span>
          }
        >
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutMe">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutMe">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    );
  }
}

export default App;
