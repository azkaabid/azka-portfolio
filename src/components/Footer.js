'use client';

import { FaGithub, FaLinkedin, FaInstagram, FaRegEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="pr-12 py-10 text-sm text-grayish mb-2">
      <div className="flex justify-center gap-12 mb-18">
        <a
          href="https://github.com/azkaabid"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://linkedin.com/in/azkaabid57"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://instagram.com/_azsky__"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="mailto:azkaabid57@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaRegEnvelope size={30} />
        </a>
      </div>

      <p className="flex justify-center gap-6 -mb-6 hover:text-neon">⋆.˚ ☾ ⋆˙⟡ Designed & Built by Azka Abid ⟡˙⋆ ☾ ˚.⋆</p>
    </footer>
  );
}
