import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main/Main';

import DashboardLayout from '../../Layouts/DashboardLayout/DashboardLayout';
import Appointment from '../../Pages/Appointment/Appointment/Appointment';
import AddDoctor from '../../Pages/Dashboard/AddDoctor/AddDoctor';
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers';
import MyAppointment from '../../Pages/Dashboard/Dashboard/MyAppointment/MyAppointment';
import ManageDoctor from '../../Pages/Dashboard/ManageDoctor/ManageDoctor';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Signup from '../../Pages/Signup/Signup';
import AdminRoute from '../AdminRoute/AdminRoute';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
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
      }
    ]
  }
]);
