import React from "react";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { VscThreeBars } from "react-icons/vsc";
import { FaStar } from "react-icons/fa";

const page = () => {
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
          <p>Shop</p>
          <div>
            <label htmlFor="">Sort By</label>
            <select name="" id="">
              <option value="name">Sorting</option>
              <option value="name">dhgsjgk</option>
              <option value="name">dhgsjgk</option>
            </select>
          </div>
          <div className="flex justify-between items-center">
            <p>View</p>
            <TfiLayoutGrid3Alt className="size-5" />
            <VscThreeBars className="size-6" />
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-4">
            {products.map(({ image, discountPrice, name, regularPrice }) => (
              <div className="w-40">
                <img className="size-36" src={image} alt="" />
                <p className="font-semibold text-center hover:text-primaryLite">
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
        </div>
      </div>
    </div>
  );
};

export default page;
