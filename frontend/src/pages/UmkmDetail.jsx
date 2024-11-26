import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const UmkmDetail = () => {
  const { id } = useParams();
  const umkm = useLoaderData();
  return (
    <div className="flex flex-wrap container bg-secondary rounded-md mb-[376px]">
      <div className="w-full mx-auto px-6 mt-[50px]"></div>
    </div>
  );
};

export default UmkmDetail;
