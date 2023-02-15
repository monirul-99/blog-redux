import { BlogRemove } from "../Actions/BlogActions";

const BlogDelete = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://blog-server-beryl.vercel.app/blog-remove/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(BlogRemove(id));
    }
  };
};

export default BlogDelete;
