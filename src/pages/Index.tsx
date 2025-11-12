import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectDialog } from "@/components/ProjectDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";
import profileImage from "@/assets/profile.jpg";

const Index = () => {
  const projects = [
    {
      title: "CareerMate — Intelligent Resume Analysis Bot",
      description: "UiPath RPA that analyzes resumes vs job descriptions, computes ATS scores and generates interview questions.",
      tech: "UiPath • Python • AI",
      fullDescription:
        "Developed an RPA-based automation project using UiPath to analyze resumes against job descriptions and calculate ATS scores for students and job seekers. Integrated AI-powered evaluation workflows to provide detailed insights, skill gap analysis, and generate expected interview questions for personalized preparation.",
      features: [
        "Automated resume parsing and analysis using UiPath Studio",
        "ATS (Applicant Tracking System) score calculation",
        "AI-powered skill gap analysis comparing resume to job descriptions",
        "Automatic generation of relevant interview questions",
        "Detailed insights for personalized job preparation",
        "Streamlined workflow for students and job seekers",
      ],
      github: "https://github.com/SriAnjhanee/CareerMate-Automation-Project",
      demo: undefined,
    },
    {
      title: "GrabNGo — WhatsApp Restaurant Automation Bot",
      description: "n8n + Gemini AI bot automating menu display, order handling and confirmations via WhatsApp Business API.",
      tech: "n8n • Gemini AI • WhatsApp API • Google Sheets",
      fullDescription:
        "Built an AI-powered WhatsApp automation bot using n8n, Gemini AI, and Google Sheets, automating menu display, order management, and confirmations. Integrated WhatsApp Business API for real-time communication, enabling 24×7 smart order handling without manual effort.",
      features: [
        "Automated menu display via WhatsApp messages",
        "Real-time order management and tracking",
        "AI-powered natural language order processing with Gemini AI",
        "Integration with Google Sheets for order storage",
        "WhatsApp Business API for seamless customer communication",
        "24/7 automated order handling with instant confirmations",
        "No manual intervention required for order processing",
      ],
      github: "https://github.com/SriAnjhanee/GrabNGo-Automation-Project",
      demo: undefined,
    },
  ];

  const skills = [
    "Python",
    "HTML",
    "CSS",
    "UiPath Studio",
    "n8n",
    "Internet of Things",
    "MATLAB",
    "GitHub",
    "VS Code",
    "Java",
    "Kali Linux",
  ];

  const certifications = [
    {
      title: "Certified System Administrator (CSA)",
      issuer: "ServiceNow",
      year: "",
    },
    {
      title: "Certified Application Developer (CAD)",
      issuer: "ServiceNow",
      year: "",
    },
    {
      title: "Oracle Cloud Infrastructure Foundation Associate",
      issuer: "Oracle",
      year: "",
    },
  ];

  const education = [
    {
      degree: "B.Tech (Electrical & Electronics Engineering)",
      institution: "BVC Engineering College",
      location: "Odalarevu, India",
      duration: "2022 – 2026",
      grade: "CGPA: 8.0",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Govt. Junior College",
      location: "Kothapeta, India",
      duration: "2021 – 2022",
      grade: "Percentage: 61.2%",
    },
    {
      degree: "SSC",
      institution: "Zilla Parishad Girls High School",
      location: "Kothapeta, India",
      duration: "2019 – 2020",
      grade: "Percentage: 94%",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for reaching out! I'll get back to you soon.");
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="section-container pt-20 pb-24">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <span className="text-sm uppercase tracking-wide text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                Final-year EEE student • RPA & AI enthusiast
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Final-year EEE student building{" "}
              <span className="gradient-text">RPA & AI projects</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Learning-focused RPA developer — UiPath, n8n, AI
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg">
                <a href="#portfolio">View Work</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Get in touch</a>
              </Button>
            </div>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square">
              <img
                src={profileImage}
                alt="Sri Anjhanee - RPA and AI Automation Specialist"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.figure>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-card/50 border-y border-border/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-2 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I'm a final-year Electrical & Electronics Engineering student learning RPA and AI automation. I'm building projects using UiPath and n8n, exploring AI models for natural language handling and automation workflows.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Building foundation in automation design, process mapping and agentic automation concepts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Learning hands-on with UiPath Studio, n8n, Google Sheets integrations and WhatsApp Business API</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Passionate about building practical student projects and exploring automation solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Open to internships, mentorship and project collaborations</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center md:justify-end">
                <img
                  src={profileImage}
                  alt="Sri Anjhanee"
                  className="w-48 h-48 rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-0">Portfolio</h2>
            <p className="text-muted-foreground">Student projects — RPA, automation, and AI</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectDialog
                key={index}
                title={project.title}
                description={project.description}
                tech={project.tech}
                fullDescription={project.fullDescription}
                features={project.features}
                github={project.github}
                demo={project.demo}
              >
                <div className="cursor-pointer">
                  <ProjectCard {...project} index={index} />
                </div>
              </ProjectDialog>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-card/50 border-y border-border/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Skills
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-sm px-4 py-2"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-base mb-2 text-foreground">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                {cert.year && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {cert.year}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="bg-card/50 border-y border-border/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Education
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {education.map((edu, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-base text-foreground">
                      {edu.degree}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {edu.location}
                  </p>
                  <p className="text-sm text-primary font-medium mt-2">
                    {edu.grade}
                  </p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground">
              Open to internships, mentorship and project collaborations
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <Button asChild variant="outline" size="sm">
                <a
                  href="mailto:anjhaneek@gmail.com"
                  aria-label="Email Sri Anjhanee"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a
                  href="https://www.linkedin.com/in/sri-anjhanee"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Sri Anjhanee's LinkedIn profile"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a
                  href="https://github.com/SriAnjhanee"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Sri Anjhanee's GitHub profile"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30">
        <div className="section-container py-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <a
                href="mailto:anjhaneek@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email Sri Anjhanee"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sri-anjhanee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Visit Sri Anjhanee's LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/SriAnjhanee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Visit Sri Anjhanee's GitHub profile"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
            <p className="text-center text-muted-foreground text-sm">
              © 2025 Sri Anjhanee. Learning and building with RPA & AI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
