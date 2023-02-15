import {
  ADD_CONTENT,
  BLOG_HISTORY_CONTENT,
  DATE_OF_LAST,
  DELETE_CONTENT,
  GET_CONTENT,
  LOAD_BLOG_HISTORY_CONTENT,
  REMOVE_KEYWORD,
  TOGGLE_KEYWORD,
  UPDATE_CONTENT,
} from "../ActionType/ActionType";

export const LoadData = (blogs) => {
  return {
    type: GET_CONTENT,
    payload: blogs,
  };
};

export const HistoryLoadData = (blogs) => {
  return {
    type: LOAD_BLOG_HISTORY_CONTENT,
    payload: blogs,
  };
};

export const BlogAdd = (blog) => {
  return {
    type: ADD_CONTENT,
    payload: blog,
  };
};

export const BlogHistoryAdd = (blog) => {
  return {
    type: BLOG_HISTORY_CONTENT,
    payload: blog,
  };
};

export const BlogUpdate = (blog) => {
  return {
    type: UPDATE_CONTENT,
    payload: blog,
  };
};

export const BlogRemove = (id) => {
  return {
    type: DELETE_CONTENT,
    payload: id,
  };
};

export const BlogKeywords = (keyword) => {
  return {
    type: TOGGLE_KEYWORD,
    payload: keyword,
  };
};

export const RemoveKeywords = (keyword) => {
  return {
    type: REMOVE_KEYWORD,
    payload: keyword,
  };
};

export const LastDate = () => {
  return {
    type: DATE_OF_LAST,
  };
};
