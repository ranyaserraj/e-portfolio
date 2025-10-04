import { ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    emoji: "🌱",
    title: "Green DevOps",
    date: "2025",
    description: "Réduction de la consommation énergétique des pipelines CI/CD avec monitoring en temps réel.",
    tags: ["GitHub Actions", "Docker", "Prometheus", "Grafana"],
    link: "https://github.com/ranyaserraj/devOps_projet",
  },
  {
    emoji: "🌾",
    title: "Gestion Intelligente des Serres Agricoles",
    date: "Février 2025",
    description: "Application mobile IoT avec Machine Learning pour optimiser les paramètres climatiques des serres.",
    tags: ["Android Studio", "Arduino", "Firebase", "Python", "Flask"],
    link: "https://github.com/ranyaserraj/serre_agricole_project",
  },
  {
    emoji: "🔒",
    title: "Détection de Menaces Internes",
    date: "Mars 2025",
    description: "Système de détection intelligent basé sur Machine Learning pour identifier les menaces dans les SI.",
    tags: ["Random Forest", "SVM", "XGBoost", "Cassandra", "Neo4j"],
    link: "https://github.com/ranyaserraj",
  },
  {
    emoji: "🏢",
    title: "Plateforme Support Investisseurs",
    date: "Octobre 2024 - Février 2025",
    description: "Plateforme d'évaluation de projets urbains et immobiliers avec analyse par experts.",
    tags: ["Java EE", "MySQL", "UML"],
    link: "https://github.com/ranyaserraj/UrbanInvest-Investment-Platform",
  },
  {
    emoji: "🏠",
    title: "Application de Location Immobilière",
    date: "Janvier 2025 - Février 2025",
    description: "Application mobile Android pour la gestion et la location de biens immobiliers.",
    tags: ["Android Studio", "Firebase"],
  },
  {
    emoji: "🎮",
    title: "Jeu Éducatif pour Enfants Dyslexiques",
    date: "Mars 2025 - Avril 2025",
    description: "Jeu en 2D favorisant l'apprentissage des lettres chez les enfants dyslexiques.",
    tags: ["Unity 3D", "C#"],
  },
  {
    emoji: "🎬",
    title: "Visualisation de Données IMDb",
    date: "Mars 2025 - Avril 2025",
    description: "Analyse des tendances de films (succès, genres, notes) via la plateforme IMDb.",
    tags: ["Tableau", "Data Visualization"],
  },
  {
    emoji: "🏘️",
    title: "Gestion de Biens Immobiliers",
    date: "Février 2024 - Mai 2024",
    description: "Plateforme web de publication, recherche et gestion de biens immobiliers.",
    tags: ["Laravel", "React.js"],
    link: "https://github.com/ranyaserraj/BookingApp",
  },
  {
    emoji: "⚕️",
    title: "Gestion Hospitalière",
    date: "Juillet 2024",
    description: "Application web de gestion complète pour services hospitaliers.",
    tags: ["Laravel", "Bootstrap", "MySQL"],
    link: "https://github.com/ranyaserraj/hospital_services",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Projets Académiques</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="h-32 bg-accent/10 flex items-center justify-center text-5xl">{project.emoji}</div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-foreground text-balance">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.date}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
                  >
                    Voir sur GitHub
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
