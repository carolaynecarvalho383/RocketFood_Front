import React, { memo, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { api } from "../../services/api"
// import required modules
import { Pagination, Navigation } from "swiper";

import { useAuth } from "../../hooks/auth";
import { useProduct } from "../../hooks/Product";
import { Card } from "../Card";



export function Carousel({ data, ...rest }) {
  console.log(data);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
            slidesPerGroup: 3
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
            slidesPerGroup: 4
          },
          1324: {
            slidesPerView: 5,
            spaceBetween: 50,
            slidesPerGroup: 5
          }
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >


        {
            data.map(product => (
              <SwiperSlide>
                <Card
                  key={product.id}
                  data={product}
                />
              </SwiperSlide>
            ))
        
          }




      </Swiper>
    </>
  );
}


