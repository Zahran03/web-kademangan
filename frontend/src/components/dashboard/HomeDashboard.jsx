import React from "react";
import TableDashboard from "./TableDashboard";
import InfoTable from "./InfoTable";
import SideBar from "./SideBar";

const HomeDashboard = () => {
  return (
    <div className="w-full h-full bg-secondary text-primary p-4">
      <div className="container mx-auto flex justify-between gap-5">
        {/* side bar */}
        <SideBar />
        {/* content */}
        <InfoTable />
      </div>
    </div>
  );
};

export default HomeDashboard;
