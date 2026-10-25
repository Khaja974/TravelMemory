
import React from "react";
import "./App.css";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Header from "./components/UIC/Header";
import Home from "./components/pages/Home";
import AddExperience from "./components/pages/AddExperience";
import ExperienceDetails from "./components/pages/ExperienceDetails";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "my-experiences",
        element: <Home />,
      },
      {
        path: "addexperience",
        element: <AddExperience />,
      },
      {
        path: "experiencedetails/:id",
        element: <ExperienceDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
