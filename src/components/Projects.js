'use client';

import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: 'Easypaisa Corporate Onboarding System (Enabled Digital Bank Licensing)',
      description: 'Led the frontend development of Easypaisa’s Corporate Onboarding System—an essential solution for regulatory compliance with the State Bank of Pakistan to acquire a Digital Retail Banking (DRB) license. Designed and built scalable, multi-step onboarding flows supporting multiple applicants, real-time image capture, 2FA authentication, chunk-based file uploads, and session persistence. This portal significantly reduced onboarding drop-offs and enabled corporate entities to operate within the Easypaisa digital ecosystem.',
      tech: ['Next.js', 'React', 'TypeScript', 'Redux Toolkit', 'React Query', 'Axios', 'Tailwind CSS', 'Formik', 'REST API Integration'],
      detail: ['Built dynamic form architecture supporting nested multi-applicant data using Formik.',
        'Engineered chunk-based file uploads to resolve API timeouts.',
        'Integrated OTP-based 2FA login, session persistence, and live photo capture.',
        'Created real-time application tracking with a stepper UI.',
        'Designed conditional form rendering to simplify revision workflows.',
        'Collaborated closely with backend and QA for seamless deployments.'
      ],
      live: 'https://registerbusiness.easypaisa.com.pk/sign-up',
      image: '/projects/easy7.png'
    },
    {
      title: 'Easypaisa Merchant Onboarding Portal',
      description: 'Contributed to the development of Easypaisa’s merchant onboarding system by crafting pixel-perfect UI based on Figma designs, and implementing robust API integrations for seamless merchant registration. Focused on enhancing accessibility, building reusable components, and ensuring reliable form handling with dynamic validations. Played a key role in delivering a user-centric, production-grade portal that supports Easypaisa’s digital transformation goals.',
      tech: ['Next.js', 'TypeScript', 'Redux', 'Tailwind CSS', 'Formik', 'REST API Integration'],
      detail: ['Developed dynamic onboarding workflows with real-time form validations.',

        'Integrated REST APIs for secure and reliable data transactions.',

        'Optimized frontend performance for accessibility and responsiveness.',

        'Implemented scalable and modular UI architecture.'
      ],
      live: 'https://registerbusiness.easypaisa.com.pk/',
      image: '/projects/easy0.png'

    },


    {
      title: 'Core Banking System Modernization – Bank Al Habib',
      description: 'Enterprise Application Suite - Redesigned the mission-critical internal banking platform used across all Bank Al Habib branches nationwide.',
      tech: ['Vue.js', 'FSM', 'Java (Quarkus)'],
      detail: ['Engineered 20+ production-grade business workflows across Teller, CRM, Remittance, and OBS modules, facilitating real-time banking operations.',
        'Led UI architecture using atomic design principles and integrated state-driven middleware (FSM) for secure API orchestration.',
        'Delivered component libraries and screen systems (Megasets/Supersets) through Storybook, enabling scalable, cross-team development.'
      ],
      live: 'https://bankalhabib.com',
      image: '/projects/alhabib1.jpeg'

    },
    {
      title: 'Currency Microservice – Bank Al Habib',
      description: 'Architected and stabilized a core microservice powering all internal currency conversion operations across the bank’s ecosystem.',
      tech: ['Java (Quarkus)', 'Postman', 'REST APIs'],
      detail: ['Designed and optimized API endpoints used in high-frequency transactions and treasury systems.',
        'Diagnosed critical defects and ensured seamless integration with downstream banking workflows.'
      ]
    },
    {
      title: 'OBS Reporting Engine',
      description: 'Data Pipeline & PDF Automation - Developed a transactional reporting engine enabling on-demand PDF generation of operational data.',
      tech: ['Next.js', 'Tailwind CSS', 'React Query'],
      detail: ['Implemented dynamic filtering (date ranges, account types) with backend binary-to-JSON decoding.',
        'Ensured audit-compliant report generation with fault-tolerant data rendering and formatting.'
      ]
    },
    {
      title: 'Teller Operations Suite',
      description: 'Financial Workflow Automation - Delivered high-impact teller-side features that automated cash handling, interbank transfers, and fund allocations.',
      tech: ['Vue.js', 'Vuex', 'FSM', 'Middleware'],
      detail: ['Built and deployed robust workflows like Late Cash Deposits, Transaction Reconciliation, Multi-Branch Transfers, and more.',
        'Integrated secure REST endpoints with FSM middleware, maintaining strict state control for sensitive actions.']
    },
    {
      title: 'CRM – Customer Lifecycle Management',
      description: 'Client Onboarding & Maintenance - Spearheaded development of advanced customer data workflows including onboarding, verification, and account maintenance.',
      tech: ['Next.js', 'Tailwind CSS', 'React Query'],
      detail: ['Developed use cases such as E-Statement Handling, Dormant Account Reactivation, and Authorized Signatory Management.',
        'Optimized user interactions and form state logic to support rapid, error-free customer service.'
      ]
    },


    {
      title: 'Application Management Workflow Dashboard – Japan Station',
      description: 'Developed an internal workflow dashboard tailored for a Japanese enterprise to manage application submissions and approval hierarchies. Translated complex business processes into a clean, user-friendly frontend, while supporting backend logic for data persistence and role-based access.',
      tech: ['HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'PHP (Laravel)', 'PostgreSQL'],

      detail: ['Built responsive UI using Bootstrap and jQuery for workflow visualization.',
        'Implemented data-driven views and status tracking modules.',
        'Contributed to backend integration using PHP (Laravel) and PostgreSQL for CRUD operations.'
      ]
    },
    {
      title: 'Mini Translation Lookup Tool',
      description: 'Engineered a lightweight frontend tool to fetch and display Japanese-English word translations using a dynamic search interface. Used efficient DB lookups to provide near-instant results for pre-stored dictionary terms.',
      tech: ['HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'PHP', 'PostgreSQL'],
      detail: ['Developed intuitive UI for real-time word search.',
        'Connected to backend DB queries for instant lookup functionality.',
        'Optimized frontend interactions for faster UX.'
      ]
    },
    {
      title: 'E-Learning School System – Manalobo',
      description: 'Contributed to the frontend development of an e-learning portal designed to manage student-teacher interactions, class materials, and digital assessments. Focused on delivering pixel-perfect screens and ensuring cross-browser compatibility.',
      tech: ['HTML5', 'CSS3', 'Bootstrap', 'jQuery'],
      detail: ['Implemented UI screens for dashboards, course material, and user interactions.',
        'Ensured responsiveness and performance across all devices.',
        'Collaborated with backend team for component integration.'
      ]
    },
    {
      title: 'Manual QA & Bug Reporting',
      description: 'Apart from development, also handled manual QA responsibilities by testing key user flows and logging UI and functional bugs. Helped improve release quality and UI consistency across different devices.',
      tech: ['Next.js', 'Tailwind CSS', 'React Query'],
      detail: ['Conducted manual test cases for frontend modules.',
        'Reported usability and UI bugs during pre-deployment testing.',
        'Ensured visual consistency and responsiveness in various screen resolutions.']
    },

    {
      title: 'Skygram',
      description:
        'An Instagram-style web app for sky photography lovers. Users can post sky pictures, add captions, and view reels. Built as a personal creative project.',
      tech: ['Next.js', 'Tailwind CSS', 'Cloudinary', 'Firebase'],
      github: 'https://github.com/yourusername/skygram',
      live: 'https://skygram.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="max-w-7xl mx-auto py-20 px-6 md:px-12">
      <h2 className="text-xl md:text-xl font-bold text-white mb-10">
        Projects
      </h2>

      <div className="space-y-8 mb-8 ">
        {projects.slice(0, 3).map((project, index) => (
          <Link
            key={index}
            className="group flex flex-col md:flex-row bg-transparent px-6 py-4  rounded-lg 
              transition-all duration-300 hover:bg-[#ffffff0a] hover:shadow-md 
              w-full md:w-full md:mx-auto md:min-h-[7rem]  "
            href={project.live}
            target="_blank"
          >

            <div className="md:w-1/3 md:mr-6 mb-4 md:mb-0 flex justify-center items-center group-hover:scale-[1.02]">

              {project?.image && (
                <div className="w-[14rem] h-[5.6rem] md:w-[24rem] md:h-[6.5rem] lg:w-[32rem] lg:h-[8rem] relative rounded-lg overflow-hidden bg-[#00ffff22] ">
                  <Image
                    src={project.image}
                    alt={`${project.title} icon`}
                    fill
                    sizes="(min-width: 1024px) 32rem, (min-width: 768px) 24rem, 14rem"
                    className="object-cover"
                  />
                </div>)}

            </div>

            <div className="md:w-2/3 flex flex-col justify-center group-hover:scale-[1.02]">
              <h4 className="text-lg font-semibold text-[#ccd6f6] mb-1 group-hover:text-neon ">{project.title}</h4>
              <p className="text-grayish text-sm mb-2 line-clamp-3">{project.description}</p>

              <ul className="flex flex-wrap text-xs gap-2 text-neon  mb-2">
                {project.tech.map((tech, i) => (
                  <li key={i} className="bg-[#00ffff22] rounded-lg px-2 py-0 border border-[#00ffff33]">{tech}</li>
                ))}
              </ul>

            </div>
          </Link>
        ))}
      </div>

      <Link href="projects/archive"
        className="hover:text-neon px-6 pt-2 text-white cursor-pointer hover:px-8 hover:text-lg"
      >
        Explore Full Project Archive
        <span className="ml-1 transform transition-transform duration-300 ">
          ↗
        </span>
      </Link>

    </section>
  );
}


