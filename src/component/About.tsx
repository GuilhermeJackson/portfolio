import { about } from "../data";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const About = () => {
  const { title, subtitle1, subtitle2, icon, linkedin, instagram } = about;
  return (
    <section className="py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[60px]">
      <div className="container mx-auto px-[20px] lg:px-[135px]">
        <div
          className="section-title-group justify-start"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-offset="200"
        >
          <img src={icon} alt="" />
          <h2 className="h2 section-title">
            {title}
            <span className="text-primary-200">.</span>
          </h2>
        </div>
        <p
          className="md:text-body-md mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-offset="200"
        >
          {subtitle1}
        </p>
        <p
          className="md:text-body-md mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-offset="200"
        >
          {subtitle2}
        </p>
        
      </div>
    </section>
  );
};

export default About;
