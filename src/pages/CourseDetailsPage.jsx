import { useParams } from "react-router";

export default function CourseDetailPage() {
  const { courseId } = useParams();
  return 
    <h1>Course Details {courseId}</h1>;

}
  