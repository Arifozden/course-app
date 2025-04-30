import { useLoaderData } from "react-router";

export default function CoursesPage() {
  const courses = useLoaderData();
  return (
    <>
    <h1>Courses</h1>
    <div id="courses">
      
      {courses.map((item) => (
        <div className="card">

      </div>
      ))}
    </div>
    </>
  );
}

export async function coursesLoader() {
  const res = await fetch("http://localhost:5000/courses");
  return res.json();
}
