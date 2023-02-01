import { contactItems } from "../data";

const ContactItems = () => {
  const { contactsItems } = contactItems;
  return (
    <div className="flex w-full justify-around flex-wrap">
      {contactsItems.map((contact) => {
        return (
          <div className="grid justify-items-center mx-8" key={contact.id}>
            <a href={contact.url} target="_blank">
              <div className="flex w-[55px] h-[55px] items-center justify-center bg-primary-200 rounded-full">
                {contact.icon}
              </div>
            </a>
            <p className="md:text-body-md flex-wrap text-white">
              {contact.myContact}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactItems;
