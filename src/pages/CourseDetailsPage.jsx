import { useLoaderData } from "react-router";

export default function CourseDetailsPage() {
  const course = useLoaderData();
  return (
    <div className="course-details">
      <h1>{course.title}</h1>
      <div className="course-desc">
      <img src={`http://localhost:5000/images/${item.image}`} alt={item.title} />
      </div>
      </div>
  );
}
  
export async function courseDetailsLoader({ params }) {
  const { courseId } = params;
  const res = await fetch("http://localhost:5000/courses/" + courseId);
  return res.json();
}
