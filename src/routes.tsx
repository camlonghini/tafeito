import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from './App';
import Tasks from './screen/Tasks';
import Login from './screen/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Login/>
      </App>
    ),
  },
  {
    path: "tarefas",
    element: (
      <App>
        <Tasks/>
      </App>)
  },
]);

export { router };
