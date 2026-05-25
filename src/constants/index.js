import {
  mobile,
  backend,
  creator,
  web,
  reactjs,
  git,
  docker,
  profile,
  foursightai,
  github,
  linkedin,
  email,
  appolice,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const heroInfo = {
  name: "Gopi Jagadheesh",
  title: "AI Engineer | Building Intelligent Systems That Matter",
  image: profile,
};

const aboutInfo = {
  introduction:
    "I'm a Computer Science student (CGPA: 8.92) at RGUKT Nuzvid, passionate about building AI systems that solve real-world problems. I led development of DOCS2DATA for the Andhra Pradesh Police Department and built KAMAI, a multi-agent financial AI for India's 15M+ gig workers. I also deliver freelance full-stack web and mobile products end-to-end. I specialize in agentic AI, computer vision, and production-grade system development — from model pipelines and FastAPI microservices to client-ready applications.",
};

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Gopi-Mahamkali",
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
  { title: "AI Engineer", icon: mobile },
  { title: "Agentic AI Developer", icon: creator },
  { title: "Computer Vision", icon: web },
  { title: "Backend Developer", icon: backend },
];

const technologies = [
  // Languages
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "Languages",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    category: "Languages",
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "Languages",
  },
  // AI / ML
  {
    name: "PyTorch",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    category: "AI / ML",
  },
  {
    name: "LangChain",
    icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
    category: "AI / ML",
  },
  {
    name: "LangGraph",
    icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
    category: "AI / ML",
  },
  {
    name: "HuggingFace",
    icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    category: "AI / ML",
  },
  {
    name: "scikit-learn",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    category: "AI / ML",
  },
  {
    name: "OpenCV",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
    category: "AI / ML",
  },
  // Web & API
  {
    name: "FastAPI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    category: "Web & API",
  },
  {
    name: "React",
    icon: reactjs,
    category: "Web & API",
  },
  // DevOps & Tools
  {
    name: "Docker",
    icon: docker,
    category: "DevOps & Tools",
  },
  {
    name: "Git",
    icon: git,
    category: "DevOps & Tools",
  },
  {
    name: "Azure",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    category: "DevOps & Tools",
  },
];

