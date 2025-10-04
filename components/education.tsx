"use client"

import { GraduationCap, BookOpen } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">Éducation</h2>
          <p className="text-muted-foreground text-lg">Mon parcours académique</p>
        </div>

        <div className="space-y-8 max-w-3xl mx-auto">
          {/* ENSIAS */}
          <div className="group relative bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold">Diplôme d'Ingénieur d'État</h3>
                  <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                    2023 – 2026
                  </span>
                </div>

                <p className="text-primary font-semibold mb-2">ENSIAS</p>
                <p className="text-muted-foreground">Ingénierie en Data Science and IOT - IDSIT</p>
              </div>
            </div>
          </div>

          {/* Classes Préparatoires */}
          <div className="group relative bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="w-7 h-7 text-primary" />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold">Classes Préparatoires aux Grandes Écoles</h3>
                  <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                    2021 – 2023
                  </span>
                </div>

                <p className="text-primary font-semibold mb-2">Fès</p>
                <p className="text-muted-foreground">Physique et Sciences Industrielles - PSI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
