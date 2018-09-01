import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://thumbs.dreamstime.com/b/asian-chinese-woman-flat-vector-design-style-can-be-used-profile-avatar-illustration-79782777.jpg"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ padding: "2em" }}>Lara Jean Covey</h2>
            <h2 style={{ color: "grey" }}>Software Engineer</h2>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Peter Kavinsky Way, 90210</p>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear="2018"
              endYear="2021"
              schoolName="My University"
              degree="Bachelors in Deep Thoughts"
            />
            <hr style={{ borderTop: "3px solid #999999" }} />
            <h2>Experience</h2>
            <Experience
              startYear="2015"
              endYear="2018"
              jobName="Netflix"
              jobDescription="Make awesome romcom movies"
            />
            <Experience
              startYear="2014"
              endYear="2014"
              jobName="Starbucks"
              jobDescription="Make awesome beverages"
            />{" "}
            <hr style={{ borderTop: "3px solid #999999" }} />
            <h2>Technical Skills</h2>
            <Skills skill="JavaScript" progress={75} />
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="Ruby on Rails" progress={100} />
            <Skills skill="React" progress={50} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
