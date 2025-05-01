export default function CourseDetailsPage() {
  const course = useLoaderData();
  return <h1>Course Details: {course.title} </h1>;
}
  
export async function courseDetailsLoader({ params }) {
  const { courseId } = params;
  const res = await fetch("http://localhost:5000/courses/" + courseId);
  return res.json();
}
