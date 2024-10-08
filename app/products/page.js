"use client";
import React, { useState } from "react";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { VscThreeBars } from "react-icons/vsc";
import { FaStar } from "react-icons/fa";
import { BsArrowRepeat } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";

const page = () => {
  const [gridView, setView] = useState(true);
  console.log(gridView);
  const products = [
    {
      image:
        "https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/4-min.jpg",
      name: "product name",
      regularPrice: "200",
      discountPrice: "150",
    },
    {
      image:
        "https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/4-min.jpg",
      name: "product name",
      regularPrice: "200",
      discountPrice: "150",
    },
    {
      image:
        "https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/4-min.jpg",
      name: "product name",
      regularPrice: "200",
      discountPrice: "150",
    },
    {
      image:
        "https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/4-min.jpg",
      name: "product name",
      regularPrice: "200",
      discountPrice: "150",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto py-10 flex">
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
              <div className="flex text-xs gap-2  ">
                <p className="text-[#999999] line-through ">$600.00</p>
                <p className="text-primary">$560.00</p>
              </div>
            </div>
            <hr />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#626C84]">Product Name</p>
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
                <p className="text-[#626C84] line-through ">$600.00</p>
                <p className="text-primary">$560.00</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="w-[360px] p-10 border my-10">
          <h3 className="border-l-4 border-primary pl-3 font-semibold mb-3">
            Product categories
          </h3>

          <div>
            <div>
              <div className="text-sm py-3 text-[#626C84] hover:text-primaryLite cursor-pointer">
                <p>Beauty Product(20)</p>
              </div>
              <hr />
            </div>
            <div>
              <div className="text-sm py-3 text-[#626C84] hover:text-primaryLite cursor-pointer">
                <p>Beauty Product(20)</p>
              </div>
              <hr />
            </div>
            <div>
              <div className="text-sm py-3 text-[#626C84] hover:text-primaryLite cursor-pointer">
                <p>Beauty Product(20)</p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>

      <div className="w-4/6 mx-auto">
        <div className="flex items-center justify-between rounded-sm h-[85px] bg-[#f9f9f9] p-7">
          <p className="font-semibold">Shop</p>
          <div className="font-semibold">
            <label htmlFor="">Sort By</label>
            <select className="bg-[#f9f9f9]" name="" id="">
              <option value="name">Sorting</option>
              <option value="name">dhgsjgk</option>
              <option value="name">dhgsjgk</option>
            </select>
          </div>
          <div className="flex gap-3 justify-between items-center">
            <p className="font-semibold">View</p>
            <TfiLayoutGrid3Alt
              className={gridView && "size-5 text-primary" || "size-5"}
              onClick={() => setView(!gridView)}
            />
            <VscThreeBars
              className={!gridView && "size-6 text-primary" || "size-6"}
              onClick={() => setView(!gridView)}
            />
          </div>
        </div>

        <div>
          {gridView ? (
            <div className="grid grid-cols-1 md:grid-cols-4">
              {products.map(({ image, discountPrice, name, regularPrice }) => (
                <div className="w-40 border p-3 my-10 hover:shadow-lg hover:ease-out hover:duration-700">
                  <img className="size-36" src={image} alt="" />
                  <div>
                    <hr />
                    <div className="flex justify-around py-2">
                      <FiShoppingCart className="hover:bg-primary hover:rounded-full hover:text-white text-2xl p-1" />
                      <LuEye className="hover:bg-primary hover:rounded-full hover:text-white text-2xl p-1" />
                      <CiHeart className="hover:bg-primary hover:rounded-full hover:text-white text-2xl p-1" />
                      <BsArrowRepeat className="hover:bg-primary hover:rounded-full hover:text-white text-2xl p-1" />
                    </div>

                    <hr />
                  </div>
                  <p className="font-semibold text-center hover:text-primaryLite pb-2">
                    {name}
                  </p>
                  <div className="flex gap-3 font-semibold">
                    <p className="text-[#d4d4d4] line-through">
                      ${regularPrice}.00
                    </p>
                    <p className="text-primaryLite">${discountPrice}.00</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
              {products.map(({ image, discountPrice, name, regularPrice }) => (
                <div className="border pl-4 my-5 hover:shadow-lg hover:ease-out hover:duration-700 flex relative">
                  <div>
                    <img className="size-36" src={image} alt="" />
                  </div>

                  <div className="my-7 ">
                    <div className="flex justify-center text-primary py-5">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="font-semibold text-center hover:text-primaryLite pb-2">
                      {name}
                    </p>
                    <div className="flex gap-3 font-semibold">
                      <p className="text-[#d4d4d4] line-through">
                        ${regularPrice}.00
                      </p>
                      <p className="text-primaryLite">${discountPrice}.00</p>
                      <CiHeart className="absolute right-4 top-4 text-2xl text-primary " />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
