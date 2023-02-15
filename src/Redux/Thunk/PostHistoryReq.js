import { BlogHistoryAdd } from "../Actions/BlogActions";

const BlogHistoryReq = (blog) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      "https://blog-server-beryl.vercel.app/blog-post-history",
      {
        method: "POST",
        body: JSON.stringify(blog),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(
        BlogHistoryAdd({
          _id: data.insertedId,
          ...blog,
        })
      );
    }
  };
};

export default BlogHistoryReq;
