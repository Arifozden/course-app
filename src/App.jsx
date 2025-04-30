
import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/courses", element: <CoursesPage /> },
]);



function App() {
  <h1>App</h1>
}

export default App
