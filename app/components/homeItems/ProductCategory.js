import React from "react";

export default function ProductCategory() {
  const products = [
    {
      name: "Hento Deals Security Tire Grid",
      image: "egg.jpg",
      mainPrice: 100.0,
      discountPrice: 80.0,
    },
    {
      name: "Hento Deals Security Tire Grid",
      image: "egg.jpg",
      mainPrice: 100.0,
      discountPrice: 80.0,
    },
    {
      name: "Hento Deals Security Tire Grid",
      image: "egg.jpg",
      mainPrice: 100.0,
      discountPrice: 80.0,
    },
    {
      name: "Hento Deals Security Tire Grid",
      image: "egg.jpg",
      mainPrice: 100.0,
      discountPrice: 80.0,
    },
    {
      name: "Hento Deals Security Tire Grid",
      image: "egg.jpg",
      mainPrice: 100.0,
      discountPrice: 80.0,
    },
  ];
  return (
    <div className="max-w-[100rem] mx-auto mt-20">
      <div className="border  grid grid-cols-2 md:grid-cols-6">
        <div className="border-r h-28 my-9 flex justify-center items-center">
          <div>
            <img
              className="mx-auto"
              src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/icon1.png"
              alt="icon"
            /> 
            <p className="font-semibold text-center mb-3">Grocery</p>
            <p className="text-center text-sm">20 items available</p>
          </div>
        </div>
        <div className="border-r h-28 my-9 flex justify-center items-center">
          <div>
            <img
              className="mx-auto"
              src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/icon2-1.png"
              alt="icon"
            /> 
            <p className="font-semibold text-center mb-3">Foods & Drinks</p>
            <p className="text-center text-sm">20 items available</p>
          </div>
        </div>
        <div className="border-r h-28 my-9 flex justify-center items-center">
          <div>
            <img
              className="mx-auto"
              src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/icon3.png"
              alt="icon"
            /> 
            <p className="font-semibold text-center mb-3">Office Elements</p>
            <p className="text-center text-sm">20 items available</p>
          </div>
        </div>
        <div className="border-r h-28 my-9 flex justify-center items-center">
          <div>
            <img
              className="mx-auto"
              src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/icon4.png"
              alt="icon"
            /> 
            <p className="font-semibold text-center mb-3">Home Application</p>
            <p className="text-center text-sm">20 items available</p>
          </div>
        </div>
        <div className="border-r h-28 my-9 flex justify-center items-center">
          <div>
            <img
              className="mx-auto"
              src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/icon5.png"
              alt="icon"
            /> 
            <p className="font-semibold text-center mb-3">Beauty Product</p>
            <p className="text-center text-sm">20 items available</p>
          </div>
        </div>
        <div className="h-28 my-9 flex justify-center items-center">
          <div>
            <img
              className="mx-auto"
              src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/icon4.png"
              alt="icon"
            /> 
            <p className="font-semibold text-center mb-3">Home Furnishings</p>
            <p className="text-center text-sm">20 items available</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5">
        {products.map(({ name, image, mainPrice, discountPrice }) => (
          <div className="text-center">
            <img className="mx-auto" src={image} alt="" />
            <p className="text- font-semibold">{name}</p>
            <div className="flex justify-center gap-x-5 text-base font-semibold">
              <p className="text-gray-400 line-through">${mainPrice}</p>
              <p className="text-primaryLite ">${discountPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
