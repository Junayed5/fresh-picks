import React from "react";
import Input from "../components/multiRangeInput/Input";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <div>
        <div className="w-[360px] p-10 border">
          <h3 className="border-l-4 border-primary pl-3 font-semibold mb-3">Filter</h3>
          <input className="w-full" type="range" name="price" id="price" />
          <p className="font-semibold pb-5 text-[#999999]">Price : $0 -- $700</p>
          <button className="h-10 rounded-sm font-semibold bg-primary hover:bg-primaryLite text-white w-full">Filter</button>
        </div>
      </div>
    </div>
  );
};

export default page;
