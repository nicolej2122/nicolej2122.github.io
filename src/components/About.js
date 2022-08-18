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
        I am currently a Year 3  <b>Computer Science</b> major at the
        <a href="https://www.comp.nus.edu.sg/">
          {" "}
          National University of Singapore
        </a>
        . 
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in following the developments of
        science. I also build terrariums and love cafe-hopping.
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
      "C",
      "Python",
      "C++",
      "Java",
      "Flutter",
      "HTML & CSS"
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
              <img src={"/assets/me.png"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
