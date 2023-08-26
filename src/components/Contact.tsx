"use client";

import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import Link from "next/link";
function Contact() {
  const [state, handleSubmit] = useForm("xayknbrb");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div id="contact" className="border-t-2 pt-8">
      <div className="b  p-6 shadow-md">
        <h2 className="text-2xl text-slate-300 font-semibold mb-4">
          Contact Me
        </h2>
        <p className="text-slate-300 mb-4">
          If you have any questions or inquiries, feel free to reach out!
        </p>
        <form className="space-y-4 pb-8" onSubmit={handleSubmit}>
          <input
            id="name"
            type="name"
            name="name"
            placeholder="Your Name"
            className="w-full py-2 px-4 text-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full py-2 px-4 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows={4}
            className="w-full py-2 px-4 border text-black border-gray-300 rounded-md resize-y focus:outline-none focus:ring focus:border-blue-300"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="text-slate-300 border-t-2 border-white pt-5 pb-4 flex justify-center items-center">
        <span className="pr-4">&copy;2023 Andrew Choi</span>
        <Link
          legacyBehavior
          href="https://www.linkedin.com/in/dong-choi"
          passHref
        >
          <a
            className=" px-4 py-2 border-slate-200"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/profile/linkedin.svg"
              width={20}
              height={20}
              layout="fixed"
              alt="logo"
            />
          </a>
        </Link>
        <Link legacyBehavior href="https://www.github.com/dongchoi" passHref>
          <a
            className=" px-4 py-2 border-slate-200"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/profile/github.svg"
              width={22}
              height={22}
              alt="github logo"
            />
          </a>
        </Link>
        <Link
          legacyBehavior
          href="https://instagram.com/silverbanana_?igshid=OGQ5ZDc2ODk2ZA=="
          passHref
        >
          <a
            className="px-4 py-2 border-slate-200"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/profile/instagram.svg"
              width={24}
              height={24}
              alt="IG"
            />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
