"use client";

import React, { useState, useRef, useEffect } from "react";
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

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-w-[50%] mx-auto p-8 bg-white shadow-md rounded-lg max-md:min-w-[80%]"
    >
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
            placeholder=" " // This keeps the label floating when input is empty
          />
          <label htmlFor="name" className="floating-label">
            Name
          </label>
        </div>
        <div className="input-container">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
            placeholder=" "
          />
          <label htmlFor="email" className="floating-label">
            Email
          </label>
        </div>
        <div className="input-container">
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="input-field"
            placeholder=" "
          />
          <label htmlFor="message" className="floating-label">
            Message
          </label>
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
