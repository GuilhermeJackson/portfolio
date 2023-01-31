import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { tecnologiesSlider } from "../data";

const TechnologySlider = () => {
  const { tecnologies } = tecnologiesSlider;
  return (
    <Swiper
      
      slidesPerView={2}
      spaceBetween={-30}
      navigation={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation]}
      className="pl-10 pr-10"
    >
      {tecnologies.map((tecnology, index) => {
        const { image, name } = tecnology;
        return (
          <SwiperSlide
            className="max-w-[320px] max-h-[320px] relative "
            key={index}
          >
            <div className="w-full h-full object-cover">
              {image}
              <div className="absolute left-[20px] bottom-[20px] bg-neutral-200 h-[26px] px-[14px] flex items-center rounded-[1px]">
                <div className="font-primary font-semibold text-sm text-neutral-500">
                  {name}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TechnologySlider;
