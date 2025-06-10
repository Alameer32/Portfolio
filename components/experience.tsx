import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Head of Computing",
    organization: "Yemeni Student Academic Group (YSAG)",
    period: "2023 - 2024",
    type: "Leadership",
    description: "Led computing initiatives and academic support programs for Yemeni students at UTM.",
    achievements: [
      "Organized technical workshops and coding sessions",
      "Mentored junior students in programming concepts",
      "Coordinated academic support programs",
      "Facilitated knowledge sharing sessions",
    ],
    icon: Users,
  },
  {
    title: "Country Representative & Director of Performance",
    organization: "Arabic Culture Day (ACD)",
    period: "2024",
    type: "Cultural Leadership",
    description: "Represented Yemen and directed performance activities for the annual Arabic Culture Day event.",
    achievements: [
      "Coordinated cultural performances and activities",
      "Managed event logistics and participant coordination",
      "Promoted cultural exchange and understanding",
      "Successfully executed large-scale cultural event",
    ],
    icon: Award,
  },
]

const certifications = [
  "Introduction to Cybersecurity",
  "Design Thinking for Entrepreneur",
  "Data Analytics for Organization",
  "Professional Communication Skills",
  "Value and Identity",
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Leadership</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Demonstrating leadership skills and community involvement through various organizational roles and
            professional development activities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-emerald-100 rounded-lg">
                        <IconComponent className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">{exp.title}</CardTitle>
                        <p className="text-emerald-600 font-medium">{exp.organization}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                    <p className="text-gray-600">{exp.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="bg-gradient-to-br from-emerald-50 to-teal-50">
          <CardHeader>
            <CardTitle className="text-center text-gray-900">Professional Certifications & Training</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border">
                  <p className="text-sm font-medium text-gray-700 text-center">{cert}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
