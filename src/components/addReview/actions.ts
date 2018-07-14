export function submitReviewsData(items) {
  return {
    type: "SUBMIT_REVIEW",
    items
  };
}

export function changeProperty(propertyKey, value) {
  return {
    type: "CHANGE_PROPERTY_REVIEW",
    propertyKey,
    value
  };
}

export function fetchReviewByReviewId(reviewDetails) {
  return {
    type: "GET_RWEVIEW_BY_ID",
    reviewDetails
  };
}

export function fetchReviewDetailsByReviewId(reviewId) {
  return dispatch => {
    fetch("http://localhost:3002/api/review/" + reviewId)
      .then(response => {
        return response.json();
      })
      .then(reviewDetails => {
        dispatch(fetchReviewByReviewId(reviewDetails));
      });
  };
}

export function submitReview(url) {
  return dispatch => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(items => {
        dispatch(submitReview(items));
      });
  };
}
