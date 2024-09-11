import React from "react";
import { FaStar } from "react-icons/fa";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <div>
        <div className="w-[360px] p-10 border">
          <h3 className="border-l-4 border-primary pl-3 font-semibold mb-3">
            Filter
          </h3>
          <input className="w-full" type="range" name="price" id="price" />
          <p className="font-semibold pb-3 pt-2 text-[#999999]">
            Price : $0 -- $700
          </p>
          <button className="h-10 rounded-sm font-semibold bg-primary hover:bg-primaryLite text-white w-full">
            Filter
          </button>
        </div>

        <div className="w-[360px] p-10 border my-10">
          <h3 className="border-l-4 border-primary pl-3 font-semibold mb-3">
            Products By Rating
          </h3>

          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#999999]">Product Name</p>
              <img
                className="size-8"
                src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/08/8-300x300.jpg"
                alt=""
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex text-primary py-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="flex text-xs gap-2  ">
                <p className="text-[#999999] line-through ">$600.00</p>
                <p className="text-primary">$560.00</p>
              </div>
            </div>
            <hr />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#999999]">Product Name</p>
              <img
                className="size-8"
                src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/08/8-300x300.jpg"
                alt=""
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex text-primary py-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="flex text-xs gap-2  ">
                <p className="text-[#999999] line-through ">$600.00</p>
                <p className="text-primary">$560.00</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
