import React from "react";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import BlogUpdateReq from "../../Redux/Thunk/BlogUpdateReq";

const PostEdit = () => {
  const edit = useLoaderData();
  const { title, keywords, describe, _id } = edit;

  const dispatch = useDispatch();

  const formUpdateSubmit = (e) => {
    e.preventDefault();
    console.log("Hi Hello");
    const form = e.target;
    const image = form.image.files[0];
    const title = form.blogTitle.value;
    const keywords = form.keywordsName.value;
    const describe = form.describe.value;
    const Time = new Date().toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=70e236d404851847a6c8351a4a847f4b`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const post = {
            img: imgData.data.url,
            title,
            date: Time,
            keywords,
            describe,
            _id,
          };
          console.log(post);
          dispatch(BlogUpdateReq(post));
        }
      });
  };

  return (
    <div>
      <form onSubmit={formUpdateSubmit} className="px-10 space-y-10 bottom-10">
        <div className="mt-10">
          <input
            name="image"
            accept="images/*"
            id="dropzone-file"
            type="file"
            className="py-3 text-sm pl-5"
          />
        </div>

        <input
          className="w-full border py-3 text-sm pl-5 rounded-[3px]"
          placeholder="Blog title"
          name="blogTitle"
          type="text"
          defaultValue={title}
        />
        <input
          className="w-full border py-3 text-sm pl-5 rounded-[3px]"
          placeholder="Keywords Name"
          name="keywordsName"
          type="text"
          defaultValue={keywords}
        />

        <textarea
          name="describe"
          defaultValue={describe}
          placeholder="Blog Description . . ."
          className="w-full border py-3 text-sm pl-5 rounded-[3px] h-64"
        ></textarea>

        <input
          className="bg-[#0c5e79] text-white py-2 px-5 mt-20 rounded cursor-pointer"
          type="submit"
          value="Add Student"
        />
      </form>
    </div>
  );
};

export default PostEdit;
