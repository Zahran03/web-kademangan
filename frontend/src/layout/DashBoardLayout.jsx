import { Outlet } from "react-router-dom";
import SideBar from "../components/dashboard/SideBar";
import NavbarDashboard from "../components/shared/NavbarDashboard";

const DashBoardLayout = () => {
  return (
    <div className="w-full h-full bg-secondary text-primary mt-16">
      <NavbarDashboard />
      <div className="container mx-auto flex justify-between gap-5 p-4">
        {/* side bar */}
        <SideBar />
        {/* content */}
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
