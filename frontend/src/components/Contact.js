import { useState } from "react";
import "./contact.css";

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
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          className="contact-input"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          className="contact-input"
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          className="contact-textarea"
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button className="contact-btn" type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}
