// src/components/ContactForm.js
"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(false);

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.number,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", number: "", message: "" });
      } else {
        const err = await response.json();
        console.error("Email sending failed:", err);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div id="Contact" className="w-full  max-w-6xl mx-auto">
      {/* Header Section */}

      <div className="flex flex-col lg:flex-row  gap-8">
        {/* Features Section */}

        {/* Contact Form */}
        <div className="w-full lg:w-1/2  mx-auto">
          <div className="bg-black/60 rounded-xl border border-yellow-400/50 p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-yellow mb-6 text-center">
              سجل في الدورة الآن
            </h2>
            {isSubmitted && (
              <div className="mb-6 p-4  bg-green-900/30 border border-green-500 rounded-lg text-green-300 flex justify-end items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                تم إرسال بياناتك بنجاح! سنتواصل معك قريبًا.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-yellow mb-2 font-medium text-right">
                  الاسم
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="أدخل اسمك الكامل"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent text-white border border-yellow/60 placeholder-gray-400 text-right p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow transition"
                  required
                />
              </div>

              <div>
                <label className="block text-yellow mb-2 font-medium text-right">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@domain.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent text-white border border-yellow/60 placeholder-gray-400 text-right p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow transition"
                  required
                />
              </div>

              <div>
                <label className="block text-yellow mb-2 font-medium text-right">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  name="number"
                  placeholder="05XXXXXXXX"
                  value={formData.number}
                  onChange={handleChange}
                  className="w-full bg-transparent text-white border border-yellow/60 placeholder-gray-400 text-right p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow transition"
                  required
                />
              </div>

              <div>
                <label className="block text-yellow mb-2 font-medium text-right">
                  رسالتك
                </label>
                <textarea
                  name="message"
                  placeholder="اذا عندك استفسار ارسل هنا"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent text-white border border-yellow/60 placeholder-gray-400 text-right p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow transition"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-lg font-bold py-3 rounded-lg hover:from-yellow hover:to-yellow-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-yellow-500/20"
              >
                إرسال التسجيل
              </button>
            </form>
          </div>

          {/* Footer */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
