import { Link } from "react-router"

export default function AboutPage() {
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>  
      <Link to="/courses">Courses</Link>
    </nav>
    <div>
      <h1>About Page</h1>
      <p>Welcome to the About page!</p>
      </div></>
  );
}