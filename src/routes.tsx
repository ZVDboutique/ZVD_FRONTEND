import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import DashboardLayout from "./Layouts/DashboardLayout";
import AdminUser from "./Pages/AdminUsers";
import CompanyInformation from "./Pages/Authentication/CompanyInformation";
import KycVerfication from "./Pages/Authentication/KycVerfication";
import Login from "./Pages/Authentication/Login";
import Registration from "./Pages/Authentication/Registeration";
import ClientMaster from "./Pages/ClientMaster";
import CompanyMaster from "./Pages/CompanyMaster";
import Dashboard from "./Pages/Dashboard";
import NotFound from "./Pages/NotFound";
import Stock from "./Pages/Stocks";
import Subscription from "./Pages/Subscription";
import WebTracking from "./Pages/WebTracking";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Registration />,
  },
  {
    path: "/sign-up?kyc-verification",
    element: <KycVerfication />,
  },
  {
    path: "/sign-up?company-information",
    element: <CompanyInformation />,
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/stock",
            element: <Stock />,
          },

          {
            path: "/adminUser",
            element: <AdminUser />,
          },
          {
            path: "/company",
            element: <CompanyMaster />,
          },
          {
            path: "/clients",
            element: <ClientMaster />,
          },
          {
            path: "/web-tracking",
            element: <WebTracking />,
          },
          {
            path: "/subscription",
            element: <Subscription />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
