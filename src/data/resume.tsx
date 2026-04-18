import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Nayan Wadekar",
  initials: "NPW",
  url: "https://wadekar9.github.io/whoami/",
  location: "Surat, Gujarat, India",
  locationLink: "https://www.google.com/maps/place/surat",
  description: "Mobile Engineer (React Native) | 15+ Apps Shipped",
  description1: "TypeScript • iOS & Android • Pixel Perfect & Responsive UI • Performance • Scalable Apps",
  summary:
    "I'm a Mobile Engineer with experience building and shipping 15+ production-grade mobile applications using React Native and TypeScript. I work across the full mobile development lifecycle — from implementing features and designing clean architectures to optimizing performance and preparing apps for release on both iOS and Android. My focus is on building reliable, scalable applications with smooth, consistent user experiences.",
  summary1:
    "I specialize in developing pixel-perfect UI, creating reusable components, and integrating real-world features such as real-time functionality, third-party SDKs, and backend services like Firebase. I also spend time improving performance and maintainability — reducing unnecessary re-renders, optimizing load times, and structuring codebases that are easy to scale and maintain. I enjoy collaborating with designers and engineers to turn ideas into well-crafted mobile experiences, and I’m always exploring better ways to build, structure, and ship high-quality apps.",
  avatarUrl: "./me.png",
  skills: [
    {
      label: "Languages",
      stack: ["Javascript", "Typescript", "Kotlin", "C/C++"],
    },
    {
      label: "Technologies/Frameworks",
      stack: [
        "React Native",
        "Expo",
        "React.js",
        "Android"
      ],
    },
    {
      label: "Libraries",
      stack: [
        "Zustand",
        "Redux-Toolkit",
        "React-Query",
        "Core Redux",
        "Tailwind",
        "Jest",
        "Reanimated",
        "RN-Skia",
        "React Navigation",
        "MMKV",
      ],
    },
    {
      label: "Database",
      stack: ["Firebase", "Appwrite", "SQLite"],
    },
    {
      label: "Dev Tools",
      stack: [
        "Antigravity",
        "Android Studio",
        "Xcode",
        "VS Code",
        "Cursor",
        "Git",
        "GitHub",
        "Postman",
        "Vysor",
      ],
    },
    {
      label: "Others",
      stack: [
        "Tailwind CSS",
        "JSON",
        "SQL"
      ],
    },
    {
      label: "Operaing Systems",
      stack: ["MacOS", "Windows"],
    },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
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
        url: "",
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
      description: "",
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
      description: "",
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
      description: "",
    },
  ],
  education: [
    {
      school: "Dr. Babasaheb Ambedkar Open University",
      href: "https://baou.edu.in/",
      degree: "Bachelor's Degree of Science (BSCIT)",
      logoUrl: "./baou.png",
      start: "2024",
      end: "Present",
    },
    {
      school: "Gujarat Technological University",
      href: "https://www.gtu.ac.in",
      degree: "Bachelor's Degree of Engineering (BE)",
      logoUrl: "./gtu.png",
      start: "2018",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "SilentSafe - Offline Password Manager",
      href: "https://play.google.com/store/apps/details?id=com.thinkheadlabs.passwordmanager.credentialsmanager.vault.silentsafe",
      active: true,
      technologies: [
        "Biometric Authentication",
        "AES-256 Encryption",
        "Material Design 3",
        "SecureStorage",
        "Secure SQLite",
        "Tailwind CSS",
        "i18n"
      ],
      links: [
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=com.thinkheadlabs.passwordmanager.credentialsmanager.vault.silentsafe",
          icon: <Icons.smartphone className="size-3" />,
        }
      ],
      image: "./silent-safe.png",
      video: "",
    },
    {
      title: "ConvertioX - File Converter",
      href: "https://play.google.com/store/apps/details?id=com.thinkheadlabs.convertiox.compressfile.file_converter.tools.imagetopdf.document.ocrtext.pdftools",
      active: true,
      technologies: [
        "File Management",
        "PDF/Image Tools",
        "OCR",
        "QR Scanner",
        "Firebase",
        "Typescript"
      ],
      links: [
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=com.thinkheadlabs.convertiox.compressfile.file_converter.tools.imagetopdf.document.ocrtext.pdftools",
          icon: <Icons.smartphone className="size-3" />,
        }
      ],
      image: "./converter-app.png",
      video: "",
    },
    {
      title: "Beedee - Dating App",
      href: "https://beedee.com/",
      active: true,
      technologies: [
        "Real-time Messaging",
        "FCM/APNs",
        "Redux-Toolkit",
        "Firebase",
        "Typescript"
      ],
      links: [
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=com.beedee.app",
          icon: <Icons.smartphone className="size-3" />,
        },
        {
          type: "App Store",
          href: "https://apps.apple.com/us/app/beedee/id1614103533",
          icon: <Icons.smartphone className="size-3" />,
        },
      ],
      image: "./beedee.png",
      video: "",
    },
    {
      title: "HiBro App",
      href: "https://play.google.com/store/apps/details?id=com.arifauto.hibro",
      active: true,
      technologies: [
        "Real-time Messaging(Firestore)",
        "ZegoCloud",
        "FCM/APNs",
        "Core Redux",
        "Firebase",
        "Typescript/JavaScript"
      ],
      links: [
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=com.arifauto.hibro",
          icon: <Icons.smartphone className="size-3" />,
        },
      ],
      image: "./hibro.png",
      video: "",
    },
    {
      title: "AI Wealth Calculator : 401k",
      href: "https://growlifefund.com/",
      active: true,
      technologies: [
        "i18n",
        "Google-AdMob",
        "Firebase Analytics",
        "Victory Native Charts",
        "React Native",
        "Typescript",
        "Zustand"
      ],
      links: [
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=com.growlifefund",
          icon: <Icons.smartphone className="size-3" />,
        },
      ],
      image: "./growlifefund.png",
      video: "",
    },
    {
      title: "React Native Template",
      href: "https://github.com/wadekar9/rn-awesome-boilerplate",
      active: true,
      technologies: [
        "React Native",
        "Typescript",
        "Firebase",
        "Expo",
        "Redux Toolkit",
        "React Navigation",
        "MMKV",
        "i18n",
        "SVG",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/wadekar9/rn-awesome-boilerplate",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "./react-native.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
