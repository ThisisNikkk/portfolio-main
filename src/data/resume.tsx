import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Nikhil Siwan",
  initials: "NS",
  url: "https://nikhilsiwan.vercel.app",
  location: "Haryana, IND",
  locationLink: "https://www.google.com/maps/place/hisar",
  description:
    "Software Engineer. Transforming Concepts into Marvellous Reality.",
  summary:
    "Dynamic and results-driven software developer with a Bachelor of Technology in Computer Science, currently pursuing a degree at BRCM College of Engineering and Technology. With hands-on experience as a Software Development Engineer Intern at Bluestock Fintech, I have successfully collaborated within a team to create a fully responsive IPO website, enhancing user engagement by 15% through optimized design and performance improvements. My technical proficiency spans multiple programming languages, including JavaScript, HTML/CSS, C++ and frameworks such as Next.js, React, Express.",
  avatarUrl: "/nik.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express.js",
    "Postgres",
    "JavaScript",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "developer.nikk@gmail.com",
    tel: "+91-8813060916",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ThisisNikkk",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nikhilsiwan/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/thisisnikkkk",
        icon: Icons.x,

        navbar: true,
      },
      Email: {
        name: "Youtube",
        url: "mailto:developer.nikk@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "BlueStock Fintech",
      href: "https://bluestock.in/",
      badges: [],
      location: "Remote",
      title: "Software Developer Intern",
      logoUrl: "/bf.jpg",
      start: "Aug 2024",
      end: "Oct 2024",
      description:
        "Collaborated with a team to develop a fully responsive IPO website using HTML, CSS, JavaScript, and Bootstrap, enhancing user engagement by 15% and web performance by 15%. I also created a REST API that delivers comprehensive IPO data and integrates downloadable RHP and DRHP PDFs, resulting in a 20% increase in user engagement and a 15% improvement in accessibility.",
    },
    {
      company: "Qspiders-Software Testing Training Institute",
      badges: [],
      href: "https://www.qspiders.com/",
      location: "Noida",
      title: "Summer Intern",
      logoUrl: "/qs.webp",
      start: "June 2024",
      end: "Aug 2024",
      description:
        "Served as a Summer Intern, where I developed responsive web applications using HTML, CSS, and JavaScript, enhancing operational efficiency by 20%. I gained valuable experience in ensuring cross-browser compatibility, debugging application issues, and optimizing web applications for maximum speed and scalability, which amplified the online presence by tenfold. Additionally, I achieved a 30% reduction in page load time through front-end optimization and code refactoring, significantly improving the overall user experience.",
    },
    {
      company: "OctaNet",
      href: "https://octanet.in/",
      badges: [],
      location: "Remote",
      title: "Web Developer Intern",
      logoUrl: "/octa.png",
      start: "January 2019",
      end: "April 2019",
      description:
        "Designed and optimized cross-platform user interfaces and client-side applications utilizing HTML, CSS, JavaScript, and React, resulting in a 40% increase in user retention.",
    },
  ],
  education: [
    {
      school: "BRCM College Of Engineering and Technology",
      href: "https://www.brcmcet.edu.in/",
      degree: "Bachelor of Technology in Computer Science",
      logoUrl: "/brcm.jpg",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "CareConnect",
      href: "https://careconnect-io.vercel.app/",
      dates: "Aug 2024 - Oct 2024",
      active: true,
      description:
        "Designed a seamless UI for a healthcare management system using Next.js, Tailwind-CSS, TypeScript and ShadCn UI. The system manages bookings, access permissions, and an admin panel for scheduling or canceling appointments,with SMS notifications support.",
      technologies: [
        "Next.js",
        "Typescript",
        "Appwrite",
        "TailwindCSS",
        "Shadcn UI",
        "Twilio",
      ],
      links: [
        {
          type: "Website",
          href: "https://careconnect-io.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/CareConnect.mp4",
    },
    {
      title: "StudentWallet",
      href: "https://studentwallet.netlify.app/",
      dates: "Jan 2024 - Mar 2024",
      active: true,
      description:
      "Developed an Fee Payment App which provides ultimate solution for seamless college fee payments and hassle-free financial management.",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://studentwallet.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ThisisNikkk/StudentWallet",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/sw.mp4",
    },
    {
      title: "E-learning",
      href: "https://e-leaning-app.netlify.app/",
      dates: "Nov 2023 - Dec 2023",
      active: true,
      description:
        "Designed, developed an online learning platform where advanced your skills.",
      technologies: [
        "React",
        "Typescript",
        "Firebase",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://e-leaning-app.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ThisisNikkk/E-learning",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/elearn.mp4",
    },
    {
      title: "Chef's Kitchen",
      href: "https://chefkithcen.netlify.app/",
      dates: "Sep 2023 - Oct 2023",
      active: true,
      description:
        "Developed a platforms empowers you to explore new cuisines, perfect classic dishes, and build confidence in your cooking.",
      technologies: [
        "Next.js",
        "Typescript",
        "Firebase",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://chefkithcen.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ThisisNikkk/ChefKitchen",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/chef.mp4",
    },
  ],
} as const;
