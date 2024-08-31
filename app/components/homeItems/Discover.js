"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../slider/styles.css";

import { Pagination } from "swiper/modules";
import CountUp from "react-countup";

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
    <>
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

        <div className="flex-none md:flex justify-center gap-x-10 my-20">
          <img
            src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/featured1-min.jpg"
            alt=""
          />
          <img
            src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/featured2-min.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="h-full md:h-40 bg-gradient-to-b from-[#E0FFF5] to-[#EDFDE9]">
        <div className="max-w-7xl mx-auto pt-12 flex-none md:flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold text-primary">
              Happy Customers
            </p>
            <p className="text-2xl font-semibold pt-2">
              {" "}
              $ <CountUp start={0} end={1200} /> +
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold text-primary">
              Customer Satisfaction
            </p>
            <p className="text-2xl font-semibold pt-2">
              {" "}
              <CountUp start={0} end={100} /> %
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold text-primary">
              Organic Products
            </p>
            <p className="text-2xl font-semibold pt-2">
              {" "}
              $ <CountUp start={0} end={1} /> M+
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold text-primary">Awards Winning</p>
            <p className="text-2xl font-semibold pt-2">
              {" "}
              $ <CountUp start={0} end={778} /> +
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-10">
        <h3 className="text-4xl font-semibold text-primary text-center py-10">
          Pick's Your Fresh Item
        </h3>
        <div className="flex gap-x-5 justify-center">
          <div>
            <img className="h-[500px]" src="side.jpg" alt="" />
          </div>
          <div>
            <img className="h-60" src="left-top.jpg" alt="" />
            <img className="h-60 w-[360px] mt-5" src="left-bottom.jpg" alt="" />
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-center gap-x-10 py-5">
        <img
          className="size-40"
          src="https://cdn.prod.website-files.com/6312535109af3402143e250c/6312535109af345c4c3e251b_apple_-%20logo-300x119.png"
          alt=""
        />
        <img
          className="size-40"
          src="https://cdn.prod.website-files.com/6312535109af3402143e250c/6312535109af34a9603e2694_mercedes-benz_-%20logo-300x303.png"
          alt=""
        />
        <img
          className="size-40"
          src="https://cdn.prod.website-files.com/6312535109af3402143e250c/6312535109af3425413e251d_audi_-%20logo-300x119.png"
          alt=""
        />
        <img
          className="size-40"
          src="https://cdn.prod.website-files.com/6312535109af3402143e250c/6312535109af3413cc3e2516_adidas_-%20logo-300x119.png"
          alt=""
        />
        <img
          className="size-40"
          src="https://cdn.prod.website-files.com/6312535109af3402143e250c/6312535109af34637b3e25fd_disney_-%20logo-300x82.png"
          alt=" "
        />
      </div>
      <div className="h-64 bg-primary flex justify-center items-center gap-x-40">
        <div>
          <h3 className="text-2xl font-semibold text-white">Newsletter & Get Updates </h3>
          <p className="text-sm text-white">Sign up for our newsletter to get up-to-date from us</p>
        </div>
        <div>
          <input className="h-12 w-[415px] pl-7" type="text" placeholder="Enter Your Email"/>
          <input className="h-12 bg-secondary hover:bg-secondaryLite text-white px-9 rounded-r-sm" type="submit"  />
        </div>
      </div>
    </>
  );
};

export default Discover;
