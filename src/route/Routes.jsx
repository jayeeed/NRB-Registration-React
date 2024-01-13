import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import LandingPage from "../pages/LandingPage/LandingPage";
import Info from "./../pages/Info/Info";
import Sidebar from "../pages/Sidebar/Sidebar";
import Otp from "../pages/Otp/Otp";
import Registration from "../pages/Registration/Registration";

const routes = [
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/info", element: <Info /> },
      { path: "/profile", element: <Sidebar /> },
      { path: "/otp", element: <Otp /> },
      { path: "/registration", element: <Registration /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
