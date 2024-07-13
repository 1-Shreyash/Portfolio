"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import axios from "axios";
import { Black_Ops_One } from "@next/font/google";

const blackOps = Black_Ops_One({ subsets: ["latin"], weight: "400" });

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;
    btn.style.setProperty("--x", x + "px");
    btn.style.setProperty("--y", y + "px");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post("/api/contact", formData);
      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-w-[50%] mx-auto p-8 bg-white shadow-md rounded-lg max-md:min-w-[80%]"
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="btn"
            ref={btnRef}
            onMouseMove={handleMouseMove}
          >
            <span className="flex flex-row">
              <p>Send</p>
              <FiSend className="mt-1 mx-1" />
            </span>
          </button>
        </div>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </motion.div>
  );
};

export default ContactForm;
