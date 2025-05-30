'use client';
import { useEffect, useState } from 'react';

export default function VerticalMenu() {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Tech Stack', href: '#tech' },
    { label: 'Contact', href: '#contact' },
  ];

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  });

  return (
    <div className="hidden md:flex fixed left-0 top-0 h-full flex-col items-center justify-center pl-12 px-2 z-50">
      <div className="flex flex-col gap-12">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.href.replace('#', '');
          return (
            <a
              key={index}
              href={item.href}
              className={`writing-vertical text-sm relative transform transition-transform duration-200
                ${isActive ? 'text-white scale-120' : 'text-grayish hover:text-white hover:scale-110'}
                after:absolute after:content-[''] after:w-[1px] after:h-4 after:bg-white after:top-1/2 after:left-full after:-translate-y-1/2 
                ${isActive ? 'after:opacity-100' : 'after:opacity-0 hover:after:opacity-100'}
                after:transition-all`}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
