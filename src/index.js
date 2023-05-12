import React from 'react';
import 'react-day-picker/dist/style.css';
import ReactDOM from 'react-dom/client';
import { Carousel, initTE } from 'tw-elements';
import App from './App';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import './index.css';
initTE({ Carousel });

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
