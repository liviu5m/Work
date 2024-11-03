"use client";

import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperSlideComponent from "./SwiperSlideComponent";

export default function SwiperComponent() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      modules={[Navigation, Pagination]}
    >
      <SwiperSlide className="py-10 px-5">
        <SwiperSlideComponent
          img="/imgs/icons/apple-logo.png"
          text="Apple"
          desc="The automated process starts as soon as your clothes go into."
        />
      </SwiperSlide>
      <SwiperSlide className="py-10 px-5">
        <SwiperSlideComponent
          img="/imgs/icons/facebook.png"
          text="Facebook"
          desc="The automated process starts as soon as your clothes go into."
        />
      </SwiperSlide>
      <SwiperSlide className="py-10 px-5">
        <SwiperSlideComponent
          img="/imgs/icons/google.png"
          text="Google"
          desc="The automated process starts as soon as your clothes go into."
        />
      </SwiperSlide>
      <SwiperSlide className="py-10 px-5">
        <SwiperSlideComponent
          img="/imgs/icons/meta.png"
          text="Meta"
          desc="The automated process starts as soon as your clothes go into."
        />
      </SwiperSlide>
      <SwiperSlide className="py-10 px-5">
        <SwiperSlideComponent
          img="/imgs/icons/microsoft.png"
          text="Microsoft"
          desc="The automated process starts as soon as your clothes go into."
        />
      </SwiperSlide>
      <SwiperSlide className="py-10 px-5">
        <SwiperSlideComponent
          img="/imgs/icons/nvidia.png"
          text="NVidia"
          desc="The automated process starts as soon as your clothes go into."
        />
      </SwiperSlide>
      <SwiperSlide className="py-10 px-5">
        <SwiperSlideComponent
          img="/imgs/icons/photoshop.png"
          text="Photoshop"
          desc="The automated process starts as soon as your clothes go into."
        />
      </SwiperSlide>
      <SwiperSlide className="py-10 px-5">
        <SwiperSlideComponent
          img="/imgs/icons/social.png"
          text="Amazon"
          desc="The automated process starts as soon as your clothes go into."
        />
      </SwiperSlide>
      <SwiperSlide className="py-10 px-5">
        <SwiperSlideComponent
          img="/imgs/icons/whatsapp.png"
          text="Whatsapp"
          desc="The automated process starts as soon as your clothes go into."
        />
      </SwiperSlide>
      <SwiperSlide className="py-10 px-5">
        <SwiperSlideComponent
          img="/imgs/icons/x.png"
          text="X"
          desc="The automated process starts as soon as your clothes go into."
        />
      </SwiperSlide>
    </Swiper>
  );
}
