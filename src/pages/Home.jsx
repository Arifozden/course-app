import { NavLink } from "react-router"
export default function HomePage() {
  return (
    <>
    <nav>
    <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>  
      <NavLink to="/courses">Courses</NavLink>
    </nav>
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      </div>
    </>
  );
}