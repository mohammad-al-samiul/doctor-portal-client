import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main/Main';

import DashboardLayout from '../../Layouts/DashboardLayout/DashboardLayout';
import About from '../../Pages/About/About';
import Appointment from '../../Pages/Appointment/Appointment/Appointment';
import Contact from '../../Pages/Contact/Contact';
import AddDoctor from '../../Pages/Dashboard/AddDoctor/AddDoctor';
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers';
import MyAppointment from '../../Pages/Dashboard/Dashboard/MyAppointment/MyAppointment';
import ManageDoctor from '../../Pages/Dashboard/ManageDoctor/ManageDoctor';
import Payment from '../../Pages/Dashboard/Payment/Payment';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Reviews from '../../Pages/Reviews/Reviews';
import DisplayError from '../../Pages/Shared/DisplayError/DisplayError';
import Signup from '../../Pages/Signup/Signup';
import AdminRoute from '../AdminRoute/AdminRoute';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <DisplayError />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/appointment',
        element: <Appointment />
      },
      {
        path: '/about-us',
        element: <About />
      },
      {
        path: '/contact-us',
        element: <Contact />
      },
      {
        path: '/reviews',
        element: <Reviews />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Signup />
      }
    ]
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    errorElement: <DisplayError />,
    children: [
      {
        path: '/dashboard',
        element: <MyAppointment />
      },
      {
        path: '/dashboard/allusers',
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        )
      },
      {
        path: '/dashboard/adddoctor',
        element: (
          <AdminRoute>
            <AddDoctor />
          </AdminRoute>
        )
      },
      {
        path: '/dashboard/managedoctor',
        element: (
          <AdminRoute>
            <ManageDoctor />
          </AdminRoute>
        )
      },
      {
        path: '/dashboard/payment/:id',
        element: <Payment />,
        loader: ({ params }) =>
          fetch(`https://doctors-portal-server-chi-seven.vercel.app/bookings/${params.id}`)
      }
    ]
  }
]);
