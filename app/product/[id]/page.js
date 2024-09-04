import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

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
          <p className="absolute top-0 h-14 w-14 flex justify-center items-center bg-primary text-white text-sm font-semibold rounded-full">
            Sale!
          </p>
        </div>
        <div className="w-[532px]">
          <h3 className="text-xl font-semibold pb-3">Product Name</h3>
          <p className="text-sm font-semibold ">
            Category: <span className="text-blue-600"> Product Category</span>
          </p>

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
            <p className="text-xs font-semibold text-gray-400 line-through">
              $600.00
            </p>
            <p className="text-lg font-semibold text-primary pt-1">$550.00</p>
          </div>

          <p className="py-4 text-xs text-primary font-semibold">9 in stock</p>

          <div className="flex gap-5">
            <div>
              <button className="h-11 w-10 bg-[#f9f9f9] text-gray-500 border">
                -
              </button>
              <input
                className="h-11 w-16 text-center border"
                type="number"
                name=""
                id=""
              />
              <button className="h-11 w-10 bg-[#f9f9f9] text-gray-500 border    ">
                +
              </button>
            </div>
            <button className="h-11 w-40 bg-primary text-sm font-semibold text-white rounded-md">
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border rounded-md px-10 py-10">
        <h3 className="text-xl text-primary px-2 py-3 mb-3 font-semibold bg-gray-200">
          Product Name
        </h3>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          ducimus, nulla veniam quis perferendis iste dolor, eos at veritatis
          vel totam minima placeat, nam assumenda. Delectus distinctio ullam
          expedita iusto modi tempora nostrum quo ipsam eum magni! Expedita
          aliquid dignissimos, laborum aperiam aut suscipit fugiat ex minima
          error quod voluptatem provident tempore neque at voluptatum. Fugit cum
          ipsam dolorum, ipsum expedita atque excepturi ducimus odit debitis
          aliquam veritatis, molestias ullam aperiam. Nihil recusandae eveniet
          reprehenderit quibusdam iure omnis, voluptatibus voluptatum dicta
          reiciendis modi error quod quaerat aliquam ipsum excepturi vero
          cupiditate soluta dolorem dolor non necessitatibus? Dolorem aliquam
          perspiciatis ad.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          ducimus, nulla veniam quis perferendis iste dolor, eos at veritatis
          vel totam minima placeat, nam assumenda. Delectus distinctio ullam
          expedita iusto modi tempora nostrum quo ipsam eum magni! Expedita
          aliquid dignissimos, laborum aperiam aut suscipit fugiat ex minima
          error quod voluptatem provident tempore neque at voluptatum. Fugit cum
          ipsam dolorum, ipsum expedita atque excepturi ducimus odit debitis
          aliquam veritatis, molestias ullam aperiam. Nihil recusandae eveniet
          reprehenderit quibusdam iure omnis, voluptatibus voluptatum dicta
          reiciendis modi error quod quaerat aliquam ipsum excepturi vero
          cupiditate soluta dolorem dolor non necessitatibus? Dolorem aliquam
          perspiciatis ad.
        </p>
      </div>

      <div className="max-w-7xl mx-auto border rounded-md mt-10">
        <h3 className="text-xl font-semibold text-primary bg-gray-200 px-3 py-3">
          Review & Rating Product Name
        </h3>

        <div className="bg-[#f9f9f9] flex w-3/4 mx-auto my-10 rounded-md px-7 py-4">
          <div>
            <div className="flex items-center">
              <p className="text-xs font-semibold">5 Stars</p>
              <p className="h-3 w-72 bg-[#f5f5f5] rounded-full mx-5"></p>
              <div className="flex text-primary py-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-xs font-semibold">4 Stars</p>
              <p className="h-3 w-72 bg-[#f5f5f5] rounded-full mx-5"></p>
              <div className="flex text-primary py-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-xs font-semibold">3 Stars</p>
              <p className="h-3 w-72 bg-[#f5f5f5] rounded-full mx-5"></p>
              <div className="flex text-primary py-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-xs font-semibold">2 Stars</p>
              <p className="h-3 w-72 bg-[#f5f5f5] rounded-full mx-5"></p>
              <div className="flex text-primary py-5">
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-xs font-semibold">1 Star</p>
              <p className="h-3 w-72 bg-[#f5f5f5] rounded-full mx-5"></p>
              <div className="flex text-primary py-5">
                <FaStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
            </div>
          </div>
          <div className="w-fit mx-auto my-14">
            <h3 className="text-6xl text-primary text-center">
              5.0<span className="text-4xl text-primaryLite">/5</span>
            </h3>
            <div className="flex text-4xl text-primary py-5 justify-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="font-semibold text-center">Average Start Rating: <span className="italic text-orange-400">4.3 out of 5</span> <span>(3 vote)</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
