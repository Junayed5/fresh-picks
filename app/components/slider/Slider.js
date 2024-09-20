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
          <img className="w-full" src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/revslider/grocery/banner1_img-min-1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/revslider/grocery/banner2_img-min-1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/revslider/grocery/banner3_img-min-1.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
