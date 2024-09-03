import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const page = ({ params }) => {
  const { id } = params;
  return (
    <div className="">
      <div className="h-20 bg-[#fafafa] flex items-center">
        <p className="">Home -- Grocery --</p>
      </div>

      <div className="flex justify-center items-center gap-14 py-20">
        <div className="relative">
          <img
            src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/5-min.jpg"
            alt="meet"
          />
          <p className="absolute top-0 h-14 w-14 flex justify-center items-center bg-primary text-white text-sm font-semibold rounded-full">Sale!</p>
        </div>
        <div className="w-[532px]">
          <h3 className="text-xl font-semibold pb-3">Product Name</h3>
          <p className="text-sm font-semibold ">Category: <span className="text-blue-600"> Product Category</span></p>

          <div className="flex text-primary py-5">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>

          <p className="font-semibold text-sm text-justify pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            veniam cupiditate illo, rem iure corrupti veritatis, distinctio
            recusandae necessitatibus fugit, architecto dignissimos similique
            tenetur ex accusamus est voluptate fuga nisi.
          </p>

          <div>
            <p className="text-xs font-semibold text-gray-400 line-through">$600.00</p>
            <p className="text-lg font-semibold text-primary pt-1">$550.00</p>
          </div>

          <p className="py-4 text-xs text-primary font-semibold">9 in stock</p>

          <div className="flex gap-5">
            <div>
              <button className="h-11 w-10 bg-[#f9f9f9] text-gray-500 border">-</button>
              <input className="h-11 w-16 text-center border" type="number" name="" id="" />
              <button className="h-11 w-10 bg-[#f9f9f9] text-gray-500 border    ">+</button>
            </div>
            <button className="h-11 w-40 bg-primary text-sm font-semibold text-white rounded-md">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
