import {
  Submit_Review,
  ChangeProperty_Review,
  Get_ReviewById
} from "./actions";
import { submitReviewDetails } from "./api";

function initialState() {
  return {
    review: null //new ReviewModel()
  };
}

export function addReviewReducer(state = initialState(), action) {
  switch (action.type) {
    case Submit_Review:
      submitReviewDetails(state.review);
      return state;

    case ChangeProperty_Review:
      return changeProperty(state, action);

    case Get_ReviewById:
      return {
        ...state,
        review: action.reviewDetails
      };

    default:
      return state;
  }

  function changeProperty(state, action) {
    return {
      ...state,
      [action.propertyKey]: action.value
    };
  }
}
