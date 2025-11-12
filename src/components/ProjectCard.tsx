import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  index: number;
}

export const ProjectCard = ({ title, description, tech, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 border-border/50">
        <h3 className="font-semibold text-lg mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>
        <div className="text-xs text-primary font-medium">
          Tech: {tech}
        </div>
      </Card>
    </motion.div>
  );
};
