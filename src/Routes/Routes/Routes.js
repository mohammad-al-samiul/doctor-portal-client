import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main/Main';

import Appointment from '../../Pages/Appointment/Appointment/Appointment';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Signup from '../../Pages/Signup/Signup';

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
  }
]);
