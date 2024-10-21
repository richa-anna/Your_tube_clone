import { combineReducers } from "redux";
import authreducer from "./auth";
import currentuserreducer from "./currentuser";
import chanelreducer from "./channel";
import videoreducer from "./video";
import commentreducer from "./comment.js";
import historyreducer from "./history.js";
import watchlaterreducer from "./watchlater.js";
import likedvideoreducer from "./likedvideo.js";
export default combineReducers({
  authreducer,
  currentuserreducer,
  chanelreducer,
  videoreducer,
  commentreducer,
  historyreducer,
  watchlaterreducer,
  likedvideoreducer,
});
