import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Certifications } from "@/components/certifications"
import { Activities } from "@/components/activities"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Certifications />
      <Activities />
      <Contact />
      <footer className="bg-background border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>© 2025 Ranya Serraj Andaloussi. Tous droits réservés.</p>
      </footer>
    </main>
  )
}
