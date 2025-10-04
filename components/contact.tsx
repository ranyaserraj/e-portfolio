import { Mail, Phone, Linkedin, Github } from "lucide-react"
import Link from "next/link"

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: "ranyaserraj18@gmail.com",
    href: "mailto:ranyaserraj18@gmail.com",
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "+212 619 787 139",
    href: "tel:+212619787139",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "ranya-serraj",
    href: "https://www.linkedin.com/in/ranya-serraj/",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "ranyaserraj",
    href: "https://github.com/ranyaserraj",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Contact</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact) => (
            <Link
              key={contact.title}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <contact.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">{contact.title}</h3>
              <p className="text-sm text-accent font-medium break-words">{contact.value}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
