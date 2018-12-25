import * as React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import {
  changeProperty,
  submitReviewsData,
  fetchReviewByReviewId
} from "./actions";
import "./addReviewStyles.scss";
import Comment from "../Comment/Comment";
import { ReviewModel } from "./reviewModel";
import { fetchReviewDetails } from "./api";

interface IReviewProps {
  review: ReviewModel;
  match: any;
  socialReviews: any;
  isShowAddCommentsComponent: null;
}

interface IReviewDispatchProps {
  submitReviewDispatch: (url: string) => void;
  changePropertyDispatch: (property: string, value: any) => void;
  fetchReviewByReviewIdDispatch: (details: any) => any;
}

interface IReviewReduxProps extends IReviewProps, IReviewDispatchProps {}

interface IReviewState {
  showAddCommentsButton: boolean;
}

class AddReview extends React.Component<IReviewReduxProps, IReviewState> {
  constructor(props) {
    super(props);
    this.state = {
      showAddCommentsButton: null
    };
  }
  componentDidMount() {
    if (this.props.match.params.id !== "newReview") {
      fetchReviewDetails(this.props.match.params.id).then(details => {
        this.props.fetchReviewByReviewIdDispatch(details);
      });

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
                value={this.props.review.topic}
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
                value={this.props.review.authorReview}
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
              {this.props.review.socialReviews
                ? this.props.review.socialReviews.map(socialReview => {
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
    this.props.changePropertyDispatch(e.target.name, e.target.value);
  }

  private handleSubmitReview = event => {
    this.props.submitReviewDispatch("http://localhost:3000/api/reviews");
  };

  private handleAddComments = event => {
    this.props.changePropertyDispatch("isShowAddCommentsComponent", true);
  };
}

const mapStateToProps = (props: any): IReviewProps => {
  const { review } = props.addReviewReducer;

  const reviewProps: ReviewModel = new ReviewModel();
  if (review) {
    reviewProps.Id = review.Id;
    reviewProps.topic = review.topic;
    reviewProps.authorReview = review.autherReview;
    reviewProps.isShowAddCommentsComponent = review.isShowAddCommentsComponent;
    reviewProps.socialReviews = review.socialReviews;
  }

  return {
    review: reviewProps,
    match: null,
    socialReviews: null,
    isShowAddCommentsComponent:
      props.addReviewReducer.isShowAddCommentsComponent

    // Id: props.addReviewReducer.Id,
    // topic: props.addReviewReducer.topic,
    // description: props.addReviewReducer.description,
    // socialReviews: props.addReviewReducer.socialReviews,
    // isShowAddCommentsComponent:
    //   props.addReviewReducer.isShowAddCommentsComponent
  };
};

const mapDispatchToProps = (dispatch): IReviewDispatchProps => {
  return {
    changePropertyDispatch: (propertyKey, value) =>
      dispatch(changeProperty(propertyKey, value)),
    submitReviewDispatch: url => dispatch(submitReviewsData(url)),
    fetchReviewByReviewIdDispatch: details =>
      dispatch(fetchReviewByReviewId(details))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddReview));
