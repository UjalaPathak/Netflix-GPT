import React, { useEffect } from "react";
import Browser from "./Browser";
import { Login } from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

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

  const handleAuthStateChanged = (user) => {
    if (user) {
      const { uid, email, displayName } = user;
      dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
    } else {
      // User is signed out
      dispatch(removeUser());
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, handleAuthStateChanged);
  }, []);

  return <RouterProvider router={appRouter} />;
};

export default Body;
