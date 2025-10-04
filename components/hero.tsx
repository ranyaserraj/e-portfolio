import Link from "next/link"
import { ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 pt-24 pb-16 bg-background">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Ranya Serraj Andaloussi
              </h1>
              <p className="text-2xl text-muted-foreground font-medium">Software Engineer | Data Science</p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Étudiante ingénieure à l'ENSIAS, spécialisée en Software Engineering. Passionnée par le développement
              full-stack, DevOps et le Machine Learning. À la recherche d'un stage PFE à partir de février 2026.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="#contact">
                  Me contacter
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
                <Link href="https://github.com/ranyaserraj" target="_blank">
                  <Github className="w-4 h-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl" />
              <img
                src="/ranya_.jpg"
                alt="Ranya Serraj"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl border border-border shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
