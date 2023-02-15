import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GetBlogData from "../../Redux/Thunk/GetBlogData";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { RiCloseFill } from "react-icons/ri";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import BlogSingleCard from "./BlogSingleCard";
import { LastDate, RemoveKeywords } from "../../Redux/Actions/BlogActions";

const people = [
  { id: 2, name: "Sort by the first upload" },
  { id: 1, name: "Sort by last upload" },
];

const BlogCard = () => {
  const [selected, setSelected] = useState(people[0]);
  const filters = useSelector((state) => state.filters.filters);
  const blogs = useSelector((state) => state.blogs.blog);
  const { keyword } = filters;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetBlogData());
  }, [dispatch]);

  let content;

  if (blogs.length) {
    content = blogs.map((blog, inx) => (
      <BlogSingleCard key={inx} blog={blog}></BlogSingleCard>
    ));
  }

  if (blogs.length && keyword.length) {
    content = blogs
      .filter((blog) => {
        if (keyword.length) {
          return keyword.includes(blog.keywords);
        }
        return blogs;
      })
      .map((blog, inx) => <BlogSingleCard key={inx} blog={blog} />);
  }

  return (
    <div className="container mx-auto">
      <aside className="flex justify-between items-center py-5">
        <div className="flex items-center space-x-10">
          <h1 className="font-Poppins font-semibold text-xl">Featured Blogs</h1>
          {keyword.length > 0 && (
            <div className="inline-flex" role="group" aria-label="Button group">
              <button className="h-8 px-5 text-black font-Poppins transition-colors duration-150 bg-gray-300 rounded-l-full focus:shadow-outline hover:bg-gray-500 hover:text-white">
                {keyword}
              </button>
              <button
                onClick={() => dispatch(RemoveKeywords(keyword))}
                className="h-8 px-5 text-white transition-colors rounded-r-full duration-150 bg-gray-300 focus:shadow-outline hover:bg-gray-500"
              >
                <RiCloseFill color="black" size={20} />
              </button>
            </div>
          )}
        </div>
        <div className="w-56 font-Poppins">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative">
              <Listbox.Button className="relative text-slate-800 w-full cursor-pointer py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{selected.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-3.5 w-full overflow-auto bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {people.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      onClick={() => dispatch(LastDate())}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-amber-100 text-amber-900"
                            : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </aside>

      <section className="grid grid-cols-4 gap-10 mb-10">{content}</section>
    </div>
  );
};

export default BlogCard;
