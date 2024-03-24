import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app/containers/App';
import Edit from './app/containers/Edit';
import ErrorPage from './app/containers/ErrorPage';
import { store } from './app/data/store';
import { Provider } from 'react-redux';
import View from './app/containers/View';
import Intro from './app/containers/Intro';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Buffer } from 'buffer';
import { WagmiProvider } from 'wagmi';
import { config } from './wagmi';

const router = createBrowserRouter([
  { path: '/', element: <App />, errorElement: <ErrorPage /> },
  { path: 'edit/:pageId', element: <Edit />, errorElement: <ErrorPage /> },
  { path: 'create/:pageId', element: <Edit />, errorElement: <ErrorPage /> },
  { path: 'view/:pageId', element: <View />, errorElement: <ErrorPage /> },
  { path: 'intro', element: <Intro />, errorElement: <ErrorPage /> },
  { path: '*', element: <ErrorPage /> },
]);

window.Buffer = Buffer;

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
);
