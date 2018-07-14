import { Component } from "react";
import SingleLineReview from "../singleLineReview/singleLineReview";
import { connect } from "react-redux";
import { Grid, Row, Col, Button } from "react-bootstrap";
import { fetchItemsData } from "../../actions/items";
import React = require("react");
import "./reviews.scss";

class Reviews extends Component {
  addNewReview: any;
  constructor(public props: any) {
    super(props);
  }

  private handleAddReview = () => {
    this.props.history.push("/review/newReview");
  };

  render() {
    const gridInstance = (
      <div>
        <Grid>
          <Row className="show-grid container">
            <Col xs={12} md={12}>
              Reviews. Enjoy putting reviews here about anything and everything
            </Col>
            <Col xs={8} md={12}>
              <Button onClick={this.handleAddReview}>Add new Review</Button>
            </Col>
            {this.props.items.map(review => {
              let props = {
                key: review.id,
                id: review.id,
                topic: review.topic,
                numberOfViews: review.numberOfViews,
                lastUpdated: review.lastUpdated
              };
              return <SingleLineReview {...props} />;
            })}
          </Row>
        </Grid>

        <p className="App-intro">
          To get started, start getting expressed here.
        </p>
      </div>
    );
    return gridInstance;
  }

  componentWillMount() {
    this.props.fetchData("http://localhost:3000/api/reviews");
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(fetchItemsData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews);
