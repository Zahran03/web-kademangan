import TableDashboard from "./TableDashboard";

const InfoTable = () => {
  return (
    <div className="flex flex-wrap container w-full bg-secondary rounded-md">
      <div className="w-full mx-auto mb-10">
        <div className="flex items-center justify-between flex-wrap gap-1">
          <div className="flex flex-col items-center justify-center px-5 py-3 bg-secondary text-primary rounded-md border-2 border-primary">
            <h1 className="text-xl">Total Berita</h1>
            <p className="text-xl">2</p>
          </div>
          <div className="flex flex-col items-center justify-center px-5 py-3 bg-secondary text-primary rounded-md border-2 border-primary">
            <h1 className="text-xl">Total Berita</h1>
            <p className="text-xl">2</p>
          </div>
          <div className="flex flex-col items-center justify-center px-5 py-3 bg-secondary text-primary rounded-md border-2 border-primary">
            <h1 className="text-xl">Total Berita</h1>
            <p className="text-xl">2</p>
          </div>
          <div className="flex flex-col items-center justify-center px-5 py-3 bg-secondary text-primary rounded-md border-2 border-primary">
            <h1 className="text-xl">Total Berita</h1>
            <p className="text-xl">2</p>
          </div>
          <div className="flex flex-col items-center justify-center px-5 py-3 bg-secondary text-primary rounded-md border-2 border-primary">
            <h1 className="text-xl">Total Berita</h1>
            <p className="text-xl">2</p>
          </div>
          <div className="flex flex-col items-center justify-center px-5 py-3 bg-secondary text-primary rounded-md border-2 border-primary">
            <h1 className="text-xl">Total Berita</h1>
            <p className="text-xl">2</p>
          </div>
        </div>
      </div>
      {/* pilih table */}
      <TableDashboard />
    </div>
  );
};

export default InfoTable;
