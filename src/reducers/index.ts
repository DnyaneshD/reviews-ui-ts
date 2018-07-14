import { combineReducers } from "redux";
import { items } from "./items";
import { addReviewReducer } from "../components/addReview/reducer";
//import { addCommentReducer } from "../components/comment/comment";

export default combineReducers({
  items,
  addReviewReducer
  // addCommentReducer
});
