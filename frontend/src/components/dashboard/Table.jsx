import React from "react";

const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-200">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="py-2 px-4 border border-gray-300 text-left text-gray-600"
              >
                {column.Header}
              </th>
            ))}
            {/* Tambahkan kolom aksi */}
            <th className="py-2 px-4 border border-gray-300 text-left text-gray-600">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="even:bg-gray-50">
              {columns.map((column) => (
                <td
                  key={column.accessor}
                  className="py-2 px-4 border border-gray-300 text-gray-800"
                >
                  {row[column.accessor]}
                </td>
              ))}
              {/* Tambahkan kolom dengan tombol aksi */}
              <td className="flex gap-1 py-2 px-4 border border-gray-300 text-gray-800">
                <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
