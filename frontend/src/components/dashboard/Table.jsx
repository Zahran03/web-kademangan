import React from "react";
import { Link } from "react-router-dom";

const Table = ({ columns, data, route }) => {
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
                <Link to={`/dashboard/${route}/${row.id}`}>
                  <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                    Lihat
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
