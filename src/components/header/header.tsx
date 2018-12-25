import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Reviews from "../review/reviews";
import AddReview from "../addReview/addReview";

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row" />
        <div className="row">
          <Router>
            <div>
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/topics">Topics</Link>
                </li>
              </ul>

              <hr />

              <Route path="/home" render={props => <Reviews {...props} />} />
              <Route
                path="/review/:id"
                render={props => <AddReview {...props} />}
              />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default Header;
