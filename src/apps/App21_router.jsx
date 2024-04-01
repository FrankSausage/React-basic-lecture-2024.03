import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from '../pages/Root';
import Home from '../pages/Home';
import Board from '../pages/Board';
import BoardDetail from "../pages/BoardDetail";
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <Home />},
      {path: '/board', element: <Board />},
      {path: '/board/:bid', element: <BoardDetail />},
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;