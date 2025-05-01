import { 
  createBrowserRouter, 
  RouterProvider, 
 } from "react-router";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import CoursesPage, { coursesLoader } from "./pages/course/Courses";
import ContactPage from "./pages/help/Contact";
import FAQPage from "./pages/help/Faq";
import React from "react";
import MainLayout from "./layouts/MainLayout";
import HelpLayout from "./layouts/HelpLayout";
import CourseDetailsPage, {courseDetailsLoader} from "./pages/course/CourseDetails";
import CourseLayout from "./layouts/CourseLayout";
import CourseCreatePage from "./pages/course/CourseCreate";
import CourseEditPage from "./pages/course/CourseEdit";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { 
        path: "courses", 
        element: <CourseLayout />,
        children:[
          { index: true, element: <CoursesPage />, loader: coursesLoader },

          {
            id: "course-details",
            path: ":courseId",
            loader: courseDetailsLoader,
            children: [
             {
        index: true, 
        element: <CourseDetailsPage />,
        
      },
      { path: "edit", element: <CourseEditPage /> },
            ],
          },          
      { path: "create", element: <CourseCreatePage /> },
         
    ]
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
