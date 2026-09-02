import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Nayan Wadekar",
  initials: "NPW",
  url: "https://wadekar9.github.io/whoami/",
  location: "Surat, Gujarat, India",
  locationLink: "https://www.google.com/maps/place/surat",

  description: "React Native Developer | 4+ Years | 15+ Mobile Apps",
  description1:
    "React Native • TypeScript • Expo • Android/Kotlin • Performance • Scalable Mobile Apps",

  summary:
    "I'm a React Native Developer with 4+ years of professional experience building cross-platform mobile applications for iOS and Android. I work across the full mobile development lifecycle, from implementing features and designing reusable architectures to API integration, state management, performance optimization, debugging, testing, and app releases.",

  summary1:
    "I've built mobile applications involving real-time communication, service booking, authentication, push notifications, maps, payments, and secure local storage. I also work with Kotlin and Jetpack Compose while exploring React Native's New Architecture, including Fabric, Turbo Modules, JSI, and native bridging. I enjoy improving application performance, maintainability, and user experience while collaborating with designers and engineers to deliver reliable mobile products.",

  avatarUrl: "./me.png",

  skills: [
    {
      label: "Languages",
      stack: ["JavaScript", "TypeScript", "Kotlin"],
    },
    {
      label: "Technologies/Frameworks",
      stack: [
        "React Native",
        "Expo",
        "Expo Router",
        "React.js",
        "Android",
        "iOS",
        "Jetpack Compose",
        "XML",
      ],
    },
    {
      label: "Libraries",
      stack: [
        "Redux Toolkit",
        "React Query",
        "Zustand",
        "React Navigation",
        "Reanimated",
        "Jest",
        "Testing Library",
        "MMKV",
      ],
    },
    {
      label: "React Native",
      stack: [
        "New Architecture",
        "Fabric",
        "Turbo Modules",
        "JSI",
        "Native Bridging",
        "Native Modules",
      ],
    },
    {
      label: "Database",
      stack: [
        "Firebase",
        "Appwrite",
        "SQLite",
        "MMKV",
        "AsyncStorage",
      ],
    },
    {
      label: "Dev Tools",
      stack: [
        "Android Studio",
        "Xcode",
        "VS Code",
        "Cursor",
        "Git",
        "GitHub",
        "GitLab",
        "Postman",
        "Fastlane",
      ],
    },
    {
      label: "Others",
      stack: [
        "REST APIs",
        "Firebase Auth",
        "Firebase Firestore",
        "FCM",
        "Google Maps",
        "ZegoCloud",
        "Stripe",
        "CI/CD",
        "Performance Optimization",
        "Debugging",
      ],
    },
    {
      label: "Operating Systems",
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
        url: "https://drive.google.com/file/d/1uT25FFNlG5tFPKQO-CZMF0wptfLhzOI6/view?usp=sharing",
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
      end: "June 2026",
      description: "",
    },
    {
      company: "Sridix Technology",
      href: "https://www.sridix.com",
      badges: [],
      location: "Surat, Gujarat, India",
      title: "Mobile App Developer",
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
      title: "Developer Intern",
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
  ],

  projects: [
    {
      title: "Quickfix - Home & Office Service Platform",
      href: "",
      active: true,
      technologies: [
        "React Native",
        "Firebase Firestore",
        "FCM",
        "Google Maps",
        "REST APIs",
        "Real-time Chat",
        "State Management",
      ],
      links: [],
      image: "./quickfix.png",
      video: "",
    },

    {
      title: "HiBro - English Speaking App",
      href: "https://play.google.com/store/apps/details?id=com.arifauto.hibro",
      active: true,
      technologies: [
        "React Native",
        "TypeScript",
        "ZegoCloud",
        "Firebase Firestore",
        "FCM",
        "Redux",
        "Real-time Communication",
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
      title: "SilentSafe - Offline Password Manager",
      href: "https://play.google.com/store/apps/details?id=com.thinkheadlabs.passwordmanager.credentialsmanager.vault.silentsafe",
      active: true,
      technologies: [
        "React Native",
        "Biometric Authentication",
        "AES-256 Encryption",
        "Secure Storage",
        "SQLite",
        "Material Design 3",
        "i18n",
      ],
      links: [
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=com.thinkheadlabs.passwordmanager.credentialsmanager.vault.silentsafe",
          icon: <Icons.smartphone className="size-3" />,
        },
      ],
      image: "./silent-safe.png",
      video: "",
    },

    {
      title: "Beedee - Dating App",
      href: "https://beedee.com/",
      active: true,
      technologies: [
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "Firebase",
        "FCM/APNs",
        "Real-time Messaging",
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
      title: "ConvertioX - File Converter",
      href: "https://play.google.com/store/apps/details?id=com.thinkheadlabs.convertiox.compressfile.file_converter.tools.imagetopdf.document.ocrtext.pdftools",
      active: true,
      technologies: [
        "React Native",
        "TypeScript",
        "File Management",
        "PDF/Image Tools",
        "OCR",
        "QR Scanner",
        "Firebase",
      ],
      links: [
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=com.thinkheadlabs.convertiox.compressfile.file_converter.tools.imagetopdf.document.ocrtext.pdftools",
          icon: <Icons.smartphone className="size-3" />,
        },
      ],
      image: "./converter-app.png",
      video: "",
    },

    {
      title: "AI Wealth Calculator : 401k",
      href: "https://growlifefund.com/",
      active: true,
      technologies: [
        "React Native",
        "TypeScript",
        "Zustand",
        "Victory Native Charts",
        "Firebase Analytics",
        "Google AdMob",
        "i18n",
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
        "TypeScript",
        "Expo",
        "Redux Toolkit",
        "React Navigation",
        "Firebase",
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
