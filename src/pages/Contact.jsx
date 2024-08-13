import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import Loading from "../components/Loading";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendEmail(message, email, subject) {
    try {
      const result = await emailjs.send(
        "service_lju881e",
        "template_clshm9h",
        { message, email, subject },
        "jPnflVepk7r9V0uwi"
      );
      console.log("Email sent successfully:", result.text);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Validation check
    if (email === "" || subject === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    console.log("Sending message...");
    await sendEmail(message, email, subject); // Wait for the email to be sent
    console.log("Message sent");

    setLoading(false);

    // Clear the form fields after submission
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <div data-aos="flip-right">
      <section className="bg-white dark:bg-white-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-indigo-900 dark:text-indigo-950">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-white-500 dark:text-white-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action="#" className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-xl font-medium text-white-900 dark:text-white-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-sm bg-white-50 border border-white-300 text-black-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="name@Gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-xl font-medium text-white-900 "
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="block p-3 w-full text-sm text-black-900 bg-white-50 rounded-lg border border-white-300 shadow-sm"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-xl font-medium text-white-900 dark:text-white-400"
              >
                Your message
              </label>

              <textarea
                id="message"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block p-2.5 w-full text-sm mb-3 text-white-900 bg-white-50 rounded-lg shadow-sm border border-white-300"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Send message
            </button>
            {loading && <Loading />}
          </form>
        </div>
      </section>
    </div>
  );
}
