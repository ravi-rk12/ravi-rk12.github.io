import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const navItems = [
  ['home', 'Home'],
  ['focus', 'Focus'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['contact', 'Contact'],
];

const roleLanes = [
  {
    label: 'Primary lane',
    title: 'AI Product Owner / AI Product Analyst',
    text: 'Product blueprints, workflows, user journeys, acceptance criteria, roadmap logic, and AI feature behavior.',
  },
  {
    label: 'Primary lane',
    title: 'GenAI Solutions Analyst / AI Implementation Consultant',
    text: 'Use-case discovery, GenAI workflow mapping, solution framing, AI-assisted execution direction, and validation.',
  },
  {
    label: 'Strong adjacent lane',
    title: 'Technical Product Owner / ERP-LMS Product Consultant',
    text: 'Business rules, role-based flows, ledger/payment logic, dashboards, learning workflows, and stakeholder clarity.',
  },
];

const projects = [
  {
    label: 'Agentic AI',
    title: 'The Crucible',
    subtitle: 'AI goal-fulfillment and tutoring platform blueprint',
    text: 'A structured product concept for turning serious goals into roadmaps, adaptive learning paths, guided execution, progress tracking, reviewable artifacts, and trust-aware AI behavior.',
    bullets: [
      'Authored the product blueprint, assistant behavior rules, user flows, and roadmap logic.',
      'Defined Smart Contract confirmation, Deep Track, Fast Track, prerequisite repair, and source-confirmation patterns.',
      'Specified acceptance criteria for useful, destination-specific AI planning instead of generic outputs.',
    ],
  },
  {
    label: 'ERP workflow',
    title: 'Sanche Darbar',
    subtitle: 'Hyperlocal agri-logistics ERP and marketplace workflow',
    text: 'A product workflow for agricultural vendor operations, billing, delivery invoicing, ledger reconciliation, role-specific access, and low-connectivity use cases.',
    bullets: [
      'Mapped vendor and customer-side workflows for practical rural and semi-rural marketplace operations.',
      'Specified billing, inventory movement, commission, delivery, and ledger behavior.',
      'Directed AI-assisted execution through requirements, implementation guidance, output review, and validation criteria.',
    ],
  },
  {
    label: 'EdTech LMS',
    title: 'Sureshot Classes',
    subtitle: 'Learning workflow, access, payment, and dashboard concept',
    text: 'An LMS workflow concept for student access, class schedules, payment verification, digital receipts, admin visibility, and cross-device learning support.',
    bullets: [
      'Defined student, admin, access-control, timetable, payment-validation, and dashboard workflows.',
      'Mapped learning operations into implementation-ready requirements and behavior expectations.',
      'Reviewed product behavior against student usability and coaching-center operating needs.',
    ],
  },
];

const skills = [
  'GenAI',
  'AI Product Management',
  'Product Owner',
  'Business Analysis',
  'Workflow Design',
  'Requirements',
  'Acceptance Criteria',
  'AI Implementation',
  'AI-Assisted Delivery',
  'RAG Concepts',
  'LangGraph Concepts',
  'ERP Workflows',
  'LMS Workflows',
  'Product Validation',
  'IoT Product',
  'Edge AI Concepts',
  'Hardware QA',
  'Process Optimization',
];

const experience = [
  {
    period: 'Nov 2023 - Present',
    title: 'AI Product & GenAI Solutions Consultant',
    org: 'Freelance / Self-Employed',
    text: 'Own product execution direction across AI tutoring, ERP marketplace, LMS, and local-first assistant concepts. Define workflows, requirements, AI behavior rules, acceptance criteria, validation expectations, and AI-assisted implementation guidance.',
  },
  {
    period: 'May 2023 - Nov 2023',
    title: 'Production, QA & Process Optimization',
    org: 'Corrson / Acoustic Portrait, Bangalore',
    text: 'Supported production workflow redesign, quality validation, waveform inspection, THD-oriented testing, schematic-level troubleshooting, SOP guidance, and engineering support onboarding.',
  },
  {
    period: 'Jan 2023 - May 2023',
    title: 'R&D Systems Engineering',
    org: 'AWAN India Pvt. Ltd., Bangalore',
    text: 'Supported discrete control-system prototyping involving capacitive inputs, transistor switching, relay logic, signal-flow validation, and hardware troubleshooting.',
  },
];

const Section = ({ id, eyebrow, title, children, dark = false }) => (
  <section id={id} className={(dark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-950') + ' px-5 py-20'}>
    <div className="mx-auto max-w-6xl">
      <div className="mb-10 max-w-3xl">
        {eyebrow && <p className={(dark ? 'text-teal-300' : 'text-teal-700') + ' mb-3 text-sm font-bold uppercase tracking-wide'}>{eyebrow}</p>}
        <h2 className="text-3xl font-bold tracking-normal md:text-5xl">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

const Card = ({ children, className = '' }) => (
  <motion.article
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.45 }}
    className={'rounded-lg border border-slate-200 bg-white p-6 shadow-sm ' + className}
  >
    {children}
  </motion.article>
);

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      const visible = navItems.filter(([id]) => {
        const element = document.getElementById(id);
        return element && window.scrollY >= element.offsetTop - 140;
      });
      if (visible.length) setActiveSection(visible[visible.length - 1][0]);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/95 px-4 py-3 text-white backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <a href="#home" className="font-bold">Ravi Kumar</a>
          <div className="flex gap-3 overflow-x-auto text-sm md:gap-5">
            {navItems.map(([id, label]) => (
              <a key={id} href={'#' + id} className={(activeSection === id ? 'text-teal-300' : 'text-slate-300 hover:text-white') + ' whitespace-nowrap transition'}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <header id="home" className="bg-slate-950 px-5 pb-20 pt-32 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.08fr_0.92fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <p className="mb-4 text-sm font-bold uppercase tracking-wide text-teal-300">
              AI Product & GenAI Solutions Consultant
            </p>
            <h1 className="mb-6 text-5xl font-bold leading-none tracking-normal md:text-7xl">
              AI product execution from idea to working system.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300">
              I turn ambiguous AI and software product ideas into clear workflows, requirements,
              acceptance criteria, architecture direction, validation plans, and reviewable outcomes.
              My strongest lane is practical product logic across agentic AI, ERP/LMS workflows,
              GenAI use cases, and AI-assisted delivery direction.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="rounded-md bg-teal-500 px-5 py-3 font-bold text-slate-950 transition hover:bg-teal-300" href="mailto:roushan.rk12@gmail.com">Contact Ravi</a>
              <a className="rounded-md border border-slate-600 px-5 py-3 font-bold text-white transition hover:border-teal-300" href="https://github.com/ravi-rk12" target="_blank" rel="noreferrer">GitHub</a>
              <a className="rounded-md border border-slate-600 px-5 py-3 font-bold text-white transition hover:border-teal-300" href="https://www.linkedin.com/in/ravikumar9945/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }} className="rounded-lg border border-slate-700 bg-slate-900 p-5 shadow-2xl">
            <img src={process.env.PUBLIC_URL + '/dp.jpg'} alt="Ravi Kumar" className="mx-auto h-36 w-36 rounded-full border-4 border-teal-400 object-cover" />
            <div className="mt-6 grid gap-3">
              {['Product logic', 'Workflow design', 'AI behavior rules', 'Requirements', 'Validation', 'AI-assisted execution'].map((item) => (
                <div key={item} className="rounded-md border border-slate-700 bg-slate-800 px-4 py-3 text-slate-200">{item}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      <Section id="focus" eyebrow="Best-fit roles" title="Where I create the most value">
        <div className="grid gap-5 md:grid-cols-3">
          {roleLanes.map((lane) => (
            <Card key={lane.title}>
              <span className="mb-4 inline-flex rounded-full bg-teal-50 px-3 py-1 text-xs font-bold uppercase text-teal-700">{lane.label}</span>
              <h3 className="mb-3 text-xl font-bold">{lane.title}</h3>
              <p className="text-slate-600">{lane.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="projects" eyebrow="Project proof" title="Case studies that show product thinking">
        <p className="mb-8 max-w-4xl text-slate-600">
          These projects are presented as product and workflow case studies. Some software implementation was AI-assisted;
          the ownership shown here is strategy, requirements, behavior design, implementation guidance, validation, and iteration direction.
        </p>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex h-full flex-col">
              <span className="mb-4 inline-flex w-fit rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase text-amber-700">{project.label}</span>
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-1 font-semibold text-teal-700">{project.subtitle}</p>
              <p className="mt-4 text-slate-600">{project.text}</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                {project.bullets.map((bullet) => <li key={bullet} className="border-l-4 border-teal-500 pl-3">{bullet}</li>)}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="skills" eyebrow="Capability map" title="Skills and working strengths">
        <div className="mb-8 rounded-lg border-l-4 border-teal-600 bg-white p-6 shadow-sm">
          <h3 className="mb-2 text-xl font-bold">Contribution standard</h3>
          <p className="text-slate-600">
            I use AI as a productivity multiplier while owning the goal, product logic, requirements, acceptance criteria,
            review, and final judgment. I do not position these software projects as solo hand-coded engineering work.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => <span key={skill} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">{skill}</span>)}
        </div>
      </Section>

      <Section id="experience" eyebrow="Experience backbone" title="Cross-domain execution discipline">
        <div className="grid gap-5">
          {experience.map((item) => (
            <Card key={item.title}>
              <p className="mb-2 text-sm font-bold uppercase tracking-wide text-teal-700">{item.period}</p>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="mb-3 font-semibold text-slate-500">{item.org}</p>
              <p className="text-slate-600">{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Open to India, global remote, hybrid, and relocation-ready roles" dark>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-lg leading-8 text-slate-300">
              I am looking for AI product, GenAI solutions, technical product owner, AI business analyst,
              product analyst, ERP/LMS product, IoT product, and edge-AI roles where product clarity and practical validation matter.
            </p>
          </div>
          <div className="grid gap-4 rounded-lg border border-slate-800 bg-slate-900 p-6">
            <a className="flex items-center gap-3 text-slate-200 hover:text-teal-300" href="mailto:roushan.rk12@gmail.com"><FaEnvelope /> roushan.rk12@gmail.com</a>
            <a className="flex items-center gap-3 text-slate-200 hover:text-teal-300" href="tel:+919945275807"><FaPhoneAlt /> +91 99452 75807</a>
            <a className="flex items-center gap-3 text-slate-200 hover:text-teal-300" href="https://www.linkedin.com/in/ravikumar9945/" target="_blank" rel="noreferrer"><FaLinkedin /> linkedin.com/in/ravikumar9945</a>
            <a className="flex items-center gap-3 text-slate-200 hover:text-teal-300" href="https://github.com/ravi-rk12" target="_blank" rel="noreferrer"><FaGithub /> github.com/ravi-rk12</a>
            <p className="flex items-center gap-3 text-slate-300"><FaMapMarkerAlt /> Lalganj, Bihar | Open to relocation</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Portfolio;
