import React from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Box,
  Chip,
} from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Redux", "Stripe"],
    image: "/project1.jpg",
    githubLink: "https://github.com/yourusername/project1",
    liveLink: "https://project1.com"
  },
  {
    title: "Cloud-Based Task Manager",
    description: "A real-time task management application built with microservices architecture. Includes team collaboration, file sharing, and automated notifications.",
    technologies: ["TypeScript", "Spring Boot", "AWS", "Docker", "PostgreSQL"],
    image: "/project2.jpg",
    githubLink: "https://github.com/yourusername/project2",
    liveLink: "https://project2.com"
  },
  {
    title: "Social Media Analytics Dashboard",
    description: "Analytics dashboard for social media metrics. Features real-time data processing, customizable widgets, and automated reporting.",
    technologies: ["Next.js", "GraphQL", "Redis", "D3.js", "MongoDB"],
    image: "/project3.jpg",
    githubLink: "https://github.com/yourusername/project3"
  },
  {
    title: "Healthcare Management System",
    description: "Comprehensive healthcare management system with appointment scheduling, patient records, and billing integration.",
    technologies: ["React", ".NET Core", "SQL Server", "Azure", "JWT"],
    image: "/project4.jpg",
    githubLink: "https://github.com/yourusername/project4",
    liveLink: "https://project4.com"
  },
  {
    title: "Real-Time Chat Application",
    description: "Feature-rich chat application with real-time messaging, file sharing, and video calls. Supports multiple platforms and offline messaging.",
    technologies: ["React Native", "Node.js", "Socket.io", "WebRTC", "Redis"],
    image: "/project5.jpg",
    githubLink: "https://github.com/yourusername/project5"
  },
  {
    title: "DevOps Automation Platform",
    description: "CI/CD automation platform with custom pipeline management, monitoring, and deployment automation for multiple cloud providers.",
    technologies: ["Vue.js", "Go", "Kubernetes", "Terraform", "Prometheus"],
    image: "/project6.jpg",
    githubLink: "https://github.com/yourusername/project6",
    liveLink: "https://project6.com"
  }
];

const ProjectsContainer: React.FC = () => {
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: 8,
        background: (theme) => theme.palette.background.paper
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" align="center" sx={{ mb: 6 }}>
          Featured Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={project.title}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies.map((tech) => (
                        <Chip key={tech} label={tech} size="small" />
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Button
                        variant="contained"
                        startIcon={<GitHub />}
                        href={project.githubLink}
                        target="_blank"
                      >
                        Code
                      </Button>
                      {project.liveLink && (
                        <Button
                          variant="outlined"
                          startIcon={<Launch />}
                          href={project.liveLink}
                          target="_blank"
                        >
                          Live Demo
                        </Button>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectsContainer; 