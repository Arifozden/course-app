import { Outlet } from "react-router";
export default function HelpLayout() {
    return (
        <div id="course-layout">
        <h1>Course List</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, inventore. Modi, praesentium vel! Mollitia eaque blanditiis et adipisci. Perferendis molestiae voluptatibus, quis temporibus aspernatur atque at obcaecati cumque esse? Essen.</p>
        <Outlet />
        </div>
    );
    }