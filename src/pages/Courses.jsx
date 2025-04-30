import { useLoaderData } from "react-router";

export default function CoursesPage() {
  const courses = useLoaderData();
  return (
    <>
    
    <div id="courses">
      <h1>Courses</h1>
      <p>Welcome to the Courses page!</p>
      </div>
    </>
  );
}

export async function coursesLoader() {
  const res = await fetch("http://localhost:5000/courses");
  return res.json();
}
