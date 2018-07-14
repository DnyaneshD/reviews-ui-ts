import * as React from "react";
import { connect } from "react-redux";
import {
  submitReviewsData,
  changeProperty,
  fetchReviewDetailsByReviewId
} from "./actions";
import { Grid, Row, Col, Button } from "react-bootstrap";
import "./addReview.scss";
import { withRouter } from "react-router-dom";
import Comment from "../Comment/Comment";

class AddReview extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      showAddCommentsButton: true
    };
  }

  private handleSubmitReview = event => {
    this.props.submitReview("http://localhost:3002/api/reviews");
  };

  private handleAddComments = event => {
    this.props.changeProperty("isShowAddCommentsComponent", true);
  };

  componentWillMount() {
    if (this.props.match.params.id !== "newReview") {
      this.props.fetchReviewDetailsByReviewId(this.props.match.params.id);
      this.setState({
        showAddCommentsButton: true
      });
    }
  }

  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid container">
            <Col xs={10} md={12}>
              Reviews. Enjoy putting reviews here about anything and everything
            </Col>
          </Row>
          <Row className="show-grid container">
            <Col xs={2} md={2}>
              Title
            </Col>
            <Col xs={10} md={10}>
              <input
                name="topic"
                type="text"
                value={this.props.topic}
                onChange={this.handleChange.bind(this)}
                placeholder="Give a nice title..."
              />
            </Col>
          </Row>
          <Row className="show-grid container">
            <Col xs={2} md={2}>
              Description
            </Col>
            <Col xs={10} md={10}>
              <textarea
                name="description"
                value={this.props.description}
                onChange={this.handleChange.bind(this)}
                placeholder="Write your own description do not copy paste..."
              />
            </Col>
          </Row>
          <Row className="show-grid container">
            <Col xs={2} md={2}>
              Tags
            </Col>
            <Col xs={10} md={10}>
              <input type="text" />
            </Col>
          </Row>
          <Row className="show-grid container .col-xs-4">
            <Col xs={10} md={10}>
              <Button
                className="btn pull-right"
                onClick={this.handleSubmitReview}>
                Submit Review
              </Button>
            </Col>
          </Row>
          <Row className="show-grid container">
            <Col xs={10} md={10}>
              {this.state.showAddCommentsButton ? (
                <Button onClick={this.handleAddComments}>Comments</Button>
              ) : null}
            </Col>
          </Row>

          {this.props.isShowAddCommentsComponent ? <Comment /> : null}
          <Row className="show-grid container">
            <Col xs={10} md={10}>
              {this.props.socialReviews
                ? this.props.socialReviews.map(socialReview => {
                    const commentProps = {
                      key: socialReview.id,
                      Id: socialReview.id,
                      comment: socialReview.review
                    };
                    return <Comment {...commentProps} />;
                  })
                : null}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  handleChange(e) {
    this.props.changeProperty(e.target.name, e.target.value);
  }
}

const mapStateToProps = props => {
  return {
    // Id: props.addReviewReducer.Id,
    // topic: props.addReviewReducer.topic,
    // description: props.addReviewReducer.description,
    // socialReviews: props.addReviewReducer.socialReviews,
    // isShowAddCommentsComponent:
    //   props.addReviewReducer.isShowAddCommentsComponent
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeProperty: (propertyKey, value) =>
      dispatch(changeProperty(propertyKey, value)),
    submitReview: url => dispatch(submitReviewsData(url)),
    fetchReviewDetailsByReviewId: reveiwId =>
      dispatch(fetchReviewDetailsByReviewId(reveiwId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddReview));
