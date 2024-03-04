import React, { StrictMode } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Root, { loader as rootLoader, action as rootAction } from './routes/Root'
import ErrorPage from './error-page';
import Task, {loader as taskLoader,} from './routes/task';
import EditTask, {action as editAction,} from './routes/edit';
import { action as destroyAction } from "./routes/destroy";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "tasks/:taskId",
        element: <Task />,
        loader: taskLoader,
      },
      {
        path: "tasks/:taskId/edit",
        element: <EditTask />,
        loader: taskLoader,
        action: editAction,
      },
      {
        path: "tasks/:taskId/destroy",
        action: destroyAction,
      },
    ]
  },
  ]);


  ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}>
        <Routes />
        </RouterProvider>
      </Provider>
    </StrictMode>
  );


