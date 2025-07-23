/**
 * Projects data structure
 * To add a new project, simply add a new object to this array
 * All fields are required for consistent display
 */

export interface Project {
  id: string // Unique identifier for the project
  title: string // Project name
  description: string // Brief description (2-3 sentences)
  image: string // Image URL or placeholder
  technologies: string[] // Array of technologies used
  features: string[] // Key features/achievements (3-5 items)
  year: string // Year completed
  type: string // Project type (Mobile App, Web App, etc.)
  category: string // Category for filtering
  githubUrl?: string // Optional GitHub repository URL
  liveUrl?: string // Optional live demo URL
  isUniversity?: boolean // Whether it's a university project
}

export const projects: Project[] = [
  
  // {
  //   id: "fullstack-web",
  //   title: "Full-Stack Web Application",
  //   description:
  //     "A complete web application with modern frontend, robust backend API, and secure database integration. Features role-based access control and comprehensive admin dashboard.",
  //   image: "/placeholder.svg?height=300&width=500",
  //   technologies: ["Next.js", "Express.js", "MongoDB", "RESTful API", "JWT", "Tailwind CSS"],
  //   features: [
  //     "Responsive React-based frontend with modern UI",
  //     "RESTful API with Express.js and middleware",
  //     "MongoDB database with optimized queries",
  //     "JWT-based authentication and authorization",
  //     "Admin dashboard with analytics and user management",
  //   ],
  //   year: "2024",
  //   type: "Web Application",
  //   category: "Full-Stack",
  //   githubUrl: "https://github.com/Alameer32/fullstack-web",
  //   liveUrl: "https://fullstack-demo.vercel.app",
  //   isUniversity: true,
  // },
  // {
  //   id: "dynamic-website",
  //   title: "Dynamic Website",
  //   description:
  //     "A responsive dynamic website with server-side functionality, form handling, and optimized performance across all devices. Built with vanilla technologies for maximum compatibility.",
  //   image: "/placeholder.svg?height=300&width=500",
  //   technologies: ["JavaScript", "PHP", "HTML5", "CSS3", "MySQL", "AJAX"],
  //   features: [
  //     "Server-side PHP functionality with session management",
  //     "Responsive design implementation with CSS Grid",
  //     "Form validation and secure data processing",
  //     "Cross-browser compatibility testing",
  //     "SEO optimization and performance tuning",
  //   ],
  //   year: "2024",
  //   type: "Website",
  //   category: "Frontend",
  //   githubUrl: "https://github.com/Alameer32/dynamic-website",
  //   // liveUrl: "https://dynamic-site-demo.com",
  //   isUniversity: true,
  // },
  // Add more projects here easily by copying the structure above
  // Example of a hobby project:
  /*
  {
    id: "personal-blog",
    title: "Personal Tech Blog",
    description: "A personal blog built with Next.js and MDX for writing about technology and programming experiences.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    features: [
      "Static site generation for optimal performance",
      "MDX support for rich content creation",
      "SEO optimized with meta tags",
      "Dark mode support"
    ],
    year: "2024",
    type: "Website",
    category: "Personal",
    githubUrl: "https://github.com/Alameer32/tech-blog",
    liveUrl: "https://salman-tech-blog.vercel.app",
    isUniversity: false
  }
  */

  {
    id: "EduSync",
    title: "resource-sharing and management platform",
    description: "Sharing and organization of resources, such as Google Drive links, course materials, and task management",
    image: "/EduSync.png?height=300&width=500",
    technologies: ["Next.js", "Express.js", "Tailwind CSS","MongoDB", "Vercel"],
    features: [
      "Admin: Full control over the system — manage users, categories, sessions, shared links, and view dashboard analytics.",
      "Lecturer: Manage their own shared links, personal timetable, and to-do tasks; share resources with students and peers.",
      "Student: View and manage their own links, schedule, and tasks; access links shared by lecturers or others.",
      "Common: All roles can view dashboards, manage their own links, see links shared to them, and handle personal tasks/schedules.",
    ],
    year: "2024",
    type: "Website",
    category: "Full-Stack",
    githubUrl: "https://github.com/Alameer32/EduSync",
    // liveUrl: "https://salman-tech-blog.vercel.app",
    isUniversity: true
  },
  
 
  {
    id: "Cook&Go",
    title: "Food delivery platform",
    description: "Food delivery platform for restaurants and customers",
    image: "/cook&go.png?height=300&width=500",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "Vercel"],
    features: [
      "Admin: Full control over the system — manage users, Orders, and view dashboard analytics.",
      "Customer: View the menu and manage their own orders.",
    ],
    year: "2025",
    type: "Website",
    category: "Full-Stack",
    githubUrl: "https://github.com/Alameer32/Cook-Go",
    liveUrl: "https://cook-go.vercel.app",
    isUniversity: false
  },

  {
    id: "SAGE",
    title: "SAGE – Personal AI Assistant",
    description: "A desktop AI assistant inspired by J.A.R.V.I.S., designed to help with daily tasks, remember user info, and interact naturally.",
    image: "/sage.png",
    technologies: ["Python", "Tkinter", "Ollama (LLM)", "JSON storage", "REST API"],
    features: [
      "Conversational agent: SAGE chats in a natural, friendly tone, like texting a helpful friend.",
      "Memory system: Remembers user facts and context dynamically using JSON storage.",
      "To-do list tool: Lets users add, view, and manage daily tasks.",
      "Extensible: Designed to later integrate calendar management, code helper tools, and voice interface."
    ],
    year: "2025",
    type: "Desktop App",
    category: "AI / Assistant",
    githubUrl: "https://github.com/Alameer32/ai-agent", 
    liveUrl: "", 
    isUniversity: false
  },

  {
    id: "Asteroids",
    title: "Asteroids – 2D C++ Game",
    description: "A simple 2D space shooter where players control a triangular spaceship to destroy asteroids and avoid collisions.",
    image: "/asteroids.png?height=300&width=500", 
    technologies: ["C++"],
    features: [
      "Player controls a triangle-shaped ship that can move and shoot projectiles at asteroids.",
      "Collision detection: the ship is destroyed if it touches an asteroid.",
      "Demonstrates key C++ concepts: inheritance, aggregation, composition, and association.",
      "Smooth gameplay loop suitable for beginner-level game programming."
    ],
    year: "2023",
    type: "Desktop App / Game",
    category: "Game Development",
    githubUrl: "https://github.com/Alameer32/Asteroids", 
    liveUrl: "", // N/A for desktop game
    isUniversity: true
  },
  {
    id: "wisedose",
    title: "WiseDose - Medication Reminder App",
    description:
      "A comprehensive mobile application that helps users manage their daily medication schedules with secure authentication and health data encryption. Built with focus on user privacy and healthcare compliance.",
    image: "/WiseDose.jpg?height=200&width=300",
    technologies: ["Flutter", "Firebase", "Dart", "Authentication"],
    features: [
      "Secure user authentication and data encryption",
      "Real-time medication reminders with custom schedules",
      "Health metrics tracking and analytics",
      "Firebase integration for cross-device data sync",
      "HIPAA-compliant data handling practices",
    ],
    year: "2025",
    type: "Mobile Application",
    category: "Healthcare",
    githubUrl: "https://github.com/Alameer32/wisedose",
    // liveUrl: "https://wisedose-demo.com",
    isUniversity: true,
  },

  {
    id: "realtime-messaging",
    title: "Real-time Messaging Application",
    description:
      "A modern messaging platform with end-to-end encryption, real-time message delivery, and intuitive user interface design. Supports multimedia messaging and group conversations.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Flutter", "Firebase", "Real-time Database"],
    features: [
      "End-to-end encryption for secure messaging",
      "Real-time message delivery with read receipts",
      "Cross-platform compatibility (iOS & Android)",
      "Group chat functionality with admin controls",
    ],
    year: "2025",
    type: "Mobile Application",
    category: "Communication",
    githubUrl: "https://github.com/Alameer32/flutter_chat_app",
    isUniversity: false,
  },
  {
    id: "coursemark",
    title: "Course Mark Management Web App",
    description:
      "A full-stack web application designed to streamline the management and monitoring of student performance. Built for academic institutions with role-based access control for Lecturers, Students, Advisors, and Admins.",
    image: "/coursemark.png?height=200&width=300",
    technologies: ["Vue.js", "PHP Slim", "MySQL", "Chart.js", "REST API"],
    features: [
      "Role-based access control for 4 user types (Lecturer, Student, Advisor, Admin)",
      "Secure login and authentication for all roles",
      "Continuous assessment and final exam marks entry with auto-calculation (70/30 split)",
      "Real-time performance analytics with charts and averages",
      "What-If simulator and anonymous peer comparison tools for students",
      "Advisor workspace for monitoring at-risk students and logging consultations",
      "Bulk CSV upload/download, full reporting features, and mark update notifications",
      "RESTful API (JSON) with client-side (Vue.js) and server-side (PHP Slim) validation"
    ],
    year: "2025",
    type: "Web Application",
    category: "Academic Management",
    githubUrl: "https://github.com/Alameer32/students_mark",
    isUniversity: true
  }

]

/**
 * Helper function to get projects by category
 * Useful for filtering functionality
 */
export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter((project) => project.category.toLowerCase() === category.toLowerCase())
}

/**
 * Helper function to get university vs personal projects
 */
export const getProjectsByType = (isUniversity: boolean): Project[] => {
  return projects.filter((project) => project.isUniversity === isUniversity)
}

/**
 * Get all unique categories for filtering
 */
export const getProjectCategories = (): string[] => {
  return [...new Set(projects.map((project) => project.category))]
}
