import { CommentModal } from "./commentModal";

function initialState(): CommentModal {
  return {
    Id: "",
    reviewId: "",
    comment: ""
  };
}

export function addCommentReducer(state = initialState(), action) {
  switch (action.type) {
    case "SUBMIT_COMMENT":
      submitComment(action);
      return state;

    case "CHANGE_PROPERTY_COMMENT":
      return changeProperty(state, action);

    default:
      return state;
  }

  function submitComment(action) {
    const submitCommentObject = {
      Id: state.Id,
      review: state.comment,
      reviewId: action.reviewId
    };

    fetch("http://localhost:3000/api/addsocialreview", {
      method: submitCommentObject.Id ? "PUT" : "POST",
      body: JSON.stringify(submitCommentObject),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }).then(response => {
      const loc = new Location();
      loc.pathname = "/home";
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
