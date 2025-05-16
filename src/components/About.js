import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am a <b>Computer Science</b> graduate from the
        <a href="https://www.comp.nus.edu.sg/">
          {" "}
          National University of Singapore
          {" "}
        </a>
        and currently working as a software engineer at
        <a href="https://www.dell.com/en-sg/dt/corporate/about-us/who-we-are.htm">
          {" "}
          Dell Technologies
          {" "}
        </a>
        under the
        <a href="https://www.dell.com/en-in/dt/solutions/edge-computing/index.htm#collapse&tab0=0&tab1=0">
          {" "}
          Edge Portfolio and Solutions Group
        </a>
        .
      </p>
    );
    const two = (
      <p>
        Outside of work, I enjoy staying active and keeping fit, with a focus on strength training and healthy eating.
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:nicole.joseph2122@gmail.com">
          nicole.joseph2122@gmail.com
        </a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one, two, three];

    const tech_stack = [
      "Golang",
      "Python",
      "C++",
      "Java",
      "SQL",
      "Node.js",
      "React",
      "Figma"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
              {[three]}
            </div>
            <div className="about-image">
              <img src={"../assets/me.png"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
