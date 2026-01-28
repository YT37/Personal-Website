import { IconType } from "react-icons";
import {
  FaGithub,
  FaGlobe,
  FaGooglePlay,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export const RESUME_LINK =
  "https://docs.google.com/document/d/14EJl7XN1tZX9kQmJigWpzvHtPf1q0JLRVaqaStdOgyQ/edit?usp=drive_link";
export const EMAIL = "contact@yugthapar.com";

export interface Social {
  name: string;
  icon: IconType;
  link: string;
}

export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/YT37",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://linkedin.com/in/yt37",
  },
  {
    name: "X",
    icon: FaXTwitter,
    link: "https://x.com/yugt37",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://instagram.com/yugt37",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    link: "https://youtube.com/@yugthapar37",
  },
];

export const ABOUT_ME = `I am a Computer Science student at Arizona State University (4.0 GPA) with a deep focus on **Artificial Intelligence**, **Embedded Hardware**, and **Web & Mobile Development**. My passion lies in the lab—fusing silicon with neural networks to create autonomous machines and responsive digital ecosystems.

My background spans **Full-Stack Engineering**, having **co-founded** Solvrz Inc. to deploy scalable fintech and web solutions. However, my primary work involves **Hardware-Software Convergence**. From building computer vision pipelines for smart wardrobes to programming ESP32 microcontrollers for medical IoT, I develop systems that sense, think, and act.

I don't just write code; I build **intelligent interfaces** between the digital and physical realms.`;

export const SKILLS: string[] = [
  "Python (AI/ML)",
  "C++ (Embedded)",
  "Flutter / Dart (Mobile)",
  "React / Next.js (Web)",
  "TensorFlow / PyTorch",
  "OpenCV / Computer Vision",
  "Arduino / ESP32",
  "IoT & Embedded Systems",
  "Node.js / Backend",
  "Google Cloud (GCP)",
  "Firebase",
  "Docker / CI/CD",
  "Git / GitHub",
];

export interface ProjectLink {
  icon: IconType;
  name: string;
  link: string;
}

export interface Project {
  title: string;
  image: string;
  description: string;
  techStack: string[];
  links: ProjectLink[];
}

