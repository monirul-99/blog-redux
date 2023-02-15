import { combineReducers } from "redux";
import BlogReducers from "./BlogReducers";
import BlogFilterReducer from "./FilterBlogs";

const RootReducers = combineReducers({
  blogs: BlogReducers,
  filters: BlogFilterReducer,
});

export default RootReducers;
