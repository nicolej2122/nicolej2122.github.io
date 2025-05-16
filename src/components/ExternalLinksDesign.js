import React from "react";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import Icon from '@mui/material/Icon';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

function FigmaIcon() {
  return (
    <Icon
      style={{ height: 30 }}>
      <img src="./assets/figma.png" alt="" />

    </Icon>
  );
}

class ExternalLinks extends React.Component {
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
    return (
      <span className="external-links">
        <a className="figma-icon" href={this.props.figmaLink}>
          <DesignServicesIcon
            style={{
              fontSize: 25,
              color: "var(--dark-navy)"
            }}
          ></DesignServicesIcon>
        </a>
        {this.props.openLink && (
          <a className="open-icon" href={this.props.openLink}>
            <OpenInBrowserIcon
              style={{
                fontSize: 25,
                color: "var(--dark-navy)"
              }}
            ></OpenInBrowserIcon>
          </a>
        )}
      </span>
    );
  }
}

export default ExternalLinks;
