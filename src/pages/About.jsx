import { NavLink } from "react-router"

export default function AboutPage() {
  return (
    <>
    <nav>
    <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>  
      <NavLink to="/courses">Courses</NavLink>
    </nav>
    <div>
      <h1>About Page</h1>
      <p>Welcome to the About page!</p>
      </div></>
  );
}