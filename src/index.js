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

const router = createBrowserRouter([
  { path: '/', element: <App />, errorElement: <ErrorPage /> },
  { path: 'edit/:pageId', element: <Edit />, errorElement: <ErrorPage /> },
  { path: 'view/:pageId', element: <View />, errorElement: <ErrorPage /> },
  { path: 'intro', element: <Intro />, errorElement: <ErrorPage /> },
  { path: '*', element: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
