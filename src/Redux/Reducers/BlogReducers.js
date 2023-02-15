import {
  ADD_CONTENT,
  DATE_OF_LAST,
  DELETE_CONTENT,
  GET_CONTENT,
  LOAD_BLOG_HISTORY_CONTENT,
  UPDATE_CONTENT,
} from "../ActionType/ActionType";

const initialState = {
  blog: [],
  historyBlog: [],
};

const BlogReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        blog: action.payload,
      };
    case LOAD_BLOG_HISTORY_CONTENT:
      return {
        ...state,
        historyBlog: action.payload,
      };
    case ADD_CONTENT:
      return {
        ...state,
        blog: [...state.blog, action.payload],
      };
    case DELETE_CONTENT:
      return {
        ...state,
        blog: state.blog.filter((blog) => blog._id !== action.payload),
      };
    case UPDATE_CONTENT:
      const selectedBlog = state.blog.filter(
        (blg) => blg._id !== action.payload._id
      );
      return {
        ...state,
        blog: [...selectedBlog, action.payload],
      };

    case DATE_OF_LAST:
      return {
        ...state,
        blog: state.blog.sort((a, b) =>
          new Date(a.date) > new Date(b.date) ? -1 : 1
        ),
      };
    default:
      return state;
  }
};

export default BlogReducers;
