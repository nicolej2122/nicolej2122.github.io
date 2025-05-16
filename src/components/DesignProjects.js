import React from "react";
import "../styles/DesignProjects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinksDesign from "./ExternalLinksDesign";

class DesignProjects extends React.Component {
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
    const spotlightProjects = {
      "Split": {
        title: " ",
        desc:
          "Design portfolio and hi-fidelity prototype of a peer-to-peer car sharing mobile platform",
        techStack: "Figma, Balsamiq",
        link: "https://www.figma.com/proto/JmCP6csTkqnsjJnJTAljSj/Split---Individual-Design-Exercise?node-id=246%3A1559&scaling=scale-down&page-id=0%3A1&starting-point-node-id=246%3A1541&show-proto-sidebar=1",
        open: "https://drive.google.com/file/d/15EMrOYxKf6JFg-i0A-9BeyYHwH485QjA/view?usp=sharing",
        image: "../assets/split.png"
      },
      "Resumade": {
        title: " ",
        desc:
          "Design portfolio and hi-fidelity prototype of a resume-tailoring web application",
        techStack: "Figma, Balsamiq",
        link: "https://www.figma.com/proto/6Z8hDo8hX5MJRJRGUyB6xN/G3-Final-Prototype?node-id=6%3A23201&scaling=scale-down&page-id=0%3A1&starting-point-node-id=6%3A23201&show-proto-sidebar=1",
        open: "https://uxfol.io/p/a4885f92/034c91f0",
        image: "../assets/resumade.png"
      }
    };
    const designprojects = {
    };

    return (
      <div id="designprojects">
        <div className="section-header ">
          <span className="section-title">/ design-creations</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinksDesign
                    figmaLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinksDesign>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(spotlightProjects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinksDesign
                      figmaLink={spotlightProjects[key]["link"]}
                      openLink={spotlightProjects[key]["open"]}
                    ></ExternalLinksDesign>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{spotlightProjects[key]["desc"]}</div>
                  <div className="card-tech">{spotlightProjects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default DesignProjects;
