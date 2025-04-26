import { Outlet } from "react-router-dom";
import "../styles/Layout.css";
const Layout = () => {
  return (
    <div className="layout">
      <header>
        <h1>Andoni Roura's portfolio</h1>
      </header>
      <Outlet />
      <footer>
        <h3>Andoni Roura</h3>
      </footer>
    </div>
  );
};
export default Layout;
