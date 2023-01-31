import { contactItems } from "../data";

const ContactItems = () => {
  const { contactsItems } = contactItems;
  return (
    <div className="flex w-full justify-around flex-wrap">
      {contactsItems.map((contact) => {
        return (
          <div className="grid justify-items-center mx-8 my-10 ">
            <a href={contact.url} target="_blank">
              <div
                className="flex w-20 h-20 items-center justify-center bg-neutral-500 rounded-full"
                key={contact.title}
              >
                {contact.icon}
              </div>
            </a>
            <p className="md:text-body-md flex-wrap">{contact.title}</p>
            <p className="md:text-body-md flex-wrap">{contact.myContact}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactItems;
