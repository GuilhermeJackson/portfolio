import { tecnologies } from "../data";
import TechnologySlider from "./TechnologySlider";

const Technology = () => {
  const { title, icon } = tecnologies;
  return (
    <section className="sm:px-20 my-[120px]">
      <div
        className="section-title-group mb-0 -space-x-11 -space-y-0 max-w[540px] mx-auto px-4 lg:px-0 pb-4"
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-offset="200"
      >
        <img src={icon} alt="" />
        <h2 className="h2 section-title">
          {title} <span className="text-primary-200">.</span>
        </h2>
      </div>
      <div
        className="items-center"
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-offset="200"
      >
        <TechnologySlider />
      </div>
    </section>
  );
};

export default Technology;
