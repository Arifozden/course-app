export default function HomePage() {
  return (
    <>
    <nav>
    <Link to="/">Home</Link>
      <Link to="/about">About</Link>  
      <Link to="/courses">Courses</Link>
    </nav>
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      </div>
    </>
  );
}