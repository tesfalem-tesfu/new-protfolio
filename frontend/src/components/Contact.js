import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://new-protfolio-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      alert(data.message || "Message sent successfully ✅");

      setForm({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      alert("Failed to send message ❌. Please try again later.");
      console.error(error);
    }
  };

  return (
    <section
      id="contact"
      className="flex justify-center items-center py-16 bg-gradient-to-br from-purple-400 via-pink-400 to-red-400"
    >
      <div className="w-full max-w-2xl p-8 bg-white rounded-3xl shadow-2xl backdrop-blur-md">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Contact Me
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-4 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none transition"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="p-4 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none transition"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={6}
            className="p-4 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none transition resize-none"
          />

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl shadow-md transition-all hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
