const BarAction = () => {
  return (
    <div className="w-full bg-secondary flex-wrap">
      <div className="flex items-center justify-between w-full text-secondary px-2 py-2 border-2 border-primary rounded-md mb-1">
        <div className="text-primary text-lg font-semibold flex flex-col">
          <h1>Judul</h1>
          <p className="text-base">lorem5</p>
        </div>
        <div className="flex gap-2">
          <button className="px-2 py-2 bg-primary text-secondary rounded-md">
            Edit
          </button>
          <button className="px-2 py-2 bg-red-500 text-secondary rounded-md">
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

export default BarAction;
