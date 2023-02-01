import { contact } from "../data";
import ContactItems from "./ContactItems";

const Contact = () => {
  const { title } = contact;
  return (
    <section className="bg-neutral-500 py-14 mb-[100px]">
      <div className="flex flex-col items-center">
        <div >
          <h2
            className="h2 section-title text-white mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-offset="100"
          >
            {title}<span className="text-primary-200">.</span>
          </h2>
        </div>
        <div
          className="flex w-full flex-wrap"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <ContactItems />
        </div>
      </div>
    </section>
  );
};

export default Contact;
