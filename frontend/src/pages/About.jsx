import React from "react";
import { assets } from "../assets/assets";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* About Us Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={assets.about_image}
              alt="Doctors"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="mb-4">
              Welcome to Prescripto, your trusted partner in managing your
              healthcare needs conveniently and efficiently. At Prescripto, we
              understand the challenges individuals face when it comes to
              scheduling doctor appointments and managing their health records.
            </p>
            <p className="mb-4">
              Prescripto is committed to excellence in healthcare technology. We
              continuously strive to enhance our platform, integrating the
              latest advancements to improve user experience and deliver superb
              service. Whether you’re booking your first appointment or managing
              ongoing care, Prescripto is here to support you every step of the
              way.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4">Our Vision</h3>
            <p>
              Our vision at Prescripto is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Efficiency</h3>
              <p>
                Streamlined appointment scheduling that fits into your busy
                lifestyle.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Convenience</h3>
              <p>
                Access to a network of trusted healthcare professionals in your
                area.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Personalization</h3>
              <p>
                Tailored recommendations and reminders to help you stay on top
                of your health.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
