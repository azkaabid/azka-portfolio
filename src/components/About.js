'use client';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto py-8 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-start gap-10">
        <div className="md:w-full text-lightwhite text-base leading-relaxed">
          <p className="mb-4">
            I’m a software engineer passionate about crafting seamless, scalable, and user-focused digital experiences. I thrive at the intersection of thoughtful design and robust engineering—building interfaces that are not only visually refined but also engineered for real-world performance, accessibility, and maintainability.
          </p>
          <p className="mb-4">
            Over the years, I’ve architected and delivered solutions across a diverse range of
            product environments—from
            <a href="https://www.easypaisa.com.pk/" target="_blank" rel="noopener noreferrer" className="hover:text-neon text-white font-semibold transition"><span> powering digital banking transformations</span>
            </a> at scale, to enhancing
            <a href="https://www.bankalhabib.com/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-neon transition">
              <span> mission-critical systems for leading financial institutions</span>
            </a>
            ,
            to delivering
            <a href="https://japanstation.com.pk/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-neon transition">
              <span> digital solutions for Japanese enterprises</span>
            </a>
            —including workflow dashboards, AI-powered
            translators, and e-learning platforms tailored for international clients.
          </p>
          <p className="mb-4">
            I take pride in writing clean, resilient code and crafting intuitive UI systems that elevate the user experience. Whether collaborating with cross-functional teams or owning end-to-end front-end architecture, I bring precision, adaptability, and a user-first mindset to every build.
          </p>
          <p>
            Outside of work, I find calm in the sky—tracing stars, chasing thunderstorms, and
            capturing nature through

            <a href="https://instagram.com/_azsky__" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-neon transition">
              <span> my lens. 
              </span>
            </a>
            I make a dangerously good iced latte and
            am fueled by<span> </span>
            <span className="group relative inline-block transition-all duration-500 cursor-naruto hover:cursor-naruto">
              <span className="text-white font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:via-yellow-300 group-hover:to-blue-500 transition-all duration-500">
                Naruto Uzumaki’s Will of Fire – Dattebayo!
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
