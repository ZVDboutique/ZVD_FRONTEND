import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import DashboardLayout from './Layouts/DashboardLayout';
import AdminUser from './Pages/AdminUsers';
import CompanyInformation from './Pages/Authentication/CompanyInformation';
import KycVerfication from './Pages/Authentication/KycVerfication';
import Login from './Pages/Authentication/Login';
import Registration from './Pages/Authentication/Registeration';
import ClientMaster from './Pages/ClientMaster';
import CompanyMaster from './Pages/CompanyMaster';
import Dashboard from './Pages/Dashboard';
import DiamondListing from './Pages/DiamondListing';
import NotFound from './Pages/NotFound';
import OrderTransactions from './Pages/OrderTransactions';
import Stock from './Pages/Stocks';
import Subscription from './Pages/Subscription';
import WebTracking from './Pages/WebTracking';
import Website from './Website';
import Contact from './Pages/Contact';
import About from './Pages/About';
export const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/',
    element: <Website />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/sign-up',
    element: <Registration />,
  },
  {
    path: '/sign-up?kyc-verification',
    element: <KycVerfication />,
  },
  {
    path: '/sign-up?company-information',
    element: <CompanyInformation />,
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            path: '/dashboard',
            element: <Dashboard />,
          },
          {
            path: '/stock',
            element: <Stock />,
          },

          {
            path: '/adminUser',
            element: <AdminUser />,
          },
          {
            path: '/company',
            element: <CompanyMaster />,
          },
          {
            path: '/clients',
            element: <ClientMaster />,
          },
          {
            path: '/web-tracking',
            element: <WebTracking />,
          },
          {
            path: '/subscription',
            element: <Subscription />,
          },
          {
            path: '/diamond-listing',
            element: <DiamondListing />,
          },
          {
            path: '/orders-transactions',
            element: <OrderTransactions />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
