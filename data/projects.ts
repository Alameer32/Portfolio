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
  {
    id: "wisedose",
    title: "WiseDose - Medication Reminder App",
    description:
      "A comprehensive mobile application that helps users manage their daily medication schedules with secure authentication and health data encryption. Built with focus on user privacy and healthcare compliance.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Flutter", "Firebase", "Dart", "Authentication", "Encryption"],
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
    githubUrl: "https://github.com/Alameer32/wisedose", // Add your actual URLs
    liveUrl: "https://wisedose-demo.com",
    isUniversity: true,
  },
  {
    id: "realtime-messaging",
    title: "Real-time Messaging Application",
    description:
      "A modern messaging platform with end-to-end encryption, real-time message delivery, and intuitive user interface design. Supports multimedia messaging and group conversations.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Flutter", "Firebase", "Real-time Database", "Push Notifications", "WebSocket"],
    features: [
      "End-to-end encryption for secure messaging",
      "Real-time message delivery with read receipts",
      "Push notifications system with custom sounds",
      "Cross-platform compatibility (iOS & Android)",
      "Group chat functionality with admin controls",
    ],
    year: "2025",
    type: "Mobile Application",
    category: "Communication",
    githubUrl: "https://github.com/Alameer32/realtime-chat",
    isUniversity: true,
  },
  {
    id: "fullstack-web",
    title: "Full-Stack Web Application",
    description:
      "A complete web application with modern frontend, robust backend API, and secure database integration. Features role-based access control and comprehensive admin dashboard.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "Express.js", "MongoDB", "RESTful API", "JWT", "Tailwind CSS"],
    features: [
      "Responsive React-based frontend with modern UI",
      "RESTful API with Express.js and middleware",
      "MongoDB database with optimized queries",
      "JWT-based authentication and authorization",
      "Admin dashboard with analytics and user management",
    ],
    year: "2024",
    type: "Web Application",
    category: "Full-Stack",
    githubUrl: "https://github.com/Alameer32/fullstack-web",
    liveUrl: "https://fullstack-demo.vercel.app",
    isUniversity: true,
  },
  {
    id: "dynamic-website",
    title: "Dynamic Website",
    description:
      "A responsive dynamic website with server-side functionality, form handling, and optimized performance across all devices. Built with vanilla technologies for maximum compatibility.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["JavaScript", "PHP", "HTML5", "CSS3", "MySQL", "AJAX"],
    features: [
      "Server-side PHP functionality with session management",
      "Responsive design implementation with CSS Grid",
      "Form validation and secure data processing",
      "Cross-browser compatibility testing",
      "SEO optimization and performance tuning",
    ],
    year: "2024",
    type: "Website",
    category: "Frontend",
    githubUrl: "https://github.com/Alameer32/dynamic-website",
    liveUrl: "https://dynamic-site-demo.com",
    isUniversity: true,
  },
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
    liveUrl: "https://salman-tech-blog.vercel.app",
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