export const PROJECTS: Project[] = [
  {
    title: "OutDrobe",
    image: "/assets/projects/OutDrobe.png",
    description: `An AI-powered personal stylist and wardrobe assistant designed to revolutionize how we interact with our clothing. OutDrobe leverages advanced computer vision and natural language processing to digitize wardrobes and provide intelligent outfit recommendations.

Key Features:
• **AI Wardrobe Analysis:** Utilizes Google Cloud Vision and BLIP models to automatically categorize clothing items by type, color, and style from a single photo.
• **Autonomous Styling:** Generates outfit combinations based on weather, occasion, and personal style preferences using a custom recommendation engine.
• **Voice Interaction:** Integrated Fish Audio for a seamless, hands-free voice control experience, allowing users to ask for outfits naturally.
• **High Performance:** Achieved a 40% reduction in inference latency through optimized caching strategies and model quantization.`,
    techStack: [
      "PyTorch",
      "Flask",
      "React",
      "Google Cloud Vision",
      "BLIP",
      "Fish Audio",
    ],
    links: [
      {
        icon: FaGithub,
        name: "Source Code",
        link: "https://github.com/orgs/Outdrobe/repositories",
      },
    ],
  },
  {
    title: "PillBuddy",
    image: "/assets/projects/PillBuddy.png",
    description: `An intelligent, IoT-enabled medication dispenser aimed at improving adherence for elderly patients and those with chronic conditions. PillBuddy combines robust hardware with a user-friendly mobile app to ensure timely medication intake.

Key Features:
• **Smart Dispensing:** Precision-engineered mechanism controlled by Arduino and ESP32 to dispense exact dosages at scheduled times.
• **Remote Monitoring:** Real-time synchronization with a cross-platform Flutter app, allowing caregivers to monitor intake and receive missed-dose alerts.
• **Wireless Control:** Full remote control capabilities via RESTful APIs, enabling schedule adjustments from anywhere.
• **Award-Winning Design:** Recognized as the 'Best Hardware Hack' at SunHacks 2024 for its innovative approach to healthcare technology.`,
    techStack: [
      "Arduino",
      "ESP32",
      "Flutter",
      "C++",
      "RESTful APIs",
      "Firebase",
    ],
    links: [
      {
        icon: FaGithub,
        name: "Source Code",
        link: "https://github.com/YT37/PillBuddy",
      },
    ],
  },
  {
    title: "Aler",
    image: "/assets/projects/Aler.png",
    description: `A comprehensive accounting and bookkeeping platform tailored for Small and Medium Businesses (SMBs). Aler simplifies complex financial tasks, allowing business owners to focus on growth rather than paperwork.

Key Features:
• **Digital Ledger:** distinct accounts for customers and suppliers with automated balance calculations.
• **One-Tap Invoicing:** Rapid generation of professional sales memos and purchase entries.
• **Credit Tracking:** 'Udhaari' system to track informal credit and lending with automated reminders.
• **GST Compliance:** Built-in tools to generate GST-ready reports and balance sheets.`,
    techStack: ["Flutter", "Dart", "Python (Django)", "Google Cloud Platform"],
    links: [
      {
        icon: FaGooglePlay,
        name: "App",
        link: "https://play.google.com/store/apps/details?id=com.solvrz.aler",
      },
      {
        icon: FaYoutube,
        name: "Demo Video",
        link: "https://youtube.com/watch?v=zwHCxPXAWMI",
      },
    ],
  },
  {
    title: "iVidya",
    image: "/assets/projects/iVidya.png",
    description: `A next-generation ERP solution designed to modernize educational institutions. iVidya bridges the communication gap between administration, teachers, students, and parents through a unified digital ecosystem.

Key Features:
• **Academic Management:** Automated report card generation, attendance tracking, and examination grading.
• **Financial Suite:** Secure online fee payment gateway with real-time tracking and receipt generation.
• **Library & Inventory:** Digital tracking of library assets and school inventory.
• **Engagement Tools:** Built-in survey modules and notification systems for instant campus-wide communication.

Impact: Successfully deployed in a school with 500+ students, streamlining administrative operations by 60%.`,
    techStack: ["Flutter", "Dart", "Python", "Firebase", "Google Cloud"],
    links: [
      {
        icon: FaGooglePlay,
        name: "App",
        link: "https://play.google.com/store/apps/details?id=com.solvrz.ividya",
      },
      {
        icon: FaYoutube,
        name: "Demo Video",
        link: "https://youtube.com/watch?v=D_c1yOieS_U",
      },
    ],
  },
  {
    title: "Oratorz",
    image: "/assets/projects/Oratorz.png",
    description: `A specialized event management platform for Model United Nations (MUN) conferences. Oratorz digitizes the complex procedural workflows of diplomatic simulations, making them more efficient and accessible.

Key Features:
• **Live Session Management:** Real-time speaker lists, timer integration, and queue management.
• **Digital Voting:** Secure, instant voting system for motions and resolutions with automatic tallying.
• **Caucus Tools:** Dedicated modules for managing moderated and unmoderated caucuses.
• **Secretariat Dashboard:** Comprehensive admin panel for conference organizers to oversee multiple committees.`,
    techStack: ["Flutter", "Dart", "Firebase", "Google Cloud"],
    links: [
      {
        icon: FaGlobe,
        name: "Website",
        link: "https://oratorz.yugthapar.com",
      },
      {
        icon: FaYoutube,
        name: "Demo Video",
        link: "https://youtube.com/watch?v=edAsE-yxWsI",
      },
    ],
  },
  {
    title: "EnCourage",
    image: "/assets/projects/EnCourage.png",
    description: `An assistive technology application designed to bridge the communication gap for the visually and hearing impaired. EnCourage translates spoken and written language into accessible formats.

Key Features:
• **Multi-Modal Translation:** Converts English text and speech into Braille patterns and British Sign Language (BSL) visuals.
• **Accessibility First:** High-contrast interface with voice-over support for maximum usability.
• **Educational Tool:** Serves as a learning aid for those studying Braille or Sign Language.`,
    techStack: ["Flutter", "Dart", "Python (NLP)"],
    links: [
      {
        icon: FaGooglePlay,
        name: "App",
        link: "https://play.google.com/store/apps/details?id=com.yugthapar.encourage",
      },
      {
        icon: FaYoutube,
        name: "Demo Video",
        link: "https://www.youtube.com/watch?v=d7Abm1MDV80",
      },
      {
        icon: FaGithub,
        name: "Source Code",
        link: "https://github.com/YT37/EnCourage",
      },
    ],
  },
  {
    title: "WPD",
    image: "/assets/projects/WPD.png",
    description: `An industrial IoT solution for automated water quality analysis and segregation. WPD uses machine learning to classify water samples for appropriate reuse, promoting sustainable water management.

Key Features:
• **Automated Testing:** Novel mechanism for pH injection and colorimetric analysis using optical sensors.
• **Multi-Sensor Fusion:** Integrates temperature, turbidity, and electrical conductivity sensors for comprehensive quality profiling.
• **ML Classification:** Uses a K-Nearest Neighbors (KNN) algorithm to categorize water for drinking, agriculture, or cleaning purposes.`,
    techStack: ["Python", "TensorFlow", "C++", "Raspberry Pi"],
    links: [
      {
        icon: FaGithub,
        name: "Source Code",
        link: "https://github.com/Solvrz/WPD",
      },
    ],
  },
  {
    title: "ROTO",
    image: "/assets/projects/ROTO.png",
    description: `A privacy-focused, open-source smart home automation platform. ROTO offers a low-cost alternative to commercial systems, prioritizing local control and data privacy.

Key Features:
• **Local-First Architecture:** Operates entirely on the local network, ensuring zero latency and complete data privacy.
• **Retrofit Design:** Compact modules designed to fit behind existing switchboards without structural changes.
• **Cost-Effective:** Sub-$70 system cost for full-home automation.`,
    techStack: ["ESPHome", "C++", "KiCAD (PCB Design)"],
    links: [
      {
        icon: FaGithub,
        name: "Source Code",
        link: "https://github.com/YT37/ROTO",
      },
    ],
  },
  {
    title: "EComm",
    image: "/assets/projects/EComm.png",
    description: `A white-label e-commerce solution enabling businesses to launch their own branded mobile marketplaces. Features a dual-app architecture for customers and administrators.

Key Features:
• **Dynamic Storefront:** Fully customizable UI that adapts to the brand's identity.
• **Admin Command Center:** Powerful dashboard for inventory management, order tracking, and sales analytics.
• **Marketing Tools:** Built-in support for flash sales, featured products, and push notifications.`,
    techStack: ["Flutter", "Dart", "Firebase"],
    links: [
      {
        icon: FaGooglePlay,
        name: "User App",
        link: "https://play.google.com/store/apps/details?id=com.solvrz.ecomm",
      },
      {
        icon: FaYoutube,
        name: "Demo Video (User)",
        link: "https://www.youtube.com/watch?v=TfQ_dUHAj_8",
      },
      {
        icon: FaGooglePlay,
        name: "Admin App",
        link: "https://play.google.com/store/apps/details?id=com.solvrz.ecomm_admin",
      },
      {
        icon: FaYoutube,
        name: "Demo Video (Admin)",
        link: "https://www.youtube.com/watch?v=AbWi30Y1FIo",
      },
    ],
  },
  {
    title: "FlashChat",
    image: "/assets/projects/FlashChat.png",
    description: `A secure, real-time messaging application designed for instant global communication.

Key Features:
• **End-to-End Encryption:** Ensures user privacy and data security.
• **Real-Time Sync:** Instant message delivery and read receipts using WebSocket connections.
• **Scalable Architecture:** Built to handle high concurrency and multiple active chat rooms.`,
    techStack: ["Flutter", "Dart", "Firebase"],
    links: [
      {
        icon: FaGlobe,
        name: "Website",
        link: "https://flashchat.yugthapar.com",
      },
      {
        icon: FaYoutube,
        name: "Demo Video",
        link: "https://youtube.com/watch?v=fXSYyulK7tU",
      },
      {
        icon: FaGithub,
        name: "Source Code",
        link: "https://github.com/YT37/FlashChat",
      },
    ],
  },
];

