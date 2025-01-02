import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Contact Us Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={assets.contact_image}
              alt="Contact Us"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Office</h3>
            <p>54709 Williams Station</p>
            <p>Suite 350, Washington, USA</p>
            <p className="mt-4">Tel: (425) 555-0132</p>
            <p>Email: greatstackdev@gmail.com</p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Careers at Prescripto
            </h3>
            <p className="mb-4">
              Learn more about our teams and job openings.
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
              Explore Jobs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
