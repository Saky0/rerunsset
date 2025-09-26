import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { SafeImage } from "@/components/atoms/safe-image"

interface PortfolioCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  isPrivateRepo?: boolean
}

export function PortfolioCard({ title, description, image, technologies, liveUrl, githubUrl, isPrivateRepo }: PortfolioCardProps) {
  return (
    <Card className="py-3 gap-1 group justify-between overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-scale-in">
      <div className="aspect-video overflow-hidden bg-muted">
        <SafeImage
          src={image}
          alt={title}
          width={640}
          height={360}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-2 pt-2">
          {liveUrl && (
            <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Visualizar
              </a>
            </Button>
          )}
          {githubUrl && (
            <div className="flex-1 space-y-1">
              <Button 
                size="sm" 
                variant={isPrivateRepo ? "ghost" : "outline"} 
                asChild 
                className={`w-full ${isPrivateRepo ? "text-muted-foreground" : "bg-transparent"}`}
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Código
                </a>
              </Button>
              {isPrivateRepo && (
                <p className="text-xs text-muted-foreground text-center">Repositório privado</p>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
