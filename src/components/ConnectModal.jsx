'use client';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { RxPerson, RxEnvelopeClosed, RxChatBubble, RxCross2 } from "react-icons/rx";

export default function ConnectModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const resetForm = (e) => {
    setForm({ name: '', email: '', message: '' });
    onClose();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_#######",
        "template_######",
        form,
        "################"
      )
      .then(() => {
        alert('Message sent!');
        onClose();
      })
      .catch((err) => {
        alert('Failed to send: ' + err.text);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="bg-transparent backdrop-blur-lg border border-white/20 p-6 rounded-xl w-full max-w-md shadow-xl text-white">

        <button
          onClick={resetForm}

          className="absolute top-4 right-4 hover:text-white text-xl text-gray-400 focus:outline-none cursor-pointer"
          aria-label="Close modal"
        >
          <RxCross2 />
        </button>

        <div className="flex flex-col space-y-1.5 text-center sm:text-center">
          <h2 className="tracking-tight text-3xl font-bold text-center">
            Drop Me a Message
          </h2>
          <p className="text-sm">
            I usually reply pretty quick. Feel free to reach out anytime!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">

          <div className='relative'>
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-200">
              <RxPerson />
            </span>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="flex h-9 rounded-md border border-white/20 bg-transparent px-3 shadow-sm transition-colors md:text-sm pl-10 pr-4 py-2 w-full text-sm"
              required
            />
          </div>

          <div className='relative'>
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-200">
              <RxEnvelopeClosed />
            </span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="flex h-9 rounded-md border border-white/20 bg-transparent px-3 shadow-sm transition-colors md:text-sm pl-10 pr-4 py-2 w-full text-sm"

              required
            /></div>

          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-200">
              <RxChatBubble />
            </span>
            <textarea
              name="message"
              placeholder="Type your message"
              value={form.message}
              onChange={handleChange}
              className="flex min-h-[90px] rounded-md border border-white/20 bg-transparent px-3 md:text-sm pl-10 pr-4 py-2 w-full text-sm"
              required
            />
          </div>


          <div className="flex justify-between ">
            <button
              type="button"
              onClick={resetForm}
              className="cursor-pointer inline-flex items-center justify-center gap-2  rounded-md text-sm font-medium transition-colors border border-white/40 hover:bg-[#34343494] hover:border-[#34343494] h-9 px-4 py-2">
              Cancel
            </button>
            <button
              type="submit"
              className="cursor-pointer inline-flex items-center  justify-center gap-2  rounded-md text-sm font-medium transition-colors h-9 px-4 py-2 border  border-neon text-neon hover:bg-neon hover:text-[#0e071e]">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
