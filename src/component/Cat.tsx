import { cat } from "../data";

const Join = () => {
  const { title, subtitle, image } = cat;
  return (
    <section className="bg-neutral-500 max-h-[490px] mb-20">
      <div className="container mx-auto">
        <div className="flex flex-col ml-5 md:flex-row md:items-center md: -space-y-24 lg:-space-y-0">
          <div
            className="-mt-[80px] max-w-[276px] md:max-w-[442px] lg:max-w-[380px]"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            <img src={image} alt="" className="transform hover:scale-105 hover:rotate-5"/>
          </div>
          <div
            className="max-w-[350px] mt-10  lg:max-w-[492px] ml-[30px]"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            <h2 className="h1 md:text-[60px] md:leading-[62px] mb-4 lg:mb-6 mt-[0px] text-white">
              {title} <span className="text-primary-200">&</span>
            </h2>
            <p className="text-body-sm md:text-body-md text-white mb-4 lg:mb-6 max-h-[437px] max-w-[348px] md:max-w-[470px] lg:max-w-[492px]">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
