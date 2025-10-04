import { Code2, Cloud, Brain } from "lucide-react"

const skills = [
  {
    icon: Cloud,
    title: "DevOps",
    items: ["Unix", "Docker, Kubernetes", "Jenkins, GitHub Actions", "Git, Virtualisation"],
  },
  {
    icon: Code2,
    title: "Développement Web & Mobile",
    items: ["Java Spring, PHP Laravel", "React, Android Studio", "Firebase", "REST API, JWT"],
  },
  {
    icon: Brain,
    title: "Bases de données & Big Data",
    items: ["Oracle, PostgreSQL, MySQL", "Cassandra, Neo4j", "Data Warehouse", "Modélisation de données"],
  },
  {
    icon: Brain,
    title: "Data Science",
    items: ["Machine Learning", "Analyse de données", "Visualisation", "Python, TensorFlow"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Compétences Techniques</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <skill.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">{skill.title}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-accent mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
