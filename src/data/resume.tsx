import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Nayan Wadekar",
  initials: "NPW",
  url: "https://wadekar9.github.io/whoami/",
  location: "Surat, Gujarat, India",
  locationLink: "https://www.google.com/maps/place/surat",
  description:
    "Building high-performance mobile apps using React Native. Let's turn your app idea into a reality",
  summary:
    "Hi, I'm Nayan Wadekar—a passionate and results-driven React Native developer with over [3 years of hands-on experience](#) in creating high-performance, cross-platform mobile apps. I specialize in building seamless, user-friendly experiences that bridge the gap between iOS and Android. My expertise in React Native allows me to [craft robust, scalable apps](#) that meet both business needs and user expectations. I'm always [exploring new technologies and development practices](#) to push the boundaries of mobile app development, and I'm committed to delivering solutions that are [both innovative and efficient](#).",
  avatarUrl: "/me.png",
  skills: [
    {
      label: "Languages",
      stack: ["Javascript", "Typescript", "Dart", "JSON", "C/C++", "HTML+CSS"],
    },
    {
      label: "Frameworks",
      stack: ["React Native", "Expo", "Flutter", "React.js", "Next.js"],
    },
    {
      label: "Libraries",
      stack: ["Tailwind", "Jest", "Redux", "Redux-Toolkit", "Redux-Saga", "Zustand"],
    },
    {
      label: "Database",
      stack: ["Firebase", "Appwrite", "SQLite"],
    },
    {
      label: "Dev Tools",
      stack: ["VSCode", "Android Studio", "Xcode", "Postman", "Git", "Github", "BitBucket", "Figma", "Agile Development"],
    },
    {
      label: "AI Tools",
      stack: ["ChatGPT", "Deepseek", "Claude AI"],
    },
    {
      label: "Operaing Systems",
      stack: ["MacOS", "Windows"]
    }
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }
  ],
  contact: {
    email: "npwadekar7@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/wadekar9",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nayan-wadekar-855253197/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/nayan_wadekar?t=g_qw7RFAMYakXP0oiGhWdw&s=09",
        icon: Icons.x,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:npwadekar7@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      Resume: {
        name: "Download Resume",
        url: "https://drive.google.com/file/d/1N_GOcyp1upRgG31i1HFYDDYDiHOT2f7T/view?usp=sharing",
        icon: Icons.resumecv,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Tecocraft Infusion Pvt Ltd",
      href: "https://www.tecocraft.com/",
      badges: [],
      location: "Surat, Gujarat, India",
      title: "React Native Developer",
      logoUrl: "./tecocraft.png",
      start: "January 2024",
      end: "Present",
      description: ""
    },
    {
      company: "Upwork",
      badges: [],
      href: "https://www.upwork.com",
      location: "Remote",
      title: "Freelance React Native Developer",
      logoUrl: "./upwork.png",
      start: "June 2023",
      end: "Present",
      description: ""
    },
    {
      company: "Sridix Technology",
      href: "https://www.sridix.com",
      badges: [],
      location: "Surat, Gujarat, India",
      title: "React Native Developer",
      logoUrl: "./sridix.png",
      start: "October 2022",
      end: "January 2024",
      description: ""
    },
    {
      company: "Sridix Technology",
      href: "https://www.sridix.com",
      badges: [],
      location: "Surat, Gujarat, India",
      title: "React Native Intern",
      logoUrl: "./sridix.png",
      start: "July 2022",
      end: "September 2022",
      description: ""
    }
  ],
  education: [
    {
      school: "Dr. Babasaheb Ambedkar Open University",
      href: "https://baou.edu.in/",
      degree: "Bachelor's Degree of Science (BSCIT)",
      logoUrl: "./baou.png",
      start: "2024",
      end: "Present"
    },
    {
      school: "Gujarat Technological University",
      href: "https://www.gtu.ac.in",
      degree: "Bachelor's Degree of Engineering (BE)",
      logoUrl: "./gtu.png",
      start: "2018",
      end: "2020"
    }
  ],
  projects: [
    {
      title: "Englist Muni App",
      href: "https://www.englishmuni.com/",
      active: true,
      description:
        "In the Spoken English Guru app, I implemented a real-time voice calling feature using [Firebase](https://firebase.google.com/) and [ZegoCloud SDK](https://www.zegocloud.com). This feature allows users to connect with random individuals within the app, creating an interactive environment for practicing spoken English.",
      technologies: [
        "React Native",
        "Javascript",
        "Typescript",
        "Firebase",
        "Zegocloud SDK"
      ],
      links: [
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=com.englishmuni",
          icon: <Icons.smartphone className="size-3" />,
        },
      ],
      image: "/assets/project-01.png",
      video: ""
    }
  ],
  hackathons: []
} as const;
