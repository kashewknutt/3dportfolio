import {
    mobile,
    backend,
    creator,
    web,
    ai,
    django,
    debug,
    writer,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    lawfulllamaslogo,
    vesit,
    firstcontact,
    starbucks,

    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,

    python,
    java,
    c,
    pytorch,
    tensorflow,
    mysql,
    linux,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "AI Engineer",
      body: "Model Tuning, RAG development, Research, Mathematics",
      icon: ai,
    },
    {
      title: "Django Developer",
      body: "Full Stack Development, REST APIs, Django ORM",
      icon: django,
    },
    {
      title: "Code Debugger",
      body: "Code Debugging, Code Optimization, Code Review",
      icon: debug,
    },
    {
      title: "Content Writer",
      body: "Technical Writing, Blogging, Copywriting, Proofreading",
      icon: writer,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "PyTorch",
      icon:pytorch,
    },
    {
      name: "TensorFlow",
      icon: tensorflow,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "Git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "GenAI Team Leader",
      company_name: "Lawful Llamas",
      icon: lawfulllamaslogo,
      link: "https://github.com/LawfulLlamas",
      iconBg: "#fff",
      date: "August 2024 - September 2024",
      points: [
        "Developed a custom Knowledge Graph for implementing a vector embedding.",
        "Implemented QLoRA SFT method to train the Llama3.1 8B model using Unsloth.",
        "Setup a RAG to work with a KB full of website scraped data.",
        "Deployed the model via a Flask API in a NGROK tunnel on Google Collab.",
      ],
    },
    {
      title: "GenAI Technical Officer",
      company_name: "VESIT",
      icon: vesit,
      link: "https://github.com/kashewknutt/VESITCourseGPT",
      iconBg: "#fff",
      date: "June 2024 - August 2024",
      points: [
        "Created a JSONL training database for fine tuning.",
        "Gained my first experience with RAG and failure simultaneously.",
        "Trained the GPT2 model on question-answer pairs.",
        "Integrated the chatbot in a Tkinter GUI for easy usage.",
      ],
    },
    {
      title: "Content Writer",
      company_name: "First Contact",
      icon: firstcontact,
      link: "https://firstcontact.lgbt/",
      iconBg: "#fff",
      date: "October 2023 - January 2024",
      points: [
        "Dove in SEO writing content for Quora, Reddit, Stock Exchange, etc.",
        "Wrote blogs to publish on the official website.",
        "Explored the working of a business environment for the first time.",
        "Befriended a considerable number of people in a professional environment while understanding how to communicate effectively. ",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };