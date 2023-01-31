import { contact } from "../data";
import ContactItems from "./ContactItems";

const Contact = () => {
  const { title } = contact;
  return (
    <section className="py-10 ">
      <div className="flex flex-col items-center">
        <div className="p-20">
          <div className="h1">{title}</div>
        </div>
        <div className="flex w-full flex-wrap">
          <ContactItems />
        </div>
      </div>
    </section>
  );
};

export default Contact;
