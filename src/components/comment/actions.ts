export function submitCommentData(reviewId) {
  return {
    type: "SUBMIT_COMMENT",
    reviewId
  };
}

export function changeProperty(propertyKey, value) {
  return {
    type: "CHANGE_PROPERTY_COMMENT",
    propertyKey,
    value
  };
}

export function submitComment(url) {
  return dispatch => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(items => {
        dispatch(submitComment(items));
      });
  };
}
