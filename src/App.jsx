
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import CoursesPage from "./pages/Courses";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/courses", element: <CoursesPage /> },
]);



function App() {
  return <RouterProvider router={router} />;
}

export default App
