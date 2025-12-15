import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  starbucks,
  profile,
  foursightai,
  github,
  linkedin,
  email,
  appolice,
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

const heroInfo = {
  name: "Gopi Jagadheesh",
  title: "Software & AI Engineer | Building Practical AI Systems",
  image: profile,
  roles: [
    "AI/ML Engineer",
    "Full-Stack Developer",
    "Agentic AI Specialist",
    "LLM Developer",
    "Problem Solver",
  ],
};

const aboutInfo = {
  introduction: "I’m a third-year Computer Science student who loves building AI-driven systems that actually get used in the real world. I’ve led development of an AI document automation system for a state police department and built an end-to-end AI Tutor during my internship at Vortex.ai. I enjoy owning products end-to-end — from designing backend APIs and model workflows to deployment, optimization, and iteration based on real user needs.",
};

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Itz-gopi204",
    icon: github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/gopi-mahamkali",
    icon: linkedin,
  },
  {
    name: "Email",
    url: "mailto:gopimahamkali3101@gmail.com",
    icon: email,
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "AI Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Agentic AI Developer",
    icon: creator,
  },
];

const technologies = [
  // Languages
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  // AI/ML Frameworks
  {
    name: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "PyTorch",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  {
    name: "LangChain",
    icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
  },
  // Web Frameworks
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Flask",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },
  // Databases & Tools
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Kubernetes",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },
  {
    name: "HuggingFace",
    icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
  },
];

const experiences = [
  {
    title: "AI Engineer Intern — Team Lead",
    company_name: "4SightAI",
    icon: foursightai,
    iconBg: "#E6DEDD",
    date: "Sept 2024 – Present",
    points: [
      "Led the development of DOC2DATA, an AI-powered document intelligence system for the Andhra Pradesh Police Department.",
      "Designed and implemented backend services using Python, FastAPI, and MongoDB.",
      "Built computer vision modules for detecting signatures, stamps, and seals, integrated with OCR + LLM-based extraction.",
      "Worked closely with stakeholders in the police department to adapt the system to real workflows and constraints.",
      "Ensured reliability and maintainability using CI/CD pipelines and Git-based version control.",
    ],
  },
  {
    title: "AI Engineer Intern",
    company_name: "Vortex.ai",
    icon: starbucks, // Placeholder icon
    iconBg: "#383E56",
    date: "May 2024 – Aug 2024",
    points: [
      "Built an end-to-end AI Tutor application capable of answering user queries with LLMs, speech-to-text (Whisper), and text-to-speech (TTS).",
      "Developed the backend using Flask, integrating LLM APIs, conversation logic, and response generation.",
      "Created a React-based frontend with a clean, interactive UI for chat, audio input, and audio responses.",
      "Optimized latency and response quality by tuning prompt flows and model integration.",
      "Collaborated with the team on feature design, debugging, and deploying the application for internal/demo use.",
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
    name: "DOC2DATA",
    description:
      "AI-powered document intelligence system for Andhra Pradesh Police. Automated extraction of structured information from legal documents, reducing manual extraction time by 95% and achieving 98% accuracy.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "computer-vision",
        color: "pink-text-gradient",
      },
    ],
    image: appolice,
    source_code_link: "https://github.com/Itz-gopi204",
    features: [
      "OCR-based text extraction from scanned legal documents",
      "NLP pipeline for entity recognition and data structuring",
      "FastAPI backend with async processing for scalability",
      "Real-time document processing dashboard",
      "Export to multiple formats (JSON, CSV, PDF reports)",
    ],
    impact: "Reduced manual document processing time by 95% for AP Police Department, processing 1000+ documents daily with 98% accuracy.",
  },
  {
    name: "GenAI Chatbot",
    description:
      "Multilingual knowledge assistant using open-source LLMs and LangChain/LangGraph. Achieved 95% accuracy through Agentic RAG, with Whisper and TTS for real-time multilingual interaction.",
    tags: [
      {
        name: "langchain",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    source_code_link: "https://github.com/Itz-gopi204",
    features: [
      "Agentic RAG architecture for contextual responses",
      "Whisper integration for speech-to-text in multiple languages",
      "Real-time TTS for natural voice responses",
      "LangGraph for complex conversation flows",
      "Vector database for efficient knowledge retrieval",
    ],
    impact: "Achieved 95% accuracy in knowledge retrieval with sub-second response times, supporting 5+ languages.",
  },
  {
    name: "FloodGuard",
    description:
      "AI-powered flood prediction system using deep learning segmentation models (U-Net, SAM) with 26% higher accuracy. Integrated Twilio & OpenWeather APIs for real-time alerts.",
    tags: [
      {
        name: "pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "geospatial",
        color: "green-text-gradient",
      },
      {
        name: "twilio",
        color: "pink-text-gradient",
      },
    ],
    features: [
      "U-Net and SAM models for flood area segmentation",
      "Real-time weather data integration via OpenWeather API",
      "SMS/WhatsApp alerts via Twilio for affected areas",
      "Geospatial visualization with interactive maps",
      "Historical data analysis for prediction improvement",
    ],
    impact: "Achieved 26% higher prediction accuracy than existing systems, enabling proactive disaster response.",
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&q=80",
    source_code_link: "https://github.com/Itz-gopi204",
  },
  {
    name: "Financial AI Agent",
    description:
      "AI agent built during Google Agentic AI Day hackathon — automates financial query handling using Fi Money MCP Server + Google AI. Finalist in the competition.",
    tags: [
      {
        name: "gemini",
        color: "blue-text-gradient",
      },
      {
        name: "mcp",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    source_code_link: "https://github.com/Itz-gopi204",
    features: [
      "MCP Protocol integration for secure financial data access",
      "Gemini AI for natural language query understanding",
      "Real-time transaction analysis and insights",
      "Automated expense categorization and budgeting",
      "Voice-enabled financial assistant capabilities",
    ],
    impact: "Finalist at Google Agentic AI Day hackathon, demonstrating innovative use of MCP Protocol for financial automation.",
  },
];

const achievements = [
  {
    title: "Winner — AI4AndhraPolice Hackathon",
    emoji: "🥇",
    organization: "Andhra Pradesh State Police Department",
    description: "Built an AI-driven document intelligence system used for legal and policing workflows. Awarded 1st place among statewide teams for innovation and real-world impact.",
  },
  {
    title: "1st Place — SIH Internal Hackathon",
    emoji: "🏆",
    organization: "RGUKT Nuzvid",
    description: "Secured first prize competing against 200+ teams in the Smart India Hackathon internal round at university level.",
  },
  {
    title: "Best UI/UX Award — HackToCrack National Hackathon",
    emoji: "🏅",
    organization: "Viswaniketan-IMEET National Level Hackathon",
    description: "Selected solution under AIML domain on flood detection using satellite images. Recognized for best user interface and experience.",
  },
  {
    title: "Finalist — Google Agentic AI Day Hackathon",
    emoji: "🥈",
    organization: "Google Cloud",
    description: "Developed a Financial AI Agent using Fi Money MCP Server + Google AI. Cleared Round 1 with a top-tier presentation.",
  },
  {
    title: "Led Development of Government Production System",
    emoji: "🚀",
    organization: "AI Engineer — Team Lead @ 4SightAI",
    description: "Built & deployed DOC2DATA for Andhra Pradesh Police. Full ownership of backend + computer vision modules + deployment.",
  },
  {
    title: "End-to-End AI Tutor — Showcased at Vortex.ai",
    emoji: "💡",
    organization: "Vortex.ai Internship",
    description: "Built a multimodal GenAI assistant using Whisper + TTS + Groq/Google LLMs. Demonstrated to stakeholders and recognized for performance & usability.",
  },
];

export { services, technologies, experiences, testimonials, projects, heroInfo, aboutInfo, socialLinks, achievements };
