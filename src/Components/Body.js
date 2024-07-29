import React, { useEffect } from "react";
import Browser from "./Browser";
import { Login } from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
