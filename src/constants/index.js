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

    dojhome,
    vesitbot,
    opencv,
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
      name: "DOJ Chatbot",
      description:
        "A specially trained LLama3.1 model on prompt engineering techniques using DSPy and attempted-integration with RAG Knowledge Graph.",
      tags: [
        {
          name: "Pytorch",
        },
        {
          name: "DSPy",
        },
        {
          name: "Unsloth",
        },
        {
          name: "Flask",
        },
      ],
      image: dojhome,
      source_code_link: "https://github.com/LawfulLlamas/judicial-chatbot",
    },
    {
      name: "VESIT GPT",
      description:
        "A simple BERT model fine tuned on PDFs and text documents pertaining to the syllabus of the AI and DS branch of VESIT. My first official GenAI project.",
      tags: [
        {
          name: "Transformers",
        },
        {
          name: "Flask",
        },
        {
          name: "Tkinter",
        },
      ],
      image: vesitbot,
      source_code_link: "https://github.com/kashewknutt/VESITCourseGPT",
    },
    {
      name: "Indian Sign Language AI",
      description:"An attempt to create a CNN on Indian hand signs to grasp letter understanding from live feeds using OpenCV. My introduction to Neural Networks",
      tags: [
        {
          name: "CNN",
        },
        {
          name: "OpenCV",
        },
        {
          name: "Object Tracking",
        },
      ],
      image: opencv,
      source_code_link: "https://github.com/kashewknutt/PythonSignLanguageConverser",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };