import { Users, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Activities() {
  return (
    <section id="activities" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Users className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Activités Extra-Scolaires</h2>
        </div>

        <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 bg-gradient-to-br from-background to-muted/30">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                <Sparkles className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-balance">Responsable de la cellule Events</h3>
                <p className="text-lg text-muted-foreground mb-2">Club IEEE ENSIAS Student Branch</p>
                <p className="text-muted-foreground leading-relaxed">
                  Organisation et coordination d'événements techniques et académiques pour la communauté étudiante,
                  développement des compétences en leadership et gestion d'équipe.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
