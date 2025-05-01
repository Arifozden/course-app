
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
  Route
 } from "react-router";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import CoursesPage, { coursesLoader } from "./pages/Courses";
import ContactPage from "./pages/help/ContactPage";
import FAQPage from "./pages/help/FaqPage";
import React from "react";
import MainLayout from "./layouts/MainLayout";
import HelpLayout from "./layouts/HelpLayout";
import CourseDetailsPage, {courseDetailsLoader} from "./pages/CourseDetailsPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "courses", element: <CoursesPage />, loader: coursesLoader },
      {
        path: "courses/:courseId", 
        element: <CourseDetailsPage />,
        loader: courseDetailsLoader,
      },
      {
        path: "help",
        element: <HelpLayout/>,
        children: [
          { path: "contact", element: <ContactPage /> },
          { path: "faq", element: <FAQPage /> },
        ]
      }
    ]
  }
]);



function App() {
  return <RouterProvider router={router} />;
}

export default App
