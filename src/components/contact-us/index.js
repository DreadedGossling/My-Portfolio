import React from "react";
import ContactDetails from "./contact-details";
import ContactForm from "./contact-form";

const Contact = () => {
  return (
    <div className="pt-6 md:pt-12 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center font-mono">Contact Me</h2>
        <p className="text-center md:text-xl mb-10 md:mb-20">
          <span className="text-cyan-500 text-2xl font-bold">— </span>
          Connect With Me
          <span className="text-cyan-500 text-2xl font-bold"> —</span>
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 mb-12 md:mb-20">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
