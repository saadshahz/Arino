import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Image from "next/image";

import slider1 from "@/public/images/home-slider/s1.jpg";
import slider2 from "@/public/images/home-slider/s2.jpeg";
import slider3 from "@/public/images/home-slider/s3.jpeg";
import slider4 from "@/public/images/home-slider/s4.jpeg";
import Link from "next/link";

export default function PortfolioSlider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        rewind={true}
        grabCursor={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        autoplay = {true}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider-detail">
            <div className="slider-image">
              <Image src={slider1} alt="slider-1" />
            </div>
            <div className="slider-info">
              <h6>Colorful Art Work</h6>
              <p>
                <Link href={"#"}>See Detail</Link>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-detail">
            <div className="slider-image">
              <Image src={slider2} alt="slider-1" />
            </div>
            <div className="slider-info">
              <h6>Colorful Art Work</h6>
              <p>
                <Link href={"#"}>See Detail</Link>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-detail">
            <div className="slider-image">
              <Image src={slider3} alt="slider-1" />
            </div>
            <div className="slider-info">
              <h6>Colorful Art Work</h6>
              <p>
                <Link href={"#"}>See Detail</Link>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-detail">
            <div className="slider-image">
              <Image src={slider4} alt="slider-1" />
            </div>
            <div className="slider-info">
              <h6>Colorful Art Work</h6>
              <p>
                <Link href={"#"}>See Detail</Link>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-detail">
            <div className="slider-image">
              <Image src={slider1} alt="slider-1" />
            </div>
            <div className="slider-info">
              <h6>Colorful Art Work</h6>
              <p>
                <Link href={"#"}>See Detail</Link>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-detail">
            <div className="slider-image">
              <Image src={slider2} alt="slider-1" />
            </div>
            <div className="slider-info">
              <h6>Colorful Art Work</h6>
              <p>
                <Link href={"#"}>See Detail</Link>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
