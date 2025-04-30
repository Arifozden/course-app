import { NavLink, Outlet } from "react-router";
export default function HelpLayout() {
    return (
        <div id="help-layout">
        <h1>Help Layout</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, inventore. Modi, praesentium vel! Mollitia eaque blanditiis et adipisci. Perferendis molestiae voluptatibus, quis temporibus aspernatur atque at obcaecati cumque esse? Esse.</p>
        <Outlet />
        </div>
    );
    }