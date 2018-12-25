export const Submit_Review = "SUBMIT_REVIEW";
export const ChangeProperty_Review = "CHANGE_PROPERTY_REVIEW";
export const Get_ReviewById = "GET_REVIEWBYID";

export function submitReviewsData(items) {
  return {
    type: Submit_Review,
    items
  };
}

export function changeProperty(propertyKey, value) {
  return {
    type: ChangeProperty_Review,
    propertyKey,
    value
  };
}

export function fetchReviewByReviewId(reviewDetails) {
  return {
    type: Get_ReviewById,
    reviewDetails
  };
}
