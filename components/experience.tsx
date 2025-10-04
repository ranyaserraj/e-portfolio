const experiences = [
  {
    date: "Juin 2025 - Août 2025",
    title: "Développeur Full Stack",
    company: "GROUPE OCP - Jorf Lasfar, El Jadida",
    description:
      "Développement d'un système de gestion des accès et des utilisateurs avec architecture microservices, JWT/RBAC, conteneurisation Docker et automatisation via Jenkins.",
    tags: ["Spring Boot", "PostgreSQL", "Next.js", "Docker", "Jenkins"],
  },
  {
    date: "Juillet 2024",
    title: "Développeur Web",
    company: "HÔPITAL AL GHASSANI - Fès",
    description:
      "Création d'une application web de gestion hospitalière incluant patients, rendez-vous, rapports médicaux, facturation et téléconsultations.",
    tags: ["Laravel", "MySQL", "Bootstrap"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Expérience Professionnelle</h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-accent/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-background" />

              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-sm font-semibold text-accent mb-2">{exp.date}</div>
                <h3 className="text-2xl font-bold mb-1 text-foreground">{exp.title}</h3>
                <p className="text-muted-foreground mb-4">{exp.company}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
