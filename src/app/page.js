'use client';
import "./globals.css";
import GlowCursor from '../components/GlowCursor';

import Intro from "../components/Intro";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FadeUp from '../components/animations/FadeUp';
import VerticalMenu from '../components/VerticalMenu';
import TechStack from '../components/TechStack';
import Linear from "../components/linear";

export default function Home() {
  return (

    <div>
      <Linear />

      <main className="relative">
        <GlowCursor />
        <VerticalMenu />

        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 md:ml-16">

          {/* Left Section */}

          <div className="w-full lg:w-5/12 lg:sticky lg:top-0 lg:h-screen flex flex-col lg:scale-[0.97] ">
            <div className="flex-grow">
              <Intro />
            </div>
            <div className="hidden lg:block">
              <Footer />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-7/12 space-y-32 py-20">
            <FadeUp delay={0.9}>
              <section id="about">
                <About />
              </section>
              <section id="experience">
                <Experience />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="tech">
                <TechStack />
              </section>
              <section id="contact">
                <Contact />
              </section>
              <div className="block lg:hidden px-4 sm:px-6">
                <Footer />
              </div>
            </FadeUp>
          </div>
        </div>
      </main>
    </div>
  );
}
