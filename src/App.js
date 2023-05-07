import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Routes';

const App = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
