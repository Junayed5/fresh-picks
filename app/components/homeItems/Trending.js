import React from "react";

const Trending = () => {
  const products = [
    {
      name: "Hento Deals Security Tire Grid",
      image: "lip.jpg",
      mainPrice: 100.0,
      discountPrice: 80.0,
    },
    {
      name: "Hento Deals Security Tire Grid",
      image: "https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/15-min-300x300.jpg",
      mainPrice: 100.0,
      discountPrice: 80.0,
    },
    {
      name: "Hento Deals Security Tire Grid",
      image: "orange.jpg",
      mainPrice: 100.0,
      discountPrice: 80.0,
    },
    {
      name: "Hento Deals Security Tire Grid",
      image:
        "https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/13-min.jpg",
      mainPrice: 100.0,
      discountPrice: 80.0,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <div className="py-20">
        <div className="flex-row md:flex md:justify-between border-b pb-2">
          <div>
            <h3 className="text-center text-xl font-semibold">Trending Items</h3>
          </div>
          <div className="text-gray-500 font-semibold text-lg flex justify-center gap-x-3">
            <p>On Sell</p>
            <p>Hot Sell</p>
            <p>Trend</p>
            <p>Best Sell</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 pt-5">
          {products.map(({ name, image, discountPrice, mainPrice }) => (
            <div className="border w-fit px-7 py-3">
              <img className=" mx-auto mb-7" src={image} alt="" />
              <p className="font-semibold w-48 mb-1">{name}</p>
              <div className="flex gap-x-5 text-base font-semibold">
                <p className="text-gray-400 line-through">${mainPrice}</p>
                <p className="text-primaryLite">${discountPrice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-full md:h-24 shadow-2xl flex-none md:flex gap-x-20  justify-center  items-center">
        <div className="border-r pr-12 pl-10">
          <p>Free Delivery</p>
          <p>From $78</p>
        </div>
        <div className="border-r pr-12 pl-10">
          <p>Free Delivery</p>
          <p>From $78</p>
        </div>
        <div className="border-r pr-12 pl-10">
          <p>Free Delivery</p>
          <p>From $78</p>
        </div>
        <div className="border-r pr-12 pl-10">
          <p>Free Delivery</p>
          <p>From $78</p>
        </div>
        <div className="px-8">
          <p>Free Delivery</p>
          <p>From $78</p>
        </div>
      </div>

      <div className="flex justify-center my-14">
        <img
          src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/ad-min.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Trending;
