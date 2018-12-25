import { CommentModal } from "../comment/commentModal";

export class ReviewModel {
  Id: string = "";
  topic: string = "";
  authorReview: string = "";
  isShowAddCommentsComponent: boolean = null;
  socialReviews = [];
}
