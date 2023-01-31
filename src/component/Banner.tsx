import { banner } from "../data";
const Banner = () => {
  const { titlePart1, titlePart2, subtitle, textBtn } = banner;
  return (
    <section className="bg-neutral-500 h-[790px]">
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full relative -space-x-48 lg:-space-x-56">
          <div className="text-white flex-1 z-10 pl-6 mt-[450px] lg:pl-0 md:mt-0">
            <h1
              className="h1 text-white mb-8"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              {titlePart1}
              <br /> <span className="text-primary-200">{titlePart2}</span>
            </h1>
            <button
              className="btn btn-secondary"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <a href="https://github.com/GuilhermeJackson" target="_blank">{textBtn}</a>
            </button>
          </div>
          <div
            className="bg-blue-300 w-full h-full bg-banner bg-cover bg-center  lg:bg-center bg-no-repeat flex-1"
            data-aos="fade-left"
            data-aos-delay="500"
          >
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
