import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from "react-router-dom";

import './index.css'

import App from './App'

const router = createBrowserRouter([
  {path: '/', element: <App/>},
  {path: '/:id', element: <App/>}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
);
