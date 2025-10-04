import { Award, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Certifications() {
  const certifications = [
    {
      title: "DevOps 101: What is DevOps?",
      issuer: "Simplilearn SkillUp",
      year: "2025",
      date: "juil. 2025",
      id: "8637574",
      icon: "devops",
    },
    {
      title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
      issuer: "IBM",
      year: "2025",
      icon: "container",
    },
    {
      title: "Oracle Certified Foundations – Oracle Data Platform",
      issuer: "Oracle",
      year: "2025",
      icon: "database",
    },
    {
      title: "Oracle Certified Foundations – Cloud Infrastructure Foundations",
      issuer: "Oracle",
      year: "2025",
      icon: "cloud",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI, Stanford University",
      year: "2024",
      icon: "ml",
    },
    {
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      issuer: "DeepLearning.AI, Stanford University",
      year: "2024",
      icon: "ml",
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Award className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Certifications</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-border/50 hover:border-primary/50"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-balance leading-tight">{cert.title}</h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="font-medium">{cert.issuer}</span>
                      <span className="text-primary font-semibold">{cert.year}</span>
                    </div>
                    {cert.id && <p className="text-xs text-muted-foreground mt-1">ID: {cert.id}</p>}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
          >
            <a
              href="https://www.linkedin.com/in/ranya-serraj/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Voir toutes les certifications sur LinkedIn
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
