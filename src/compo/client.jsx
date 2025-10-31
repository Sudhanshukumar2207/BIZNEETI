import React from "react";

const clients = [
  {
    name: "Tradeneeti",
    logo: "Tradeneeti-logo.png",
    website: "https://tradeneeti.com/",
  },
  // {
  //   name: "Rays Edutech",
  //   logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  //   website: "https://amazon.com",
  // },
];

const Clients = () => {
  return (
    <div id="client" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Clients</h2>
        <p className="text-gray-500 mb-10">
          We’ve had the privilege to work with some amazing brands.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center grayscale hover:grayscale-0 transition duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
