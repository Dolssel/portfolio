import { useState } from "react";
import Section from "./Section";

// The shape of our form's data — one field per input.
interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  // ONE state object holds every field. Starts all-empty.
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // ONE handler for every input — it uses the input's `name` to know
  // which field to update. This is the immutable-object update from Lesson 5.
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();          // stop the browser's default full-page reload
    setSubmitted(true);          // (later: send to a server)
  };

  return (
    <Section id="contact" number="04." title="Get in touch" centered>
      <p className="contact-text">
        Whether you have a question or just want to say hi — drop me a line.
      </p>

      {submitted ? (
        <p className="form-success">Thanks, {form.name}! I'll get back to you. ✅</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
  type="button"
  className="btn btn-outline"
  onClick={() => setForm({ name: "", email: "", message: "" })}
>
  Clear
</button>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      )}
    </Section>
  );
}