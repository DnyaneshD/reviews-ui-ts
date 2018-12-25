import { fetchReviewByReviewId } from "./actions";
import { ReviewModel } from "./reviewModel";

export function fetchReviewDetails(reviewId) {
  return fetch("http://localhost:3000/api/review/" + reviewId).then(
    response => {
      return response.json();
    }
  );
}

// export function submitReview(url) {
//   return dispatch => {
//     fetch(url)
//       .then(response => {
//         return response.json();
//       })
//       .then(items => {
//         dispatch(submitReview(items));
//       });
//   };
// }

export function submitReviewDetails(review: ReviewModel) {
  const submitDataObject: any = {
    Id: review.Id,
    topic: review.topic,
    autherReview: review.authorReview,
    votes: 0,
    isShowAddCommentsComponent: false,
    socialReviews: []
  };

  fetch("http://localhost:3000/api/review", {
    method: submitDataObject.Id ? "PUT" : "POST",
    body: JSON.stringify(submitDataObject),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }).then(response => {
    const loc = new Location();
    loc.pathname = "/home";
    return response.json();
  });
}
