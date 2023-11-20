import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/index.css";
import "@/styles/font.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Homepage from "@/pages/homepage";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Homepage />}></Route>)
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
