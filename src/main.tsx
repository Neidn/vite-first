import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from "react-router-dom";

import './index.css'

import RootLayout from "./routes/RootLayout";

import Posts, {loader as postsLoader} from "./routes/Posts";
import NewPost from "./routes/NewPost";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        path: '',
        element: <Posts/>,
        loader: postsLoader,
        children: [
          {
            path: 'create-post',
            element: <NewPost onAddPost={() => {
            }}/>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
);
