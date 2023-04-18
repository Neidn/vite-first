import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from "react-router-dom";

import './index.css'

import RootLayout from "./routes/RootLayout";

import App from "./App";
import NewPost from "./components/post/NewPost";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        path: '',
        element: <App/>,
      },
      {
        path: 'create-post',
        element: <NewPost onAddPost={() => {
        }} onCancel={() => {
        }}/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
);
