import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root, { loader as rootLoader, action as rootAction } from './routes/Root'
import ErrorPage from './error-page';
import Task, {loader as taskLoader,} from './routes/task';
import EditTask, {action as editAction,} from './routes/edit';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
