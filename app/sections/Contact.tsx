"use client";
import { useState } from "react";
interface FormData {
  name: string;
  email: string;
  number: string;
  message: string;
}
const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };
  return (
    <section className="relative h-screen w-full  ">
      <div className=" relative  w-full h-full flex flex-col justify-evenly items-center ">
        <div className="text-center mb-6 flex flex-col gap-6">
          <h1 className="text-3xl md:text-5xl font-black text-yellow mb-4">
            برنامج دورة الذكاء الاصطناعي
          </h1>
          <p className="text-white text-2xl font-bold bg-black/60 rounded-2xl border-2 border-yellow px-9 py-2">
            سيي عفسة جديدة
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg space-y-4 bg-black/60 p-6 rounded-xl border border-yellow/50"
        >
          <input
            type="text"
            name="name"
            placeholder=": الاسم"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent text-white border border-yellow/60 placeholder-white font-arabic font-bold text-end p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder=": البريد الإلكتروني"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent text-white border border-yellow/60 placeholder-white font-arabic font-bold text-end p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            required
          />
          <input
            type="tel"
            name="number"
            placeholder=": رقم الهاتف"
            value={formData.number}
            onChange={handleChange}
            className="w-full bg-transparent text-white border border-yellow/60 placeholder-white font-arabic font-bold text-end p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            required
          />
          <textarea
            name="message"
            placeholder=": رسالتك"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-transparent text-white border border-yellow/60 placeholder-white font-arabic font-bold text-end p-3 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-400/50 text-white text-xl font-black py-3 rounded-lg hover:bg-black hover:text-yellow-400 border border-yellow-400 transition duration-300"
          >
            إرسال
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
