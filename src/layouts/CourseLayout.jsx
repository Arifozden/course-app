import { Outlet } from "react-router";
import { Link } from "react-router";
export default function HelpLayout() {
    return (
        <div id="course-layout">
        <h1>Course List</h1>
        <p>
            <Link to={"create"}>New Course</Link>
        </p>
        <Outlet />
        </div>
    );
    }