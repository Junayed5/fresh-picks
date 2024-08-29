"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../slider/styles.css";

import { Pagination } from "swiper/modules";

const Discover = () => {
  const products = [
    {
      name: "Hento Deals Security Tire Grid",
      image: "lip.jpg",
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
    {
      name: "Hento Deals Security Tire Grid",
      image: "lip.jpg",
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
    <div className="max-w-7xl mx-auto">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="mb-16">
          <div className="grid grid-cols-6 w-fit">
            {products.map(({ name, image, discountPrice, mainPrice }) => (
              <div className="border-r">
                <img className="size-40 mx-auto" src={image} alt="" />
                <p className="text-center font-semibold">{name}</p>
                <div className="flex justify-center gap-x-2 font-semibold py-3">
                  <p className="text-gray-400 line-through">${mainPrice}</p>
                  <p className="text-primaryLite">${discountPrice}</p>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-16">
          <div className="grid grid-cols-6 w-fit">
            {products.map(({ name, image, discountPrice, mainPrice }) => (
              <div className="border-r">
                <img className="size-40 mx-auto" src={image} alt="" />
                <p className="text-center font-semibold">{name}</p>
                <div className="flex justify-center gap-x-2 font-semibold py-3">
                  <p className="text-gray-400 line-through">${mainPrice}</p>
                  <p className="text-primaryLite">${discountPrice}</p>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-16">
          <div className="grid grid-cols-6 w-fit">
            {products.map(({ name, image, discountPrice, mainPrice }) => (
              <div className="border-r">
                <img className="size-40 mx-auto" src={image} alt="" />
                <p className="text-center font-semibold">{name}</p>
                <div className="flex justify-center gap-x-2 font-semibold py-3">
                  <p className="text-gray-400 line-through">${mainPrice}</p>
                  <p className="text-primaryLite">${discountPrice}</p>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-center gap-x-10 my-20">
        <img src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/featured1-min.jpg" alt="" />
        <img src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/featured2-min.jpg" alt="" />
      </div>
    </div>
  );
};

export default Discover;
