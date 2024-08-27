"use client"
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="slider-image.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider-image.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider-image.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
