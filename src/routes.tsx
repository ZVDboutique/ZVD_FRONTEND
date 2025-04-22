import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import About from "./Pages/About";
import CompanyInformation from "./Pages/Authentication/CompanyInformation";
import KycVerfication from "./Pages/Authentication/KycVerfication";
import Login from "./Pages/Authentication/Login";
import Registration from "./Pages/Authentication/Registeration";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Registration />,
  },
  {
    path: "/kyc-verification",
    element: <KycVerfication />,
  },
  {
    path: "/company-information",
    element: <CompanyInformation />,
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
