import profile from "../assets/profile.png";
import appolice from "../assets/appolice.png";
import foursightai from "../assets/company/4sightai.png";
import qualizeal from "../assets/company/qualizeal.png";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const profileImage = profile;

export const hero = {
  name: "Gopi Jagadheesh",
  role: "Software & AI Engineer",
  summary:
    "I build AI systems and backend APIs that turn messy documents, images, and workflows into tools people can actually use.",
  location: "RGUKT Nuzvid · B.Tech Computer Science · May 2027",
};

export const about = {
  paragraphs: [
    "I'm a Computer Science student at RGUKT Nuzvid (CGPA 8.99). I like taking a real problem — a police form, a gig worker's budget, a clinic's website — and shipping something that works in production.",
    "Most of my work sits between models and software: agent systems, computer vision, and FastAPI services, plus freelance web and mobile apps. I'm also a software engineer intern at Qualizeal, building RAG pipelines and backend APIs for an enterprise AI-testing platform.",
  ],
};

export const education = [
  {
    school: "RGUKT Nuzvid",
    detail: "B.Tech Computer Science & Engineering",
    date: "Sep 2023 – May 2027",
    note: "CGPA 8.99",
  },
  {
    school: "RGUKT Nuzvid",
    detail: "Pre-University Certificate",
    date: "Dec 2021 – Aug 2023",
    note: "CGPA 9.85",
  },
];

export const highlights = [
  { value: "8.99", label: "CGPA at RGUKT Nuzvid" },
  { value: "AIR 3863", label: "GATE DS & AI 2026" },
  { value: "1st", label: "AI4Andhra Police Hackathon" },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/Itz-gopi204" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/Gopi-Mahamkali" },
  { name: "LeetCode", url: "https://leetcode.com/u/gopi_3101/" },
  { name: "Email", url: "mailto:gopimahamkali3101@gmail.com" },
];

export const email = "gopimahamkali3101@gmail.com";
export const phone = "+91 8309383698";
export const resumeUrl = "/resume.pdf";

