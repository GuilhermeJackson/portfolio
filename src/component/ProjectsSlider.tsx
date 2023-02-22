import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { project } from "../data";

const { portfolioList } = project;

const ProjectsSlider = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {portfolioList.map((item) => {
        return (
          <a href={item.urlDeploy} target="_blank">
            <div
              className="flex flex-col relative w-[350px] h-[270px] justify-center items-center
            bg-gradient-to-b from-neutral-100 to-neutral-500"
            >
              <div className="bg-auto bg-no-repeat bg-center">
                <img
                  className="bg-no-repeat bg-center"
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="absolute bottom-[2px] text-white p-[20px] text-center">
                {/* <div className="mb-8 italic text-lg font-light">
                  {item.description}
                </div> */}
                <div className="flex items-center justify-center gap-x-[3px]">
                  <span className="text-[30px] text-primary-200 font-bold">
                    ~
                  </span>
                </div>
                <div className="text-[20px] font-bold">{item.title}</div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default ProjectsSlider;
