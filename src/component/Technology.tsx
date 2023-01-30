import { tecnologies } from "../data";
import TechnologySlider from "./TechnologySlider";

const Technology = () => {
    const { title, icon } = tecnologies;
  return (
    <section className="mb-20">
      <div
        className="section-title-group -space-x-11 -space-y-10 max-w[540px] mx-auto px-4 lg:px-0"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <img src={icon} alt="" />
        <h2 className="h2 section-title">
          {title} <span className="text-primary-200">.</span>
        </h2>
      </div>
      <div className="items-center" data-aos="fade-right" data-aos-delay="200">
        <TechnologySlider />
      </div>
    </section>
  );
};

export default Technology;
