import React from 'react';
import 'react-day-picker/dist/style.css';
import ReactDOM from 'react-dom/client';

import App from './App';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
