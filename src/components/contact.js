import React from "react";
import ContactDetails from "./contact-us/contact-details";
import ContactForm from "./contact-us/contact-form";

const Contact = () => {
  return (
    <div className="text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center font-mono">Contact</h2>
        <p className="text-center text-xl mb-14 md:mb-20">
          <span className="text-cyan-500 text-2xl font-bold">— </span>
          Let Me Know
          <span className="text-cyan-500 text-2xl font-bold"> —</span>
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
