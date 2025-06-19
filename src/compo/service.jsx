import React from "react";
import { FaBriefcase, FaBullhorn, FaUsers, FaMapMarkedAlt } from "react-icons/fa";

const services = [
  {
    title: "Business Solutions",
    icon: <FaBriefcase className="text-4xl text-indigo-600 mb-4" />,
    description:
      "Custom strategies to optimize operations, improve productivity, and scale your business effectively.",
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn className="text-4xl text-indigo-600 mb-4" />,
    description:
      "Grow your brand online with SEO, social media marketing, content strategy, and PPC advertising.",
  },
  {
    title: "Offline Marketing",
    icon: <FaMapMarkedAlt className="text-4xl text-indigo-600 mb-4" />,
    description:
      "Reach real-world audiences with print ads, event marketing, and field promotions.",
  },
  {
    title: "Hiring Sales Teams",
    icon: <FaUsers className="text-4xl text-indigo-600 mb-4" />,
    description:
      "We build powerful sales teams tailored to your industry to boost your revenue growth.",
  },
];

const Services = () => {
  return (
    <div id="service" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 mb-12">
          We provide result-driven solutions for your business growth.
        </p>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex flex-col items-center">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
