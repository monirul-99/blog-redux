import {
  DATE_OF_FAST,
  REMOVE_KEYWORD,
  TOGGLE_KEYWORD,
} from "../ActionType/ActionType";

const initialState = {
  filters: {
    keyword: [],
  },
};

const BlogFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_KEYWORD:
      if (!state.filters.keyword.includes(action.payload)) {
        return {
          ...state,
          filters: {
            ...state.filters,
            keyword: [...state.filters.keyword, action.payload],
          },
        };
      } else {
        return {
          ...state,
          filters: {
            ...state.filters,
            keyword: [...state.filters.keyword],
          },
        };
      }

    case REMOVE_KEYWORD:
      return {
        ...state,
        filters: {
          ...state.filters,
          keyword: (state.filters.keyword = []),
        },
      };
    default:
      return state;
  }
};

export default BlogFilterReducer;
