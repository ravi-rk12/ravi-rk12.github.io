import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaEnvelope, FaMobileAlt, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = ['home', 'about', 'experience', 'education', 'skills', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop - windowHeight / 2 && 
              scrollPosition < offsetTop + offsetHeight - windowHeight / 2) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavBar = () => (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-90 text-white p-4 z-50">
      <ul className="flex justify-center space-x-4">
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={`capitalize ${
                activeSection === section ? 'text-blue-400' : 'hover:text-blue-300'
              } transition duration-300`}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );

  const Section = ({ id, title, children, className = "" }) => (
    <section id={id} className={`min-h-screen py-20 px-4 ${className}`}>
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      {children}
    </section>
  );

  const Home = () => (
    <Section id="home" title="" className="flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img
            src= {`${process.env.PUBLIC_URL}/dp.jpg`}
            alt="Ravi Kumar"
            className="rounded-full w-48 h-48 mx-auto border-4 border-blue-500 shadow-lg"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-bold mb-4 text-white"
        >
          Ravi Kumar
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl mb-8 text-gray-300"
        >
          Software | Electronics Engineer
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center space-x-4"
        >
          <SocialLink href="https://www.linkedin.com/in/ravikumar9945/" icon={FaLinkedin} />
          <SocialLink href="https://x.com/RaviKumar11093" icon={FaTwitter} />
          <SocialLink href="https://www.instagram.com/_ravi._.kumar_/" icon={FaInstagram} />
          <SocialLink href="https://github.com/ravi-rk12" icon={FaGithub} />
          <SocialLink href="mailto:roushan.rk12@gmail.com" icon={FaEnvelope} />
          <SocialLink href="tel:+91-9945275807" icon={FaMobileAlt} />
        </motion.div>
      </div>
    </Section>
  );

  const SocialLink = ({ href, icon: Icon }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-blue-400 transition duration-300"
    >
      <Icon className="text-3xl" />
    </a>
  );

  const About = () => (
    <Section id="about" title="About Me" className="bg-white bg-opacity-90">
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-4 leading-relaxed">
          As a sophisticated Machine Learning Engineer with a robust background in electronics, I specialize in independent research and the development of advanced AI solutions. My expertise lies in applying machine learning and AI techniques to intelligently leverage data and enhance user experiences.
        </p>
        <p className="text-lg leading-relaxed">
          I'm passionate about researching innovative problem-solving approaches, developing prototypes to evaluate their effectiveness, and deploying solutions that generate actionable insights and expand user understanding. My goal is to push the boundaries of what's possible in AI and machine learning, creating technologies that make a meaningful impact.
        </p>
      </div>
    </Section>
  );

  const Experience = () => (
    <Section id="experience" title="Work Experience">
      <div className="space-y-8 max-w-3xl mx-auto">
        <ExperienceItem
          title="Junior Production Engineer"
          company="Corrson"
          period="2022.12 - 2024.03"
          responsibilities={[
            "Developed schematic designs for driver circuits, ensuring efficient operation of devices",
            "Supported prototyping and conducted comprehensive tests, including EMI/EMC, thermal, and environmental tests",
            "Managed BOMs and procurement processes, ensuring timely availability of components",
            "Collaborated with cross-functional teams for product design analysis and modification",
            "Conducted technical interviews for candidates",
            "Interacted with vendors and resolved technical issues promptly to ensure project success"
          ]}
        />
        <ExperienceItem
          title="R&D Engineer"
          company="AWAN India Pvt. Ltd."
          period="2022.04 - 2022.11"
          responsibilities={[
            "Managed power sections of audio amplifiers, resolving signal interference issues",
            "Developed touch-based Microphone pager unit",
            "Designed printed circuit boards for various projects",
            "Developed and improved Podium amplifier system"
          ]}
        />
      </div>
    </Section>
  );

  const ExperienceItem = ({ title, company, period, responsibilities }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-xl text-blue-600">{company}</p>
      <p className="text-gray-600 mb-4">{period}</p>
      <ul className="list-disc list-inside space-y-2">
        {responsibilities.map((item, index) => (
          <li key={index} className="text-gray-700">{item}</li>
        ))}
      </ul>
    </motion.div>
  );

  const Education = () => (
    <Section id="education" title="Education" className="bg-gray-100">
      <div className="space-y-8 max-w-3xl mx-auto">
        <EducationItem
          degree="Bachelor of Technology/B.Tech. - Electrical And Electronics Engineering"
          institution="Jain University, Bangalore, Karnataka"
          graduationDate="07.2021"
          details={[
            "Graduation with Distinction, 8.7 CGPA",
            "Class Representative, Spark EEE, 2020 to 2021"
          ]}
        />
        <EducationItem
          degree="Intermediate of Science - PCM"
          institution="Sri Chaitanya Jr. College, Hyderabad, Telangana"
          graduationDate="03.2016"
          details={[
            "Board: TSBIE, Final Grade: 93.2%"
          ]}
        />
        <EducationItem
          degree="Matriculation"
          institution="St. Paul's High School, Hajipur, Bihar"
          graduationDate="03.2014"
          details={[
            "Board: CBSE, 10 CGPA"
          ]}
        />
      </div>
    </Section>
  );

  const EducationItem = ({ degree, institution, graduationDate, details }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <h3 className="text-2xl font-semibold">{degree}</h3>
      <p className="text-xl text-blue-600">{institution}</p>
      <p className="text-gray-600 mb-2">Graduated: {graduationDate}</p>
      <ul className="list-disc list-inside space-y-1">
        {details.map((item, index) => (
          <li key={index} className="text-gray-700">{item}</li>
        ))}
      </ul>
    </motion.div>
  );

  const Skills = () => {
    const technicalSkills = [
      'Python', 'Numpy', 'Pandas', 'Streamlit', 'Matplotlib', 'SQL', 'Microsoft Power BI',
      'C/C++', 'HTML', 'CSS', 'JavaScript', 'Software Development', 'DSA', 'Machine Learning',
      'Natural Language Processing', 'Feature Engineering', 'Statistical modeling', 'Neural Networks'
    ];
    const softSkills = [
      'Attention to Detail', 'Problem-Solving', 'Teamwork and Collaboration', 'Critical Thinking',
      'Multitasking Abilities', 'Excellent Communication', 'Interpersonal Skills', 'Adaptability'
    ];

    return (
      <Section id="skills" title="Skills" className="bg-white bg-opacity-90">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <SkillSet title="Technical Skills" skills={technicalSkills} bgColor="bg-blue-100" textColor="text-blue-800" />
          <SkillSet title="Soft Skills" skills={softSkills} bgColor="bg-green-100" textColor="text-green-800" />
        </div>
      </Section>
    );
  };

  const SkillSet = ({ title, skills, bgColor, textColor }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className={`${bgColor} ${textColor} px-3 py-1 rounded-full text-sm`}>
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );

  const Projects = () => (
    <Section id="projects" title="Projects and Publications" className="bg-gray-100">
      <div className="space-y-8 max-w-3xl mx-auto">
        <ProjectItem
          title="Emotionally Intelligent AI Robot"
          description="Currently developing a groundbreaking robot with emotional intelligence, capable of understanding and responding to human emotions. Integrating advanced ML algorithms and natural language processing to create a seamless, human-like interaction experience."
        />
        <ProjectItem
          title="Smart Traffic Light and Dynamic Navigational System for Emergency Vehicles"
          date="Published in Advances in Intelligent Systems and Computing (AISC), 09/01/22"
          description="Developed a real-time traffic management system for emergency vehicles using a dynamic triggering algorithm. Enhanced efficiency by adapting traffic signals to prioritize emergency vehicles, reducing response times and accident risks. Utilized Proteus Design Suite for hardware simulation and Android app for control."
          link="https://link.springer.com/chapter/10.1007/978-981-19-3590-9_30"
        />
      </div>
    </Section>
  );

  const ProjectItem = ({ title, date, description, link }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <h3 className="text-2xl font-semibold">{title}</h3>
      {date && <p className="text-gray-600 mb-2">{date}</p>}
      <p className="mt-2 text-gray-700">{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 inline-block">
          View Publication
        </a>
      )}
    </motion.div>
  );

  const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
      city: '',
      state: '',
    });
    const [location, setLocation] = useState(null);

    useEffect(() => {
      // Get user's location
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=YOUR_API_KEY`)
            .then(response => response.json())
            .then(data => {
              if (data && data[0]) {
                setLocation({
                  city: data[0].name,
                  state: data[0].state,
                });
              }
            });
        });
      }
    }, []);

    useEffect(() => {
      if (location) {
        setFormData(prevData => ({
          ...prevData,
          city: location.city,
          state: location.state,
        }));
      }
    }, [location]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleBlur = () => {
      // Save form data when user moves to another field
      saveFormData(formData);
    };

    const saveFormData = (data) => {
      // In a real application, you would send this data to your backend
      console.log('Saving form data:', data);
      // Simulating an API call
      fetch('/api/save-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch((error) => console.error('Error:', error));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // In a real application, you would send this data to your backend to process the email
      console.log('Sending email with form data:', formData);
      // Simulating an API call
      fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '', city: '', state: '' });
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Failed to send message. Please try again.');
        });
    };

    return (
      <Section id="contact" title="Contact" className="bg-white bg-opacity-90">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <InputField
                  label="Name"
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <InputField
                  label="Email"
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-4">
              <li className="flex items-center">
                  <FaLinkedin className="mr-2 text-blue-500" />
                  <a href="https://www.linkedin.com/in/ravikumar9945/" className="hover:text-blue-500">linkedin.com/in/ravikumar9945</a>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-2 text-blue-500" />
                  <a href="mailto:roushan.rk12@gmail.com" className="hover:text-blue-500">roushan.rk12@gmail.com</a>
                </li>
                <li className="flex items-center">
                  <FaPhoneAlt className="mr-2 text-blue-500" />
                  <a href="tel:+919945275807" className="hover:text-blue-500">+91 99452 75807</a>
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-blue-500" />
                  <span>Bangalore, Karnataka, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    );
  };

  const InputField = ({ label, id, type, required, value, onChange, onBlur }) => (
    <div>
      <label htmlFor={id} className="block mb-1 font-medium">{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        required={required}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );


  return (
    <div className="bg-gradient-to-br from-blue-900 via-purple-900">
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Portfolio;