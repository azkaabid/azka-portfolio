'use client';

import Image from 'next/image';

const techLogos = [
  { src: '/logos/html.png', alt: 'HTML' },
  { src: '/logos/css3.png', alt: 'CSS' },
  { src: '/logos/bootstrap.png', alt: 'Bootstrap' },
  { src: '/logos/react.png', alt: 'React', name: 'React' },
  { src: '/logos/nextjslogo.png', alt: 'NextJS' },
  { src: '/logos/vue.png', alt: 'Vue.js' },
  { src: '/logos/tailwind.png', alt: 'Tailwind CSS' },
  { src: '/logos/typescript.png', alt: 'TypeScript' },
  { src: '/logos/javascript.png', alt: 'JavaScript' },
  { src: '/logos/redux.png', alt: 'Redux' },
  { src: '/logos/figma.png', alt: 'Figma' },

  { src: '/logos/node.png', alt: 'NodeJS' },
  { src: '/logos/express.png', alt: 'ExpressJS' },
  { src: '/logos/postman.png', alt: 'Postman' },

  { src: '/logos/mongodb.png', alt: 'MongoDB' },
  { src: '/logos/mysql.png', alt: 'MySQL' },
  { src: '/logos/sql.png', alt: 'SQL' },
  { src: '/logos/postgresql.png', alt: 'PostgreSQL' },

  { src: '/logos/beaver-head.png', alt: 'DBeaver' },
  { src: '/logos/java.png', alt: 'Java' },
  { src: '/logos/jquery.png', alt: 'jQuery' },

  { src: '/logos/php.png', alt: 'PHP' },
  { src: '/logos/laravel.png', alt: 'Laravel' },
  { src: '/logos/docker.png', alt: 'Docker' },

  { src: '/logos/jenkins.png', alt: 'Jenkins' },
  { src: '/logos/vercel.png', alt: 'Vercel' },

  { src: '/logos/azure.png', alt: 'Azure' },
  { src: '/logos/bubble.png', alt: 'Bubble' },
  { src: '/logos/git.png', alt: 'Git' },
  { src: '/logos/github.png', alt: 'GitHub' },
  { src: '/logos/gitlab.png', alt: 'GitLab' },
];

function MarqueeRow({ reverse = false }) {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className={`inline-block animate-marquee ${reverse ? 'animate-marquee-reverse' : ''}`}>
        {[...techLogos, ...techLogos].map((logo, index) => (
          <div
            key={index}
            className="inline-block w-20 mx-4 my-6  flex-col items-center group"
          >
            <div
              className="w-20 h-20 mb-2 rounded-xl border border-[#00ffff61] flex items-center justify-center transition-shadow duration-300 group-hover:shadow-[0_0_15px_#00ffff61]"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <p className="text-white text-sm text-center">{logo.alt ?? ''}</p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="tech" className="max-w-7xl mx-auto py-20 px-6 md:px-12">

      <h2 className="text-xl md:text-xl font-bold text-white mb-10 text-left">
        Technology Stack
      </h2>

      <div className="space-y-6 ml-10 pr-12">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
