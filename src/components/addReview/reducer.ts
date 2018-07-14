function initialState() {
  return {
    Id: "",
    topic: "",
    description: "",
    isShowAddCommentsComponent: false
  };
}

export function addReviewReducer(state = initialState(), action) {
  switch (action.type) {
    case "SUBMIT_REVIEW":
      submitReview(state);
      return state;

    case "CHANGE_PROPERTY_REVIEW":
      return changeProperty(state, action);

    case "GET_RWEVIEW_BY_ID":
      return {
        ...state,
        Id: action.reviewDetails.id,
        topic: action.reviewDetails.topic,
        description: action.reviewDetails.autherReview,
        socialReviews: action.reviewDetails.socialReviews,
        isShowAddCommentsComponent: false
      };

    default:
      return state;
  }

  function submitReview(state) {
    const submitDataObject = {
      Id: state.Id,
      topic: state.topic,
      autherReview: state.description,
      votes: 0
    };

    fetch("http://localhost:3000/api/review", {
      method: submitDataObject.Id ? "PUT" : "POST",
      body: JSON.stringify(submitDataObject),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }).then(response => {
      // window.location = "home";
      return response.json();
    });
  }

  function changeProperty(state, action) {
    return {
      ...state,
      [action.propertyKey]: action.value
    };
  }
}