export const WORK = [
  {
    title: "ScanTAPS - EPICS@ASU",
    description: `Leading the development of a campus-wide digital lost & found system for Arizona State University, designed to serve over **70,000 students**.

Role: Team Lead

Key Contributions:
• Architecting a scalable solution using **Flask**, **Firebase**, and **React** to handle high-volume data and concurrent user access.
• Collaborating directly with **ASU ID Services** and Lost & Found departments to ensure seamless integration with existing campus infrastructure.
• Managing the full **SDLC**, from requirement gathering with university stakeholders to sprint planning and code reviews for the technical team.

Period: Aug 2025 – Present`,
    link: "https://scantaps.com",
  },
  {
    title: "WoofCare Solutions",
    description: `Spearheaded the technical strategy for a social impact startup focused on stray animal welfare in India.

Role: Chief Technical Officer (CTO)

Key Contributions:
• Engineered a **real-time geolocation database** capable of handling **100+ concurrent requests** to track stray animal sightings.
• Designed and deployed an alert system that notifies volunteers of activity within a **1km radius**, significantly improving response times.
• Led prototype testing across **50+ NGOs**, gathering critical user feedback to refine the product for mass adoption.

Period: Aug 2024 – Present`,
    link: "https://www.woofcare-solutions.org/",
  },
  {
    title: "Solvrz Inc.",
    description: `Co-founded a software development startup delivering bespoke web and mobile solutions. Grew the company from a concept to a revenue-generating entity with a diverse client portfolio.

Role: Co-Founder & Lead Developer

Key Contributions:
• Led a team of **8 developers**, overseeing client engagement, architectural design, and CI/CD deployment pipelines.
• Successfully launched **5+ major products**, including 'Aler' (Fintech) and 'iVidya' (EdTech), which are currently in use by **hundreds of users**.
• Gained deep expertise in **product-market fit**, **agile development**, and **full-stack engineering**.

Period: Aug 2020 – Dec 2023`,
    link: "https://solvrzinc.yugthapar.com",
  },
  {
    title: "Desinno (EU ERASMUS+)",
    description: `Contributed to a multi-national innovation initiative aimed at building design capacity in India, partnered with **Brunel University (UK)**, **Politecnico di Milano (Italy)**, and others.

Role: Lead Developer (Capstone Project)

Key Contributions:
• Developed 'SunDial', a sustainable, low-cost solution for under-resourced communities, focusing on **human-centered design principles**.
• Collaborated with cross-functional teams from **7+ global institutions** to iterate on prototypes and design frameworks.
• Presented project outcomes to an international panel of **50+ researchers** and stakeholders.

Period: Aug 2022 – Dec 2022`,
    link: "http://www.desinno.org/",
  },
  {
    title: "Atal Tinkering Lab",
    description: `Served as a student ambassador for the Government of India's flagship STEM promotion initiative.

Role: ATL Ambassador

Key Contributions:
• Promoted STEM awareness among **500+ students** through hands-on workshops, robotics competitions, and design thinking sessions.
• Managed lab resources and improved operational efficiency by **30%** through better inventory practices.
• Mentored junior students in **electronics and coding**, fostering a culture of innovation within the school.

Period: Apr 2021 – Mar 2023`,
    link: "https://aim.gov.in/atl.php",
  },
];

