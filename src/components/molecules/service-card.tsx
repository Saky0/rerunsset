"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, X, Globe, Palette, BarChart3, Code2 } from "lucide-react"

type IconKey = "web" | "ux" | "data" | "code"

const iconMap: Record<IconKey, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  web: Globe,
  ux: Palette,
  data: BarChart3,
  code: Code2,
}

interface ServiceCardProps {
  iconKey: IconKey
  title: string
  description: string
  features: string[]
  technologies: string[]
}

export function ServiceCard({ iconKey, title, description, features, technologies }: ServiceCardProps) {
  const Icon = iconMap[iconKey] ?? Code2
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <Card
        className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-scale-in"
        onClick={() => setIsExpanded(true)}
      >
        <CardContent className="p-6 text-center space-y-4">
          <div className="w-16 h-16 mx-auto gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-black" />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
          <div className="flex items-center justify-center text-primary group-hover:gap-2 transition-all duration-300">
            <span className="text-sm font-medium">Saiba mais</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </CardContent>
      </Card>

      {/* Expanded Modal */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <p className="text-muted-foreground">{description}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsExpanded(false)} className="hover:bg-muted">
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Serviços oferecidos:</h4>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Technologias Usadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-muted rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  size="lg"
                  className="cursor-pointer w-full gradient-primary text-white hover:opacity-90 transition-opacity"
                  onClick={() => setIsExpanded(false)}
                >
                  Começar agora
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
