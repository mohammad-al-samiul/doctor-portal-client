import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import 'react-day-picker/dist/style.css';
import ReactDOM from 'react-dom/client';
import { Carousel, initTE } from 'tw-elements';
import App from './App';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import './index.css';
initTE({ Carousel });
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </QueryClientProvider>
);
