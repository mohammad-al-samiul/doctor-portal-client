import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main/Main';

import DashboardLayout from '../../Layouts/DashboardLayout/DashboardLayout';
import Appointment from '../../Pages/Appointment/Appointment/Appointment';
import MyAppointment from '../../Pages/Dashboard/Dashboard/MyAppointment/MyAppointment';
import Users from '../../Pages/Dashboard/Users/Users';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Signup from '../../Pages/Signup/Signup';
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
        element: <Users />
      }
    ]
  }
]);
