/**
 * Skills data structure
 * To add new skills or categories, simply modify this file
 * Icons are from Lucide React - you can change them easily
 */

import { Code, Database, Globe, Smartphone, Server, PenToolIcon as Tool } from "lucide-react"

export interface SkillCategory {
  id: string
  title: string
  icon: any // Lucide React icon component
  skills: string[]
  color: "emerald" | "teal" | "cyan" | "purple" | "orange" | "rose"
  description?: string // Optional description for the category
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Languages",
    icon: Code,
    skills: ["C++", "Python", "JavaScript", "PHP", "Dart", "HTML5", "CSS3", "TypeScript"],
    color: "emerald",
    description: "Core programming languages with strong proficiency",
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    icon: Globe,
    skills: ["Next.js", "React", "Express.js", "Flutter", "Tailwind CSS", "Node.js"],
    color: "teal",
    description: "Modern frameworks for efficient development",
  },
  {
    id: "databases",
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "Firebase", "MySQL", "Real-time Databases"],
    color: "cyan",
    description: "Database design and management systems",
  },
  {
    id: "mobile",
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      "Flutter",
      "Cross-platform Development",
      "Firebase Integration",
      "Push Notifications",
      "App Store Deployment",
    ],
    color: "purple",
    description: "Cross-platform mobile application development",
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: Server,
    skills: ["RESTful APIs", "Server-side Development", "Authentication", "Microservices"],
    color: "orange",
    description: "Backend development and API design",
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    icon: Tool,
    skills: ["Git", "VS Code", "Figma", "Chrome DevTools", "Postman", "Vercel"],
    color: "rose",
    description: "Development tools and productivity software",
  },
  // Easy to add new categories:
  /*
  {
    id: "security",
    title: "Cybersecurity",
    icon: Shield,
    skills: ["Network Security", "Penetration Testing", "Secure Coding", "Vulnerability Assessment"],
    color: "emerald",
    description: "Security-focused development practices"
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["Machine Learning", "Natural Language Processing", "TensorFlow", "Data Analysis"],
    color: "teal",
    description: "Artificial intelligence and data science"
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
    color: "cyan",
    description: "Cloud computing and deployment"
  }
  */
]

/**
 * Areas of interest - easily expandable
 * Add new interests by simply adding strings to this array
 */
export const areasOfInterest: string[] = [
  "Artificial Intelligence",
  "Cybersecurity",
  "Data Science",
  "Web Development",
  "Mobile Development",
  "Software Architecture",
  "Cloud Computing",
  "Machine Learning",
  "DevOps",
  "UI/UX Design",
  "Blockchain Technology",
  "Internet of Things (IoT)",
  // Add more interests here easily
]

/**
 * Helper function to get color classes for styling
 */
export const getColorClasses = (color: string) => {
  const colors = {
    emerald: "border-emerald-500 text-emerald-600",
    teal: "border-teal-500 text-teal-600",
    cyan: "border-cyan-500 text-cyan-600",
    purple: "border-purple-500 text-purple-600",
    orange: "border-orange-500 text-orange-600",
    rose: "border-rose-500 text-rose-600",
  }
  return colors[color as keyof typeof colors] || colors.emerald
}

/**
 * Get skills by category ID
 */
export const getSkillsByCategory = (categoryId: string): string[] => {
  const category = skillCategories.find((cat) => cat.id === categoryId)
  return category ? category.skills : []
}
