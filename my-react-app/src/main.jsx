import React from 'react'
import ReactDOM from 'react-dom/client'
import List from './pages/list/List.jsx'
import Home from './pages/home/Home.jsx'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Hotel from './pages/hotel/Hotel.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/hotels",
    element: <List/>,
  },
  {
    path: "/hotel",
    element: <Hotel/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
