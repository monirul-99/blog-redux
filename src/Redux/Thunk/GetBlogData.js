import { LoadData } from "../Actions/BlogActions";

const GetBlogData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://blog-server-beryl.vercel.app/blog-get");
    const data = await res.json();

    if (data.length) {
      dispatch(LoadData(data));
    }
  };
};

export default GetBlogData;
