import React from "react";
import Browser from "./Browser";
import { Login } from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Browser />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
