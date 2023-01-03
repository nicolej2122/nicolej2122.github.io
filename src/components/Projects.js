import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
      "FoodStack": {
        title: "foodstack",
        desc:
          "A group food-ordering mobile app to cut down high delivery costs and skip the minimum order amount.",
        techStack: "Flutter + Dart, Firebase, Node.js + Javascript",
        link: "https://github.com/Team-APPetite/FoodStack",
        open: "https://docs.google.com/document/d/1rlbRK2gxNLM7VrQf2PNl_nj6aiuhsDKyiJ3leHSIkTU/edit",
        image: "../assets/foodstack.png"
      },
      "Intern Watcher": {
        title: "intern watcher",
        desc:
          "A desktop application for Human Resource Managers to track and manage internship applicants.",
        techStack: "Java",
        link: "https://github.com/nicolej2122/tp",
        open: "https://ay2122s1-cs2103t-f12-2.github.io/tp/",
        image: "../assets/internwatcher.png"
      }, 
      "FineSpine": {
        title: "finespine",
        desc:
          "An IoT system that aims to help the user maintain good posture while seated at their desk.                                                                 ",
        techStack: "Python, Java, React, Node.js, Flask, Flutter, Bash, OpenPose",
        link: "https://github.com/orgs/CS3237-Project/repositories",
        open: "https://drive.google.com/file/d/1fCSQ6ct4WdPVn8x1cHCbytt1bJHFDd_6/view?usp=sharing",
        image: "../assets/finespine.png"
      },
      "PeerPrep": {
        title: "peer prep",
        desc:
          "A web application that helps students prepare for their technical interviews by simulating the tech-interview environment with their fellow peers.",
        techStack: "Next.js, Express.js, MongoDB, Socket.io, Docker",
        link: "https://github.com/nicolej2122/cs3219-project-ay2223s1-g17",
        open: "https://docs.google.com/document/d/1smdWonXmZ3VBk595-3SHFbVn4_DZoTBSOyEA9CHCSlk/edit?usp=sharing",
        image: "../assets/peerprep.png"
      }
    };
    const projects = {
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ software-creations</span>
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
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
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
                    <ExternalLinks
                      githubLink={spotlightProjects[key]["link"]}
                      openLink={spotlightProjects[key]["open"]}
                    ></ExternalLinks>
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

export default Projects;
