import { NavLink } from "react-router"
export default function CoursesPage() {
  return (
    <>
    <nav>
    <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>  
      <NavLink to="/courses">Courses</NavLink>
    </nav>
    <div>
      <h1>Courses Page</h1>
      <p>Welcome to the Courses page!</p>
      </div>
    </>
  );
}