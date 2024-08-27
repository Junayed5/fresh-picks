import React from "react";

export default function ProductCategory() {
  const products = [
    {
      name: "Hento Deals Security Tire Grid",
      image: "egg.jpg",
      mainPrice: 100.00,
      discountPrice: 80.00,
    },
    {
      name: "Hento Deals Security Tire Grid",
      image: "egg.jpg",
      mainPrice: 100.00,
      discountPrice: 80.00,
    },
    {
      name: "Hento Deals Security Tire Grid",
      image: "egg.jpg",
      mainPrice: 100.00,
      discountPrice: 80.00,
    },
    {
      name: "Hento Deals Security Tire Grid",
      image: "egg.jpg",
      mainPrice: 100.00,
      discountPrice: 80.00,
    },
    {
      name: "Hento Deals Security Tire Grid",
      image: "egg.jpg",
      mainPrice: 100.00,
      discountPrice: 80.00,
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5">
        {products.map(({name,image,mainPrice,discountPrice}) => (
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
