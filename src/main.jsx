import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Home from "./components/Home/Home.jsx";
import ExploreJobs from "./components/ExploreJobs/ExploreJobs.jsx";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs.jsx";
import Login from "./components/Login/Login.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import { loadCategoriesData, loadJobsData } from "./LoadData/LoadData.js";
import JobDetail from "./components/JobDetail/JobDetail.jsx";
import loadAppliedData from "./LoadAppliedData/LoadAppliedData.js";
import Signup from "./components/Signup/Signup.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import RedirectError from "./components/RedirectError/RedirectError.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const { categories } = await loadCategoriesData();
          const { jobs } = await loadJobsData();
          return { categories, jobs };
        },
      },
      {
        path: "/explore_jobs",
        element: <ExploreJobs></ExploreJobs>,
        loader: loadJobsData,
        errorElement: <RedirectError />,
      },
      {
        path: "/explore_jobs/:jobID",
        element: <JobDetail></JobDetail>,
      },
      {
        path: "/applied_jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: loadAppliedData,
        errorElement: <RedirectError />,
      },
      {
        path: "/Login",
        element: <Login></Login>,
        errorElement: <RedirectError />,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
        errorElement: <RedirectError />,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
