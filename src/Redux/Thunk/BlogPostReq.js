import { BlogAdd } from "../Actions/BlogActions";

const BlogPostReq = (blog) => {
  return async (dispatch, getState) => {
    const res = await fetch("https://blog-server-beryl.vercel.app/blog-post", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(
        BlogAdd({
          _id: data.insertedId,
          ...blog,
        })
      );
    }
  };
};

export default BlogPostReq;
