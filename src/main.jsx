import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Signin } from "./components/Signin.jsx";
import { SignUp } from "./components/Signup.jsx";
import Home from "./components/Home.jsx";

function Integration() {
  return (
    <>
      <Signin />
      <SignUp />
      <Home />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
