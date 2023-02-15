import { BlogUpdate } from "../Actions/BlogActions";
const BlogUpdateReq = (blog) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://blog-server-beryl.vercel.app/post-update/${blog._id}`,
      {
        method: "PUT",
        body: JSON.stringify(blog),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(
        BlogUpdate({
          _id: data.insertedId,
          ...blog,
        })
      );
    }
  };
};

export default BlogUpdateReq;
