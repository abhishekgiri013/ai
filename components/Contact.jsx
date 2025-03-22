"use client";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true); // Show loading state

    const formData = new FormData(event.target);
    formData.append("access_key", "b757aad7-d29e-4839-ae1f-0dd0664385a8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    setLoading(false); // Hide loading state

    if (result.success) {
      setMessageSent(true);
      event.target.reset(); // Reset form after submission
      setTimeout(() => setMessageSent(false), 3000); // Hide message after 3 seconds
    }
  }

  return (
    <section id="contact">
      <div className="flex flex-col justify-center items-center min-h-screen bg-black px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-gray-900 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-white mb-4 text-center">Contact Me</h2>

          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Write your message..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 rounded-md font-medium transition duration-300 ${
              loading ? "bg-gray-600 cursor-not-allowed" : "bg-white text-black hover:bg-gray-300"
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>

          {/* Success Message */}
          {messageSent && (
            <p className="text-green-400 text-center mt-3 animate-fadeIn">Mail Sent ✅</p>
          )}
        </form>

        {/* Social Media Links */}
        <div className="flex gap-6 mt-6">
          <a
            href="https://www.linkedin.com/in/abhishekgiri013/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-2xl hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin />
          </a>
          
          <a
            href="https://github.com/abhishekgiri013"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-2xl hover:text-white transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/abhishekgiri013"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-2xl hover:text-pink-500 transition duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}
