"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-foreground">
          Ranya.dev
        </Link>
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li>
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              À propos
            </Link>
          </li>
          <li>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Compétences
            </Link>
          </li>
          <li>
            <Link href="#education" className="text-muted-foreground hover:text-foreground transition-colors">
              Éducation
            </Link>
          </li>
          <li>
            <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Expérience
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projets
            </Link>
          </li>
          <li>
            <Link href="#certifications" className="text-muted-foreground hover:text-foreground transition-colors">
              Certifications
            </Link>
          </li>
          <li>
            <Link href="#activities" className="text-muted-foreground hover:text-foreground transition-colors">
              Activités
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
