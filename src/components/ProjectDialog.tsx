import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ProjectDialogProps {
  title: string;
  description: string;
  tech: string;
  fullDescription: string;
  features: string[];
  github?: string;
  demo?: string;
  children: React.ReactNode;
}

export const ProjectDialog = ({
  title,
  description,
  tech,
  fullDescription,
  features,
  github,
  demo,
  children,
}: ProjectDialogProps) => {
  const techStack = tech.split(" • ").map((t) => t.trim());

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">
            {title}
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          {/* Tech Stack */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-foreground">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Full Description */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-foreground">
              About the Project
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {fullDescription}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-foreground">
              Key Features
            </h3>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-4">
            {github && (
              <Button asChild variant="outline" size="sm">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} on GitHub`}
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            )}
            {demo && (
              <Button asChild size="sm">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} demo`}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