export interface Award {
  title: string;
  year: string;
  image: string;
  description: string;
  link?: string;
}

export const AWARDS: Award[] = [
  {
    title: "Dean’s List - ASU",
    year: "2024 & 2025",
    image: "/assets/awards/ASU.png",
    description:
      "Awarded for outstanding academic achievement at Arizona State University, maintaining a GPA of 3.5+.",
    link: "https://drive.google.com/file/d/1sFGG6sredgFf2od-cuOFfLapTtGCm9V1/view?usp=sharing",
  },
  {
    title: "Best Hardware Hack - SunHacks",
    year: "2024",
    image: "/assets/awards/SunHacks.png",
    description:
      "Secured the top prize in the Hardware category for 'PillBuddy', demonstrating excellence in IoT integration, circuit design, and practical application of embedded systems.",
    link: "https://devpost.com/software/pillbuddy",
  },

  {
    title: "Subject Topper - Artificial Intelligence",
    year: "2023",
    image: "/assets/awards/AI.png",
    description:
      "Achieved the highest score in the Artificial Intelligence subject during the CBSE Class 12th Board Examinations, reflecting a strong theoretical foundation.",
    link: "https://drive.google.com/file/d/1fHUzsTIoab3-kT9xBFEUt2C2iZSbMrsj/view?usp=sharing",
  },
  {
    title: "Desinno Capstone Excellence",
    year: "2022",
    image: "/assets/awards/Desinno.png",
    description:
      "Recognized for the successful completion and impact of the 'SunDial' project under the EU ERASMUS+ Desinno program, in collaboration with leading European universities.",
    link: "https://drive.google.com/file/d/1YskGeXZufP_oVvRjOoVcw5I0q4nmd6wu/view?usp=sharing",
  },
  {
    title: "National Semi-Finalist - Indian Future Tycoon",
    year: "2019",
    image: "/assets/awards/IFT.png",
    description:
      "Selected as a National Semi-Finalist (Top 20) out of 2000+ teams for presenting a viable startup prototype with a comprehensive business model.",
    link: "https://drive.google.com/file/d/1jRRAkDcJDwm4jQ_198D8Q7t17lKtD5V_/view?usp=sharing",
  },
  {
    title: "Winner - ATL Tinkering Fest",
    year: "2018 & 2019",
    image: "/assets/awards/ATL.png",
    description:
      "Secured 1st Place for two consecutive years in STEM innovation competitions, outperforming 45+ teams with projects focused on automation and sustainability.",
    link: "https://drive.google.com/file/d/19dOjnMtXJwOzCZI_IfUHBuR4zAaUrYz5/view?usp=sharing",
  },
  {
    title: "Best Design - ROBO-ZEST (IIT Guwahati)",
    year: "2018",
    image: "/assets/awards/RoboZest.png",
    description:
      "Honored for exceptional engineering design and innovation in a national-level robotics competition hosted at the Indian Institute of Technology (IIT) Guwahati.",
    link: "https://drive.google.com/file/d/1FTjjA6A4ZSaCcXZuatmFhPVtrqWG61Z4/view?usp=sharing",
  },
];
