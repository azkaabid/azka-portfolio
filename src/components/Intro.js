'use client';
import Image from 'next/image';
import FadeUp from './animations/FadeUp';

export default function Intro() {
  return (
    <div className="flex justify-start px-6 md:px-20 h-full">
      <section className="flex flex-col max-w-xl text-left ml-0">

        <FadeUp delay={0.1}>


          <div className="group pt-25 flex flex-col md:flex-row items-center md:items-start md:space-x-8 w-full mb-4">

            <div className="-ml-18 w-40 h-40 md:w-40 md:h-40 relative rounded-full overflow-hidden border-2 border-[#00ffff61]">
              <Image
                src="/me/me8.jpg"
                alt="Azka Abid"
                width={500}
                height={500}
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition duration-500"
                priority
              />
            </div>

            <h2 className="pt-14 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-glow animate-glow mt-6 md:mt-0">
              Azka Abid
            </h2>
          </div>

        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-sm sm:text-base md:text-lg text-white font-bold max-w-xl pt-2 pb-3">
            Full Stack Software Engineer | Frontend Architect
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>

          <h3 className="text-base sm:text-lg md:text-xl lg:text-lg text-lightwhite mb-4 lg:mb-2 max-w-[90%] leading-snug">
            I architect frontend and backend solutions, AI-assisted or not, always embracing the best of both worlds.
          </h3>

        </FadeUp>
      </section>
    </div>
  );
}
