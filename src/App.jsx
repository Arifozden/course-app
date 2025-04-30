
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
  Route
 } from "react-router";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import CoursesPage from "./pages/Courses";
import React from "react";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "courses", element: <CoursesPage /> },
    ]
  }
]);



function App() {
  return <RouterProvider router={router} />;
}

export default App
