'use client';

import Link from "next/link";
import { FaLink } from "react-icons/fa";

export default function Experience() {

  const experiences = [
    {
      company: 'Easypaisa Digital Bank (Telenor Microfinance Bank)',
      role: 'Software Engineer',
      time: 'Sep 2024 – Mar 2025',
      details:
        'Built scalable web apps and reusable UI components for a microfinance institution’s digital transformation. Worked with architects and cross-functional teams to deliver stable, user-focused features for key operations.',
      tech: ['TypeScript', 'JavaScript', 'Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Azure', 'Figma'],
      live: [
        { name: 'Corporate Onboarding Portal', url: 'https://registerbusiness.easypaisa.com.pk/sign-up' },
        { name: 'Merchant Portal', url: 'https://registerbusiness.easypaisa.com.pk' },
      ],
      companySite: 'https://easypaisa.com.pk/'
    },
    {
      company: 'TeReSol Pvt. Ltd.',
      role: 'Senior Software Design Engineer',
      time: 'Jan 2024 – Sep 2024',
      details:
        'Led front-end development to improve modularity, performance, and maintainability. Mentored juniors, conducted code reviews, and translated requirements into scalable technical solutions.',
      tech: ['JavaScript', 'Vue.js', 'Express', 'Storybook', 'Pinia', 'Node.js', 'Postman', 'Linux'],
      live: [{ name: 'AL Habib Banking System', url: 'https://bankalhabib.com' }],
      companySite: 'https://www.linkedin.com/company/teresolpvtltd/',
    },
    {
      company: 'TeReSol Pvt. Ltd.',
      role: 'Software Design Engineer',
      time: 'Apr 2022 – Dec 2023',
      details:
        'Developed responsive UIs and backend integrations to enhance scalability and data flow. Collaborated in Agile teams to improve API performance for fintech systems.',
      tech: ['JavaScript', 'Vue', 'Express', 'Vuex', 'Storybook', 'Postman', 'Java/Quarkus', 'MySQL', 'Linux'],
      live: [{ name: 'AL Habib Banking System', url: 'https://bankalhabib.com' }],
      companySite: 'https://www.linkedin.com/company/teresolpvtltd/',
    },
    {
      company: 'Japan Station Technologies',
      role: 'Software Engineer',
      time: 'Dec 2021 – Apr 2022',
      details:
        'Delivered tailored software solutions including dashboards, translation tools, and e-learning platforms under tight deadlines for international clients.',
      tech: ['React.js', 'JavaScript', 'jQuery', 'Bootstrap', 'HTML/CSS', 'PostgreSQL', 'PHP Laravel', 'Figma'],
      companySite: 'https://japanstation.com.pk/',
    },
  ];

  return (
    <section id="experience" className="max-w-7xl mx-auto py-20 px-6 md:px-12">
      <h2 className="text-xl md:text-xl font-bold text-white mb-10">Work Experience</h2>

      <div className="space-y-4 mb-8">

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative bg-transparent w-full ml-4 p-4 transition-all duration-300 hover:bg-[#ffffff0a] hover:rounded-lg hover:shadow-md hover:scale-[1.02]"
          >
            <Link
              href={exp.companySite}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-0"
            />

            <div className="relative z-10">
              <Link
                href={exp.companySite}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-0"
              />
              <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-neon">
                {exp.role} <span>@ {exp.company}</span>
              </h3>
              <p className="text-sm text-grayish mb-2">{exp.time}</p>

              <p className="text-grayish text-sm leading-relaxed whitespace-pre-wrap break-words">
                {exp.details}
              </p>

              <div className="flex flex-wrap gap-8 pt-2">
                {exp.live?.map((item, i) => (
                  <Link
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ccd6f6] text-sm flex items-center gap-2 hover:text-[#00ffffbb] relative z-20"
                  >
                    <FaLink /> {item.name}
                  </Link>
                ))}
              </div>

              <ul className="flex flex-wrap text-xs gap-2 py-2 ml-0 text-neon mb-0">
                {exp.tech.map((tech, i) => (
                  <li
                    key={i}
                    className="bg-[#00ffff22] rounded-lg px-2 border border-[#00ffff33]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <Link href="resume.pdf" passHref
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-neon px-6 pt-2 hover:px-8 hover:text-lg text-white cursor-pointer"
      >
        View Full Resume<span className="ml-1 ">
          ↗
        </span>
      </Link>
    </section>
  );
}

