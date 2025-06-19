import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    name: "Himanshu Kumar",
    role: "Full Stack Developer",
    image: "himanshu.jpg", // Replace with real image URL
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
  {
    name: "Aryan",
    role: "UI/UX Designer",
    image: "aryan.jpg", // Replace with real image URL
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
  {
    name: "Himanshu Kumar",
    role: "Full Stack Developer",
    image: "himanshu.jpg", // Replace with real image URL
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
  {
    name: "Aryan",
    role: "UI/UX Designer",
    image: "aryan.jpg", // Replace with real image URL
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
];

const Team = () => {
  return (
    <div id="team" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
        <p className="text-gray-600 mb-10">
          The talented minds behind our success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img className="w-full h object-cover" src={member.image} alt={member.name} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-500 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4 text-gray-500">
                  <a href={member.linkedin} className="hover:text-blue-600"><FaLinkedin /></a>
                  <a href={member.github} className="hover:text-black"><FaGithub /></a>
                  <a href={member.twitter} className="hover:text-blue-400"><FaTwitter /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
