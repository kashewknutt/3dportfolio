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
    {
      id: "services",
      title: "Services",  
    }
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

  export const servicesData = [
    {
      id: "service1",
      icon: ai,
      name: "Creating Custom AI Pipelines",
      description:
        "End-to-end development of custom AI pipelines tailored to your specific needs, including data preprocessing, model training, and deployment.",
      estimatedTime: "1-2 weeks",
      oldPrice: "INR 12000",
      price: "INR 10000",
      expertiseLevel: "Expert",
      toolsUsed: ["Python", "PyTorch", "Tensorflow", "XGBoost"],
      image: "path_to_image_for_AI_pipeline", // Placeholder; replace with actual path
      complexity: "High",
    },
    {
      id: "service2",
      icon: debug,
      name: "Implementing RAG-based Chatbots",
      description:
        "Develop and integrate Retrieval-Augmented Generation (RAG) based chatbots capable of handling complex user queries with contextual understanding.",
      estimatedTime: "2-4 weeks",
      oldPrice: "INR 18000",
      price: "INR 15000",
      expertiseLevel: "Advanced",
      toolsUsed: ["DSPy", "Transformers", "Autoencoders", "Seq2Seq"],
      image: "path_to_image_for_RAG_chatbot", // Placeholder; replace with actual path
      complexity: "Very High",
    },
    {
      id: "service3",
      icon: django,
      name: "Developing Custom Django Backend",
      description:
        "Build scalable and secure Django backend solutions with optimized APIs, integrating third-party services, and ensuring seamless database management.",
      estimatedTime: "1-2 weeks",
      oldPrice: "INR 12000",
      price: "INR 10000",
      expertiseLevel: "Intermediate",
      toolsUsed: ["Django", "MongoDB", "SQLite"],
      image: "path_to_image_for_django_backend", // Placeholder; replace with actual path
      complexity: "Medium",
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
        "Dumhsmgbnslgjbnslth",
      name: "sdisu",
      designation: "sdifs",
      company: "sdfs",
      image: python,
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