import { contact } from "../data";
import ContactItems from "./ContactItems";

const Contact = () => {
  const { title } = contact;
  return (
    <section className="py-10 ">
      <div className="flex flex-col items-center">
        <div className="p-20">
          <div
            className="h1"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-offset="200"
          >
            {title}
          </div>
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
