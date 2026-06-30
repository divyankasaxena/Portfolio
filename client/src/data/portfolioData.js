// All résumé / GitHub content lives here — edit this file to update the site.
import collab from "../assets/projects/collab.png";
import pro2 from "../assets/projects/pro2.png";
import campus from "../assets/projects/campus.png";
import bank from "../assets/projects/bank.png";
export const profile = {
  name: "Divyanka Saxena",
  initials: "DS",
  role: "Full Stack Developer · CS Student",
  tagline: "Building intelligent software.",
  subtitle:
    "A final-year Computer Science engineer crafting AI-powered, full-stack products — from real-time collaborative editors to intelligent interview platforms — with a focus on clean engineering and considered design.",
  location: "Mathura, Uttar Pradesh, IN",
  university: "GLA University",
  graduating: "June 2027",
  cgpa: "7.76 / 10",
  email: "divyanka.saxena_cs23@gla.ac.in",
  phone: "+91 96341 61222",
  linkedin: "https://www.linkedin.com/in/divyankasaxena/",
  github: "https://github.com/divyankasaxena",
  resumeFile: "/Divyanka_Saxena BTechcse_GlAU.pdf",
};

export const heroStats = [
  { label: "REPOSITORIES", value: 15, decimal: false },
  { label: "FEATURED PROJECTS", value: 4, decimal: false },
  { label: "CERTIFICATIONS", value: 8, decimal: false },
  { label: "CGPA / 10", value: 7.76, decimal: true },
];

export const timeline = [
  {
    date: "JUNE — JULY 2024",
    title: "Frontend Intern, BAOIAM Innovations Pvt Ltd",
    desc: "Designed and developed intuitive, visually appealing interfaces that improved user experience and engagement across web platforms. Worked within an Agile/Scrum environment — contributing to sprint planning, backlog grooming, and daily stand-ups.",
  },
  {
    date: "2025 — 2026",
    title: "Independent Full-Stack Projects",
    desc: "Built an AI-powered interview preparation platform and a real-time collaborative code editor, deepening expertise in React, Node.js, and Socket.IO-based systems.",
  },
  {
    date: "2022 — 2027",
    title: "B.Tech, Computer Science — GLA University, Mathura",
    desc: "CGPA 7.76/10. Coursework in DSA, OOP, DBMS, and software engineering, paired with active participation in hackathons and technical clubs.",
  },
  {
    date: "2020 — 2023",
    title: "Shri Gulab Rai Montessori Sr. Sec. School, Bareilly",
    desc: "High School — 96% · Intermediate — 80%.",
  },
];

export const skills = [
  { name: "React.js", cat: ["frontend"] },
  { name: "HTML5", cat: ["frontend"] },
  { name: "CSS3", cat: ["frontend"] },
  { name: "JavaScript", cat: ["lang", "frontend"] },
  { name: "TypeScript", cat: ["lang", "frontend"] },
  { name: "Java", cat: ["backend", "lang"] },
  { name: "OOP", cat: ["backend"] },
  { name: "Data Structures & Algorithms", cat: ["backend"] },
  { name: "REST APIs", cat: ["backend"] },
  { name: "Node.js", cat: ["backend"] },
  { name: "Express.js", cat: ["backend"] },
  { name: "Socket.IO", cat: ["backend"] },
  { name: "MySQL", cat: ["db"] },
  { name: "MongoDB", cat: ["db"] },
  { name: "Git & GitHub", cat: ["devops"] },
  { name: "Vercel", cat: ["devops"] },
  { name: "Linux", cat: ["devops"] },
  { name: "Shell Scripting", cat: ["devops"] },
  { name: "Docker", cat: ["devops"] },
  { name: "Jenkins", cat: ["devops"] },
  { name: "System Design", cat: ["lang"] },
];

export const skillFilters = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "db", label: "Databases" },
  { key: "devops", label: "DevOps & Tools" },
  { key: "lang", label: "Languages" },
];

