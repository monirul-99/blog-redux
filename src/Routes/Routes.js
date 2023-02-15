import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import About from "../Pages/About/About";
import AddPost from "../Pages/AddPost/AddPost";
import BlogsInfo from "../Pages/BlogsInfo/BlogsInfo";
import Category from "../Pages/Category/Category";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Features from "../Pages/Features/Features";
import Home from "../Pages/Home/Home";
import PostEdit from "../Pages/PostManage/PostEdit";
import PostManage from "../Pages/PostManage/PostManage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/blog-info/:id",
        loader: ({ params }) =>
          fetch(`https://blog-server-beryl.vercel.app/blog-info/${params.id}`),
        element: <BlogsInfo />,
      },

      {
        path: "/categories",
        element: <Category />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <AddPost />,
      },
      {
        path: "/dashboard/addPost",
        element: <AddPost />,
      },
      {
        path: "/dashboard/postManager",
        element: <PostManage />,
      },
      {
        path: "/dashboard/blog-edit/:id",
        loader: ({ params }) =>
          fetch(`https://blog-server-beryl.vercel.app/blog-edit/${params.id}`),
        element: <PostEdit />,
      },
    ],
  },
]);
