import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Nayan Wadekar",
  initials: "NW",

  url: "https://wadekar9.github.io/whoami/",
  location: "Surat, Gujarat, India",

  description: "React Native Developer | 4+ Years | 15+ Mobile Apps",
  description1:
    "React Native • TypeScript • Expo • Android/Kotlin • Performance • Scalable Mobile Apps",

  summary:
    "I'm a React Native Developer with 4+ years of professional experience building cross-platform mobile applications for iOS and Android. I work across the full mobile development lifecycle, from architecture and reusable UI components to API integration, state management, third-party SDKs, performance optimization, debugging, testing, and app releases.",

  summary1:
    "I've built mobile applications involving real-time communication, service booking, authentication, push notifications, maps, payments, and secure local storage. I'm also deepening my native Android expertise with Kotlin and Jetpack Compose while exploring React Native's New Architecture, including Fabric, Turbo Modules, JSI, and native bridging.",

  avatarUrl: "./me.png",

  skills: [
    {
      label: "Languages",
      stack: [
        "JavaScript",
        "TypeScript",
        "Kotlin",
      ],
    },

    {
      label: "Mobile",
      stack: [
        "React Native",
        "Expo",
        "Expo Router",
        "Android",
        "iOS",
        "Jetpack Compose",
        "XML",
      ],
    },

    {
      label: "React Native",
      stack: [
        "Redux Toolkit",
        "React Query",
        "Zustand",
        "React Navigation",
        "Reanimated",
        "New Architecture",
        "Fabric",
        "Turbo Modules",
        "JSI",
        "Native Bridging",
      ],
    },

    {
      label: "Backend & Storage",
      stack: [
        "REST APIs",
        "Firebase",
        "Appwrite",
        "SQLite",
        "MMKV",
        "AsyncStorage",
      ],
    },

    {
      label: "SDKs & Integrations",
      stack: [
        "Firebase Auth",
        "Firebase Firestore",
        "FCM",
        "Google Maps",
        "ZegoCloud",
        "Stripe",
      ],
    },

    {
      label: "Testing & Delivery",
      stack: [
        "Jest",
        "Testing Library",
        "Git",
        "GitHub",
        "GitLab",
        "Fastlane",
        "CI/CD",
        "Google Play",
        "App Store",
      ],
    },

    {
      label: "Development Tools",
      stack: [
        "Android Studio",
        "Xcode",
        "VS Code",
        "Cursor",
        "Postman",
        "Vysor",
      ],
    },
  ],

  work: [
    {
      company: "Tecocraft Infusion Pvt Ltd",
      href: "",
      badges: [],
      location: "India",
      title: "React Native Developer",
      logoUrl: "",
      start: "Jan 2024",
      end: "Jun 2026",

      description: [
        "Built and maintained 5+ production cross-platform mobile applications using React Native, Expo, TypeScript, and JavaScript across UI development, API integration, testing, and releases.",

        "Designed reusable authentication, networking, and state-management solutions using Firebase Auth, Google/Apple Sign-In, Redux Toolkit, React Query, Axios, and Zod.",

        "Improved application performance by addressing startup and rendering delays, unnecessary re-renders, memory issues, large-list performance, and API/network bottlenecks using profiling and logging.",

        "Investigated and resolved production crashes, defects, build issues, and release problems while supporting iOS and Android deployments through the Apple App Store and Google Play Store.",

        "Reviewed pull requests and mentored 5-7 junior developers and peers on project architecture, folder structure, state management, coding practices, performance optimization, and problem-solving.",
      ],
    },

    {
      company: "Sridix Technology",
      href: "",
      badges: [],
      location: "India",
      title: "Mobile App Developer",
      logoUrl: "",
      start: "Oct 2022",
      end: "Jan 2024",

      description: [
        "Delivered 8 production React Native applications across e-commerce, social, and messaging use cases, contributing across requirements, development, testing, and App Store/Google Play releases.",

        "Built applications from scratch using React Native, Expo, Expo Router, TypeScript, JavaScript, SQLite, MMKV, and AsyncStorage with reusable UI components and scalable project structures.",

        "Integrated REST APIs, Firebase, and ZegoCloud for authentication, real-time communication, chat, push notifications, and data synchronization.",

        "Diagnosed and optimized rendering performance, large-list handling, API/network performance, memory usage, and production issues through debugging, profiling, and logging.",
      ],
    },

    {
      company: "Sridix Technology",
      href: "",
      badges: [],
      location: "India",
      title: "Developer Intern",
      logoUrl: "",
      start: "Jul 2022",
      end: "Sep 2022",

      description: [
        "Contributed to React Native mobile application development while gaining hands-on experience with cross-platform UI development, API integration, debugging, and project workflows.",
      ],
    },
  ],

  education: [
    {
      school: "Dr. B. R. Ambedkar Open University",
      href: "",
      degree: "B.Sc. Information Technology",
      logoUrl: "",
      start: "2024",
      end: "Present",
    },
  ],

  projects: [
    {
      title: "Quickfix - Home & Office Service Platform",
      href: "",
      active: true,

      description:
        "Built both Customer and Service Provider apps from scratch, implementing end-to-end service booking workflows, nearby provider discovery with Google Maps, real-time chat and quotations using Firebase Firestore, FCM notifications, REST API integration, state management, business logic, and performance optimization.",

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

      description:
        "Built a real-time English learning platform enabling users to connect through live audio calls, integrating ZegoCloud and Firebase for communication, authentication, and data synchronization. Reached 10K+ Google Play downloads.",

      technologies: [
        "React Native",
        "TypeScript",
        "ZegoCloud",
        "Firebase Firestore",
        "FCM",
        "Real-time Communication",
        "Redux",
      ],

      links: [
        {
          type: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.arifauto.hibro",
        },
      ],

      image: "./hibro.png",
      video: "",
    },

    {
      title: "SilentSafe - Password Manager",
      href: "https://play.google.com/store/apps/details?id=com.thinkheadlabs.passwordmanager.credentialsmanager.vault.silentsafe",
      active: true,

      description:
        "Built a privacy-focused offline password manager with an encrypted local vault, AES-256 protection, biometric authentication, secure backup/export, auto-lock, clipboard clearing, and screenshot protection.",

      technologies: [
        "React Native",
        "SQLite",
        "AES-256",
        "Biometric Authentication",
        "Secure Storage",
      ],

      links: [
        {
          type: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.thinkheadlabs.passwordmanager.credentialsmanager.vault.silentsafe",
        },
      ],

      image: "./silentsafe.png",
      video: "",
    },

    {
      title: "Beedee - Dating & Messaging App",
      href: "https://beedee.com/",
      active: true,

      description:
        "Built mobile features for a dating platform with real-time messaging, push notifications, state management, and Firebase integration across iOS and Android.",

      technologies: [
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "Firebase",
        "FCM",
        "APNs",
        "Real-time Messaging",
      ],

      links: [
        {
          type: "Website",
          href: "https://beedee.com/",
        },
        {
          type: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.beedee.app",
        },
        {
          type: "App Store",
          href: "https://apps.apple.com/us/app/beedee/id1614103533",
        },
      ],

      image: "./beedee.png",
      video: "",
    },

    {
      title: "ConvertioX - File & Document Utility",
      href: "https://play.google.com/store/apps/details?id=com.thinkheadlabs.convertiox.compressfile.file_converter.tools.imagetopdf.document.ocrtext.pdftools",
      active: true,

      description:
        "Built a mobile utility application for file management and document processing, including PDF and image tools, OCR, QR scanning, and Firebase integration.",

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
          type: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.thinkheadlabs.convertiox.compressfile.file_converter.tools.imagetopdf.document.ocrtext.pdftools",
        },
      ],

      image: "./convertiox.png",
      video: "",
    },

    {
      title: "AI Wealth Calculator",
      href: "https://growlifefund.com/",
      active: true,

      description:
        "Built a React Native financial calculator experience with interactive charts, localization, analytics, and mobile monetization integrations.",

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
          type: "Website",
          href: "https://growlifefund.com/",
        },
        {
          type: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.growlifefund",
        },
      ],

      image: "./ai-wealth-calculator.png",
      video: "",
    },

    {
      title: "React Native Awesome Boilerplate",
      href: "https://github.com/wadekar9/rn-awesome-boilerplate",
      active: true,

      description:
        "Created a reusable React Native project foundation with TypeScript, Expo, Redux Toolkit, React Navigation, Firebase, MMKV, internationalization, SVG support, and reusable project structure.",

      technologies: [
        "React Native",
        "TypeScript",
        "Expo",
        "Redux Toolkit",
        "React Navigation",
        "Firebase",
        "MMKV",
        "i18n",
      ],

      links: [
        {
          type: "GitHub",
          href: "https://github.com/wadekar9/rn-awesome-boilerplate",
        },
      ],

      image: "./rn-template.png",
      video: "",
    },
  ],

  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/wadekar9",
    },

    LinkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nayan-wadekar-855253197/",
    },

    X: {
      name: "X",
      url: "",
    },

    Email: {
      name: "Email",
      url: "mailto:npwadekar7@gmail.com",
    },
  },

  contact: {
    email: "npwadekar7@gmail.com",
  },
};
