import { contact } from "../data";
import ContactItems from "./ContactItems";

const Contact = () => {
  const { title } = contact;
  return (
    <section className="py-10 mb-[100px]">
      <div className="flex flex-col items-center">
        <div className="p-20">
          <h2
            className="h2 section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-offset="200"
          >
            {title}
          </h2>
        </div>
        <div
          className="flex w-full flex-wrap"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-offset="200"
        >
          <ContactItems />
        </div>
      </div>
    </section>
  );
};

export default Contact;
