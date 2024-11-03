import CardInfo from "./CardInfo";
import TableDashboard from "./TableDashboard";

const InfoDashboard = () => {
  return (
    <div className="flex flex-wrap container w-full bg-secondary rounded-md">
      <CardInfo />
      {/* pilih table */}
      <TableDashboard />
    </div>
  );
};

export default InfoDashboard;
