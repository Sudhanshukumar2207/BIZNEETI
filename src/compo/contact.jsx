import React, { useState } from "react";
import Input from "./input";
import Textarea from "./textarea";
import { Button } from "../components/ui/Button";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwIZ3rqlMY0H21L1J3lK_nWtffs1itcp5145nMiPmQ-KQWaazjYFES1BeQDUlRuxYHvaQ/exec";

  try {
    const response = await fetch(scriptURL+`?name=${form.name}&email=${form.email}&number=${form.number}&message=${form.message}`, {
      method: "GET",
    });

    if (response.ok) {
      alert("Form submitted successfully!");
      setForm({ name: "", email: "", number: "", message: "" });
    } else {
      alert("Something went wrong!");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error submitting form!");
  }
};



  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-gray-100">
      <div className="m-8 pt-5 bg-white shadow-md rounded-md">
        <h1 className="text-center text-xl font-semibold mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit} className="p-8">
          <Input label="Name" name="name" value={form.name} onChange={handleChange} type="text" />
          <Input label="Email" name="email" value={form.email} onChange={handleChange} type="email" />
          <Input label="Number" name="number" value={form.number} onChange={handleChange} type="text" inputMode="numeric" />
          <Textarea label="Message" name="message" value={form.message} onChange={handleChange} rows="4" />
          <Button type="submit" className="w-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300">
            Submit
          </Button>
        </form>
      </div>

      <div className="w-[350px] h-[300px] m-8 bg-white lg:w-[500px] lg:h-[400px] rounded-md overflow-hidden shadow-md">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
