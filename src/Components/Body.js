import React from "react";
import Browser from "./Browser";
import { Login } from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/browser",
      element: <Browser />,
      errorElement: <ErrorPage />,
    },
    {
      path: "*", // Catch-all route for undefined paths
      element: <ErrorPage />, // Display error page for undefined paths
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