export const projects = [
  {
    id: "interviewiq",
    name: "AI-Powered Interview Preparation Platform",
    date: "May 2026",
    featured: true,
    gradient: "linear-gradient(135deg,#5b6450,#A9824C)",
    image: collab,
    description:
      "A full-stack platform where candidates practice coding, aptitude, and HR interview questions with real-time AI feedback — featuring secure authentication, AI-generated question recommendations, an in-browser coding editor, and an analytics dashboard for tracking performance.",
    stack: ["React.js", "Node.js", "MongoDB", "AI/ML"],
    github: "https://github.com/divyankasaxena/InterviewIQ",
    search: "AI-Powered Interview Preparation Platform InterviewIQ react ai",
  },
  {
    id: "collab-editor",
    name: "Collaborative Code Editor",
    date: "June 2026",
    featured: true,
    gradient: "linear-gradient(135deg,#2A2A28,#6B7058)",
    image: pro2,
    description:
      "A real-time code collaboration platform with live code synchronization, syntax highlighting, and multi-language support — built to enable seamless pair-programming and shared coding sessions across devices.",
    stack: ["React.js", "Node.js", "Express.js", "Socket.IO", "JavaScript"],
    github: "https://github.com/divyankasaxena",
    search: "Collaborative Code Editor real-time socket.io",
  },
  {
    id: "campus-dashboard",
    name: "Campus Notification Dashboard",
    date: "JavaScript",
    featured: false,
    gradient: "linear-gradient(135deg,#A9824C,#C9A875)",
    image: campus,
    description:
      "A dashboard for broadcasting and managing campus-wide notifications and announcements, designed for clarity and quick scanning of time-sensitive updates.",
    stack: ["JavaScript", "Dashboard UI"],
    github: "https://github.com/divyankasaxena/Campus-Notification-Dashboard",
    search: "Campus Notification Dashboard javascript",
  },
  {
    id: "bank-system",
    name: "Bank System",
    date: "JavaScript",
    featured: false,
    gradient: "linear-gradient(135deg,#28271F,#A9824C)",
    image: bank,
    description:
      "A simulated banking system implementing core account operations — deposits, withdrawals, and transaction history — applying object-oriented design principles.",
    stack: ["JavaScript", "OOP"],
    github: "https://github.com/divyankasaxena/BANKSYSTEM",
    search: "Bank System java oop dsa",
  },
 
];

export const certifications = [
  { icon: "Az", title: "Microsoft Certified: Azure AI Fundamentals", meta: "Microsoft"  , link :"https://drive.google.com/file/d/19gviD1fsImZpDq6SsNuAEYWZ2DUgYPAq/view?pli=1"},
  { icon: "SQL", title: "T-SQL for Data Analysis (SQL Server)", meta: "Microsoft Learn" , link : "https://drive.google.com/file/d/19gviD1fsImZpDq6SsNuAEYWZ2DUgYPAq/view?pli=1" },
  { icon: "Mo", title: "MongoDB in Python", meta: "DataCamp · 2026" , link : "https://www.datacamp.com/statement-of-accomplishment/course/8d2d25fffaff32e2b2955174d256000fcecd60d3?raw=1" },
  { icon: "Sp", title: "SPECTRA 3.O Hackathon", meta: "2025" , link : "https://drive.google.com/file/d/14rGN98bc73YTeGJVI2jxXfaQqrYGWgmQ/view"},
  { icon: "Hx", title: "HACKENTRIX", meta: "2026"  , link : "https://drive.google.com/file/d/1jD5OIXPO9wSr34ieEco-v0janHRgEg52/view"},
  { icon: "Cb", title: "CodeBusters", meta: "2024"  , link : "https://drive.google.com/file/d/1jD5OIXPO9wSr34ieEco-v0janHRgEg52/view"},
  { icon: "R", title: "R Programming", meta: "2026"  , link : "https://www.linkedin.com/feed/update/urn:li:activity:7444980703311781888/"},
  { icon: "FS", title: "Full-Stack Development", meta: "2023"  , link : "https://www.linkedin.com/posts/divyankasaxena_fullstackdevelopment-meanstack-webdevelopment-activity-7349706763174109184-d2Hi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEa8tE0B6VM5W7UKmNQpwZ2OKGiRzgfGYnk"},
];

export const achievements = [
  { num: "01", text: 'Anchored "Parichay" and multiple induction programmes for incoming students.' },
  { num: "02", text: 'Hosted the Cyberonites Club event at "Intrusion X" — the university\'s flagship tech fest.' },
  { num: "03", text: "Coordinated placement drives, supporting smooth on-campus recruitment logistics." },
  { num: "04", text: "Won 1st position in a Debate Competition." },
  { num: "05", text: "Won prize in Extempore Competition." },
  { num: "06", text: "5+ NPTEL Certifications" },
];

export const pinnedRepos = [
  { name: "InterviewIQ", lang: "JavaScript" },
  { name: "Campus-Notification-Dashboard", lang: "JavaScript" },
  { name: "BridgeLabz-SIPP-Training-2026", lang: "Java" },
  { name: "BANKSYSTEM", lang: "JavaScript" },
];

export const githubUsername = "divyankasaxena";

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
