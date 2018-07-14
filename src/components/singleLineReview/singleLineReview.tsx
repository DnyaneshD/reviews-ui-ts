import * as React from "react";
import "./SingleLineReview.scss";
import { Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class SingleLineReview extends React.PureComponent<any> {
  render() {
    return (
      <Col xs={6} xsOffset={2}>
        <div className="container">
          <div className="left">
            <p>
              Read by <br />
              {this.props.numberOfViews}
            </p>
          </div>
          <div className="right">
            {" "}
            <a onClick={this.topicClick}>{this.props.topic}</a> <br />
            On {this.props.lastUpdated}
          </div>
        </div>
      </Col>
    );
  }

  topicClick = e => {
    this.props.history.push("/review/" + this.props.id);
  };
}

export default withRouter(SingleLineReview);
