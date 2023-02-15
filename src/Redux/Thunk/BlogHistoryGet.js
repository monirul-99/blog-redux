import { HistoryLoadData } from "../Actions/BlogActions";

const BlogHistoryGet = () => {
  return async (dispatch, getState) => {
    const res = await fetch(
      "https://blog-server-beryl.vercel.app/blog-get-history"
    );
    const data = await res.json();

    if (data.length) {
      dispatch(HistoryLoadData(data));
    }
  };
};

export default BlogHistoryGet;