export const technologies = [
  {
    category: "Languages",
    items: ["Python", "C++", "SQL"],
  },
  {
    category: "AI / ML",
    items: ["PyTorch", "LangChain", "LangGraph", "RAG", "Hugging Face", "scikit-learn", "OpenCV", "YOLO"],
  },
  {
    category: "Web & API",
    items: ["FastAPI", "React", "Vite", "REST APIs"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Pinecone"],
  },
  {
    category: "Tools",
    items: ["Docker", "Git", "Azure", "Postman"],
  },
];

export const experiences = [
  {
    title: "Software Development Engineer Intern",
    company: "Qualizeal",
    place: "Hyderabad",
    date: "Jun 2026 – Present",
    logo: qualizeal,
    link: "https://qualizeal.com/",
    linkLabel: "Company",
    points: [
      "Built core backend modules for ValidAite, an enterprise AI-testing platform, covering 12 use cases with the RMTE framework — Risk, Metrics, Testing, and Evidence.",
      "Designed modular FastAPI APIs that orchestrate those tests.",
      "Engineered a RAG pipeline that writes prompts and ground-truth answers from uploaded documents, cutting manual QA-pair writing time by 60%.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "4SightAI",
    place: "Vijayawada",
    date: "Oct 2025 – Mar 2026",
    logo: foursightai,
    link: "https://drive.google.com/file/d/1f2v4SdQO-AxHeYMBXG1ckBTMNVhgW-yK/view",
    linkLabel: "Work sample",
    points: [
      "Led DOCS2DATA for the AI4Andhra Police pilot — structured data from police documents, cutting manual processing by 90%.",
      "Built document pipelines with Azure Document Intelligence and rule-based checks so messy files come out clean and consistent.",
      "Shipped FastAPI microservices for document intake, processing, and retrieval.",
      "Trained YOLO models to detect signatures and stamps, reaching 97% precision on scanned police documents.",
      "Built a six-agent road-safety system (YOLO + Gemini) that flags fire, water, potholes, heavy vehicles, waste, and fallen trees, cutting manual review by 90%.",
    ],
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "Newbalan Pharmacy",
    date: "2024",
    link: "https://newbalanpharmacy.com",
    linkLabel: "Live site",
    points: [
      "Built newbalanpharmacy.com — a site for a local pharmacy and clinic, covering products, services, and consultations.",
      "Shipped a companion mobile app so patients can browse products and clinic info on their phone.",
      "Handled the whole engagement alone, from the first conversation through design, build, and handoff.",
    ],
  },
];

export const projects = [
  {
    name: "Community Hero",
    metric: "Live civic platform",
    description:
      "A civic AI co-pilot. React and FastAPI handle role-based tasks, and Gemini 1.5 Flash classifies hazards, finds duplicate locations, and checks before-and-after photos to confirm the work is done.",
    tags: ["Python", "FastAPI", "MongoDB", "React"],
    accent: "from-lime-200/50 via-emerald-400/10",
    link: "https://vibe2-ship-pearl.vercel.app/",
    linkLabel: "Live site",
  },
  {
    name: "DOCS2DATA",
    metric: "90% less manual work",
    description:
      "Document intelligence for the Andhra Pradesh Police. It pulls structured data out of police files with Azure Document Intelligence and custom YOLO models. First place at the AI4Andhra Police Hackathon.",
    tags: ["Python", "FastAPI", "Computer vision"],
    accent: "from-emerald-300/50 via-teal-400/10",
    logo: appolice,
    link: "https://github.com/Gopi-Mahamkali",
    linkLabel: "GitHub",
  },
  {
    name: "KAMAI",
    metric: "12 agents, 200+ schemes",
    description:
      "A financial companion for India's gig workers. Twelve AutoGen agents on Azure OpenAI handle income, spending swings, budgets, and matches across 200+ government schemes.",
    tags: ["AutoGen", "Azure OpenAI", "FastAPI"],
    accent: "from-amber-200/50 via-orange-300/10",
    link: "https://github.com/Gopi-Mahamkali",
    linkLabel: "GitHub",
  },
  {
    name: "Drone Weapon Detection",
    metric: "40% fewer false alarms",
    description:
      "Built with a teammate. YOLOv8n finds people, then a classifier looks for weapons only inside those boxes. Keeping inference on those regions cut latency and removed 40% of background false alarms. A FastAPI service runs it on images and video.",
    tags: ["PyTorch", "YOLOv8", "FastAPI"],
    accent: "from-violet-300/50 via-fuchsia-400/10",
    link: "https://github.com/Itz-gopi204/drone-weapon-detection",
    linkLabel: "GitHub",
  },
  {
    name: "Newbalan Pharmacy",
    metric: "Web and mobile, shipped",
    description:
      "Freelance build for a pharmacy and clinic. The website lists services and products, and a mobile app lets patients check the same information on the go.",
    tags: ["React", "React Native", "Freelance"],
    accent: "from-sky-300/50 via-cyan-300/10",
    link: "https://newbalanpharmacy.com",
    linkLabel: "Live site",
  },
];

export const achievements = [
  {
    title: "All India Rank 3863 — GATE DS & AI 2026",
    organization: "GATE 2026",
    description: "Ranked 3863 nationwide in the Data Science & AI paper.",
    link: "https://drive.google.com/file/d/1DcvuRLzmBplGCN6SbQFVks2170giYQEN/view",
    linkLabel: "Scorecard",
  },
  {
    title: "200+ problems on LeetCode",
    organization: "LeetCode",
    description: "Solved 200+ problems across core data structures and algorithms.",
    link: "https://leetcode.com/u/gopi_3101/",
    linkLabel: "Profile",
  },
  {
    title: "Winner — AI4Andhra Police Hackathon",
    organization: "Andhra Pradesh State Police",
    description:
      "First place for DOCS2DATA, a document workflow system for the police department.",
  },
  {
    title: "Finalist — HackRx 6.0",
    organization: "Bajaj Finserv",
    description: "Finalist in Bajaj Finserv's GenAI hackathon, among 1000+ teams.",
  },
  {
    title: "Best UI/UX — Hack To Crack 2.0",
    organization: "National hackathon",
    description: "Best UI/UX award for a computer-vision demo in the AIML track.",
  },
  {
    title: "1st place — SIH internal hackathon",
    organization: "RGUKT Nuzvid",
    description: "First among 200+ teams in the Smart India Hackathon campus round.",
  },
];
