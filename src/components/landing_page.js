import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://previews.123rf.com/images/illustratiostock/illustratiostock1709/illustratiostock170900138/87253939-isolated-avatar-of-a-happy-asian-girl-with-black-eyes-on-a-white-background-vector-illustration.jpg"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Software Engineer</h1>

              <p>
                JavaScript | React | NodeJS | Express | Ruby on Rails |
                PostgreSQL | MongoDB
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Twitter */}
                <a
                  href="https://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
