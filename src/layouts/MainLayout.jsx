import { NavLink, Outlet, useNavigate, useNavigation } from "react-router";

export default function MainLayout() {
    const navigation = useNavigation();
    return (
        <div id="main-layout">
            <header className="container">
        <h1>Course App</h1>
        <nav>
    <NavLink to="/" end>Home</NavLink>
      <NavLink to="about">About</NavLink>  
      <NavLink to="courses">Courses</NavLink>
        <NavLink to="help">Help</NavLink>
    </nav>
    </header>
    <main className="container">
        {navigation.state === "loading" && <h1>Loading...</h1>}
        <Outlet />
    </main>
        </div>
    );
    }