'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Linear from '../../../components/linear'
import GlowCursor from '../../../components/GlowCursor';

const allProjects = [
    {
        year: '2025',
        title: 'Easypaisa Corporate Onboarding System (Enabled Digital Bank Licensing)',
        company: 'Easypaisa Digital Bank',
        description: 'Led the frontend development of Easypaisa’s Corporate Onboarding System—an essential solution for regulatory compliance with the State Bank of Pakistan to acquire a Digital Retail Banking (DRB) license. Designed and built scalable, multi-step onboarding flows supporting multiple applicants, real-time image capture, 2FA authentication, chunk-based file uploads, and session persistence. This portal significantly reduced onboarding drop-offs and enabled corporate entities to operate within the Easypaisa digital ecosystem.',
        tech: ['TypeScript', 'JavaScript', 'Next.js', 'React', 'Redux Toolkit', 'React Query', 'Tailwind CSS', 'Node.js', 'Azure', 'Figma', 'Formik',],


        detail: ['Built dynamic form architecture supporting nested multi-applicant data using Formik.',
            'Engineered chunk-based file uploads to resolve API timeouts.',
            'Integrated OTP-based 2FA login, session persistence, and live photo capture.',
            'Created real-time application tracking with a stepper UI.',
            'Designed conditional form rendering to simplify revision workflows.',
            'Collaborated closely with backend and QA for seamless deployments.'
        ],
        live: 'https://registerbusiness.easypaisa.com.pk/sign-up'
    },
    {
        year: '2025',
        title: 'Easypaisa Merchant Onboarding Portal',
        company: 'Easypaisa Digital Bank',
        description: 'Contributed to the development of Easypaisa’s merchant onboarding system by crafting pixel-perfect UI based on Figma designs, and implementing robust API integrations for seamless merchant registration. Focused on enhancing accessibility, building reusable components, and ensuring reliable form handling with dynamic validations. Played a key role in delivering a user-centric, production-grade portal that supports Easypaisa’s digital transformation goals.',
        tech: ['Next.js', 'TypeScript', 'React.js', 'Redux', 'React Query', 'Tailwind CSS', 'Figma', 'Azure', 'Postman'],
        detail: ['Developed dynamic onboarding workflows with real-time form validations.',

            'Integrated REST APIs for secure and reliable data transactions.',

            'Optimized frontend performance for accessibility and responsiveness.',

            'Implemented scalable and modular UI architecture.'
        ],
        live: 'https://registerbusiness.easypaisa.com.pk'
    },


    {
        title: 'Core Banking System Modernization – Bank Al Habib',
        company: 'TeReSol Private Limited',
        description: 'Enterprise Application Suite - Redesigned the mission-critical internal banking platform used across all Bank Al Habib branches nationwide.',
        tech: ['JavaScript', 'Vue.js', 'Express', 'Storybook', 'Pinia', 'Vuex', 'Node.js', 'Java', 'MySQL', 'Postman', 'Linux'],
        detail: ['Engineered 20+ production-grade business workflows across Teller, CRM, Remittance, and OBS modules, facilitating real-time banking operations.',
            'Led UI architecture using atomic design principles and integrated state-driven middleware (FSM) for secure API orchestration.',
            'Delivered component libraries and screen systems (Megasets/Supersets) through Storybook, enabling scalable, cross-team development.'
        ],
        live: 'https://bankalhabib.com'
    },
    {
        title: 'CRM – Customer Lifecycle Management',
        company: 'TeReSol Private Limited',
        description: 'Client Onboarding & Maintenance - Spearheaded development of advanced customer data workflows including onboarding, verification, and account maintenance.',
        tech: ['JavaScript', 'Vue', 'Express', 'Node.js', 'Storybook', 'Pinia', 'HTML/CSS', 'MySQL', 'Postman'],

        detail: ['Developed use cases such as E-Statement Handling, Dormant Account Reactivation, and Authorized Signatory Management.',
            'Optimized user interactions and form state logic to support rapid, error-free customer service.'
        ],
        live: 'https://bankalhabib.com'
    },
    {
        title: 'Remittance – Real-time Banking Workflows',
        company: 'TeReSol Private Limited',
        description: 'Enabled seamless real-time domestic and international remittance operations by building secure, compliant workflows used across Bank Al Habib branches.',
        tech: ['Vue.js', 'JavaScript', 'Vuex', 'Node.js', 'MySQL', 'Postman',],

        detail: [
            'Developed and maintained remittance flows like IBFT, and internal fund transfers.',
            'Handled real-time validations, error handling, and compliance checks within strict state transitions.',
            'Collaborated with backend and compliance teams to meet regulatory and transaction time benchmarks.'
        ]
    },
    {
        title: 'Teller Operations Suite',
        company: 'TeReSol Private Limited',
        description: 'Financial Workflow Automation - Delivered high-impact teller-side features that automated cash handling, interbank transfers, and fund allocations.',
        tech: ['Vuex', 'Vue.js', 'JavaScript (ES6+)', 'Storybook', 'MySQL', 'HTML/CSS'],
        detail: ['Built and deployed robust workflows like Late Cash Deposits, Transaction Reconciliation, Multi-Branch Transfers, and more.',
            'Integrated secure REST endpoints with FSM middleware, maintaining strict state control for sensitive actions.']
    },
    {
        title: 'OBS Reporting Engine',
        company: 'TeReSol Private Limited',
        description: 'Data Pipeline & PDF Automation - Developed a transactional reporting engine enabling on-demand PDF generation of operational data.',
        tech: ['JavaScript', 'MySQL', 'Vue', 'HTML', 'CSS', 'Postman', 'Selenium'],
        detail: ['Implemented dynamic filtering (date ranges, account types) with backend binary-to-JSON decoding.',
            'Ensured audit-compliant report generation with fault-tolerant data rendering and formatting.'
        ]
    },
    {
        title: 'Currency Microservice – Bank Al Habib',
        company: 'TeReSol Private Limited',
        description: 'Architected and stabilized a core microservice powering all internal currency conversion operations across the bank’s ecosystem.',
        tech: ['Java', 'MySQL', 'Postman', 'Quarkus', 'Linux',],
        detail: ['Designed and optimized API endpoints used in high-frequency transactions and treasury systems.',
            'Diagnosed critical defects and ensured seamless integration with downstream banking workflows.'
        ],
        live: 'https://bankalhabib.com'
    },


    {
        title: 'Application Management Workflow Dashboard – Japan Station',
        company: 'Japan Station Technologies Private Limited',
        description: 'Developed an internal workflow dashboard tailored for a Japanese enterprise to manage application submissions and approval hierarchies. Translated complex business processes into a clean, user-friendly frontend, while supporting backend logic for data persistence and role-based access.',
        tech: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'PHP (Laravel)', 'PostgreSQL'],

        detail: ['Built responsive UI using Bootstrap and jQuery for workflow visualization.',
            'Implemented data-driven views and status tracking modules.',
            'Contributed to backend integration using PHP (Laravel) and PostgreSQL for CRUD operations.'
        ],
        live: 'https://japanstation.com.pk',
    },
    {
        title: 'Mini Translation Lookup Tool',
        company: 'Japan Station Technologies Private Limited',
        description: 'Engineered a lightweight frontend tool to fetch and display Japanese-English word translations using a dynamic search interface. Used efficient DB lookups to provide near-instant results for pre-stored dictionary terms.',
        tech: ['Bootstrap', 'jQuery', 'PHP', 'HTML', 'CSS', 'PostgreSQL'],
        detail: ['Developed intuitive UI for real-time word search.',
            'Connected to backend DB queries for instant lookup functionality.',
            'Optimized frontend interactions for faster UX.'
        ]
    },
    {
        title: 'E-Learning School System – Manalobo',
        company: 'Japan Station Technologies Private Limited',
        description: 'Contributed to the frontend development of an e-learning portal designed to manage student-teacher interactions, class materials, and digital assessments. Focused on delivering pixel-perfect screens and ensuring cross-browser compatibility.',
        tech: ['React', 'TailwindCSS', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery'],
        detail: ['Implemented UI screens for dashboards, course material, and user interactions.',
            'Ensured responsiveness and performance across all devices.',
            'Collaborated with backend team for component integration.'
        ]
    },
    {
        title: 'Manual QA & Bug Reporting',
        company: 'Japan Station Technologies Private Limited',
        description: 'Apart from development, also handled manual QA responsibilities by testing key user flows and logging UI and functional bugs. Helped improve release quality and UI consistency across different devices.',
        tech: ['JavaScript', 'Bootstrap', 'HTML/CSS', 'Next.js', 'Tailwind CSS', 'React Query'],
        detail: ['Conducted manual test cases for frontend modules.',
            'Reported usability and UI bugs during pre-deployment testing.',
            'Ensured visual consistency and responsiveness in various screen resolutions.']
    },


];

