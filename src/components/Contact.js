'use client';

import { useState } from 'react';
import ConnectModal from '../components/ConnectModal';

export default function Contact() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="contact"
      className="max-w-2xl mx-auto py-20 px-6 md:px-20 text-center"
    >
      <h3 className="text-3xl md:text-4xl font-bold text-neon mb-6">
        Let’s Build Something Great
      </h3>
      <p className="text-lightwhite mb-8">
        Got a project or idea? I’m just an email away. <br />
        Let’s collaborate and create something awesome together.
      </p>
      <button
        onClick={() => setModalOpen(true)}
        className="inline-block border border-neon text-neon px-6 py-3 rounded hover:bg-neon hover:text-[#0e071e] transition-colors cursor-pointer"
      >
        Connect
      </button>

      <ConnectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
