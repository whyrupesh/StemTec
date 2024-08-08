import React, { useState } from "react";

export default function Contact() {
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  function handleSubmit() {
    setemail("");
    setsubject("");
    setmessage("");
  }
  return (
    <div>
      <section className="bg-white dark:bg-white-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-indigo-900 dark:text-indigo-950">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-white-500 dark:text-white-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action="#" className="space-y-8">
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
                onChange={(e) => setemail(e.target.value)}
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
                onChange={(e) => setsubject(e.target.value)}
                className="block p-3 w-full text-sm text-black-900 bg-white-50 rounded-lg border border-white-300 shadow-sm  "
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
                onChange={(e) => setmessage(e.target.value)}
                className="block p-2.5 w-full text-sm mb-3 text-white-900 bg-white-50 rounded-lg shadow-sm border border-white-300"
                placeholder="Leave a comment..."
              ></textarea>
            </div>

            <button
              onClick={() => handleSubmit()}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