export default function ArchivePage() {
    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    return (
        <><Linear />

            <GlowCursor />
            <section className='pt-20 px-12'>
                <Link href="/"
                    className="text-neon px-12 font-semibold hover:px-8 cursor-pointer">← <span className='text-xl'> Azka Abid</span>
                </Link>
                <div className='px-12 pt-2 text-4xl font-bold'>All Projects</div>
                <div className="p-6 md:p-10 min-h-screen">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {allProjects.map((project, i) => (
                            <div
                                key={i}
                                className="bg-[#1a1a1a] text-white rounded-xl border border-[#333] shadow-md p-5 transition-all hover:shadow-lg hover:border-[#555]"
                            >
                                <div
                                    className="cursor-pointer"
                                    onClick={() => toggleExpand(i)}
                                    onMouseEnter={() => toggleExpand(i)}
                                >


                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex flex-col">
                                            <h3 className="text-lg font-semibold text-neon">{project.title}</h3>
                                            <p className="text-sm text-gray-300 mb-2 italic">{project.company}</p>
                                            <p className="text-sm text-gray-400 mb-2">{project.year}</p>
                                            <div className="flex flex-wrap text-xs gap-2 text-neon  mb-2">
                                                {project.tech.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-[#00ffff22] rounded-lg px-2 py-0 border border-[#00ffff33]"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                    </div>

                                    {project.live && (
                                        <a
                                            href={project.live}
                                            className="text-sm text-gray-300 hover:text-neon"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {(project.live).split('https://')}  ↗
                                        </a>
                                    )}
                                </div>

                                {expandedCard === i && (
                                    <div className="mt-4 text-sm text-gray-300">
                                        <p className="mb-2">{project.description}</p>
                                        <ul className="list-disc list-inside text-xs text-gray-400 space-y-1">
                                            {project.detail?.map((point, j) => (
                                                <li key={j}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section></>
    );
}
