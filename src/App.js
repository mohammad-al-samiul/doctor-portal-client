import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { router } from './Routes/Routes/Routes';

const App = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position="top-center"></ToastContainer>
    </div>
  );
};

export default App;