const experiences = [
  {
    title: "AI Engineer Intern",
    company_name: "4SightAI",
    icon: foursightai,
    iconBg: "#E6DEDD",
    date: "Oct 2024 – March 2025",
    points: [
      "Led end-to-end development of DOCS2DATA for the AI4Andhra Police Pilot Project — extracted structured data from police documents, reducing manual processing by 90%.",
      "Designed AI-driven document understanding pipelines combining Azure Document Intelligence and rule-based validation to extract, clean, and normalize unstructured data across diverse formats.",
      "Built and deployed scalable FastAPI-based microservices for document ingestion, processing, and retrieval within a distributed system architecture.",
      "Developed signature and stamp detection models using custom-trained YOLO-based architectures to validate authenticity of official documents.",
      "Built a multi-agent AI system for road safety analysis using YOLO + Google Gemini for project RTGS, with 6 specialized agents for detecting fire, water hazards, potholes, heavy vehicles, waste, and fallen trees.",
    ],
  },
  {
    title: "Freelance Full-Stack Developer",
    company_name: "Newbalan Pharmacy",
    icon: "https://img.icons8.com/color/96/caduceus.png",
    iconBg: "#1a2e1a",
    date: "2024",
    isFreelance: true,
    points: [
      "Built the Newbalan Pharmacy website (newbalanpharmacy.com) — a healthcare platform combining pharmacy retail and clinical consultations for a local medical shop & clinic.",
      "Developed a companion mobile application for Newbalan Pharmacy, enabling patients to browse services, check products, and access clinic information on mobile devices.",
      "Delivered end-to-end from requirements gathering and design to deployment and client handoff as a solo freelance engagement.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "DOCS2DATA",
    description:
      "AI-powered document intelligence system for Andhra Pradesh Police. Automated structured data extraction from police documents using Azure Document Intelligence + custom YOLO models, reducing manual processing by 90%. Won 1st place at AI4Andhra Police Hackathon.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "fastapi", color: "green-text-gradient" },
      { name: "computer-vision", color: "pink-text-gradient" },
    ],
    image: appolice,
    source_code_link: "https://github.com/Gopi-Mahamkali",
  },
  {
    name: "Drone Weapon Detection",
    description:
      "Two-stage detection pipeline using YOLOv8n for person detection followed by a custom-trained weapon identification model. Reduces false positives by restricting inference to person bounding boxes. FastAPI backend for real-time image/video inference.",
    tags: [
      { name: "pytorch", color: "blue-text-gradient" },
      { name: "yolov8", color: "green-text-gradient" },
      { name: "fastapi", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",
    source_code_link: "https://github.com/Gopi-Mahamkali",
  },
  {
    name: "KAMAI – Financial AI",
    description:
      "Multi-agent AI financial companion for India's 15M+ gig workers. Orchestrates 12 AutoGen agents powered by Azure OpenAI GPT-4 for income analysis, volatility forecasting, adaptive budgeting, and matching across 200+ government schemes.",
    tags: [
      { name: "autogen", color: "blue-text-gradient" },
      { name: "azure-openai", color: "green-text-gradient" },
      { name: "fastapi", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    source_code_link: "https://github.com/Gopi-Mahamkali",
  },
  {
    name: "Newbalan Web App",
    description:
      "Freelance project — built the Newbalan Pharmacy website (newbalanpharmacy.com), a healthcare platform combining pharmacy retail and clinical consultations. Full-stack development with modern UI, service listings, and intuitive patient experience.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "fullstack", color: "green-text-gradient" },
      { name: "freelance", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80",
    source_code_link: "https://newbalanpharmacy.com",
    liveLink: "https://newbalanpharmacy.com",
    isFreelance: true,
  },
  {
    name: "Newbalan Mobile App",
    description:
      "Freelance project — companion mobile application for Newbalan Pharmacy. Patients can browse pharmacy products, access clinic information, and view services on mobile with a smooth, accessible cross-platform experience.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "mobile", color: "green-text-gradient" },
      { name: "freelance", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=800&q=80",
    source_code_link: "https://github.com/Gopi-Mahamkali",
    isFreelance: true,
  },
];

const achievements = [
  {
    title: "All India Rank 3863 — GATE DS&AI 2026",
    emoji: "🎯",
    organization: "GATE 2026",
    description:
      "Secured All India Rank 3863 in GATE Data Science & AI 2026 examination among thousands of nationwide candidates.",
  },
  {
    title: "Winner — AI4Andhra Police Hackathon",
    emoji: "🥇",
    organization: "Andhra Pradesh State Police Department",
    description:
      "Secured 1st place for DOCS2DATA — GenAI-based document workflow automation system deployed for the Andhra Pradesh Police Department.",
  },
  {
    title: "Finalist — HackRx 6.0",
    emoji: "🏆",
    organization: "Bajaj Finserv",
    description:
      "Finalist in HackRx 6.0, a GenAI-focused hackathon conducted by Bajaj Finserv — one of India's largest financial services companies.",
  },
  {
    title: "Best UI/UX Award — Hack To Crack 2.0",
    emoji: "🏅",
    organization: "Hack To Crack 2.0 National Hackathon",
    description:
      "Won Best UI/UX Design and Implementation Award at Hack To Crack 2.0 for a computer-vision / analytics demo under the AIML domain.",
  },
  {
    title: "1st Place — SIH Internal Hackathon",
    emoji: "🚀",
    organization: "RGUKT Nuzvid",
    description:
      "Ranked 1st in the Smart India Hackathon (SIH) Internal Hackathon at university level, competing against 200+ teams.",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  heroInfo,
  aboutInfo,
  socialLinks,
  achievements,
};
