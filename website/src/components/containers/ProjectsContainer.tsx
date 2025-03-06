import React from "react";
import { motion } from "framer-motion";
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
} from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import twijjImage from "../../assets/twijj.png";
import typingDuckImage from "../../assets/typingduck.png";
import fibleImage from "../../assets/fiblepage.png";
import colourPickImage from "../../assets/colourpick.png";
import keyloggerImage from "../../assets/keylogger.png";
import strackerImage from "../../assets/stracker.png";

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
    title: "Twijj",
    description:
      "Full-stack streaming platform with React, Node.js, and Firebase. Features include live streaming, live chatting, user authentication, google auth integration, and more.",
    technologies: ["React", "Node.js", "Firebase", "Redux"],
    image: twijjImage,
    githubLink: "https://github.com/josh-velasquez/Twijj",
  },
  {
    title: "Typing Duck",
    description: "Typing test and typing speed test with React.",
    technologies: ["TypeScript", "React", "Material UI"],
    image: typingDuckImage,
    githubLink: "https://github.com/josh-velasquez/TypingDuck",
    liveLink: "https://josh-velasquez.github.io/TypingDuck/",
  },
  {
    title: "Fible",
    description:
      "Full-stack recipe sharing platform with React, .NET, and SQLite.",
    technologies: ["TypeScript", "React", ".NET", "SQLite", "Material UI"],
    image: fibleImage,
    githubLink: "https://github.com/josh-velasquez/Fible",
  },
  {
    title: "Stracker",
    description:
      "Stock tracker application with JavaScript. Utilizes Yahoo Finance API to fetch stock data and GMail integration to send email alerts.",
    technologies: ["JavaScript", "HTML", "CSS"],
    image: strackerImage,
    githubLink: "https://github.com/yourusername/project4",
  },
  {
    title: "Colour Pick",
    description:
      "Colour picker application for determining the dominant colour of an image.",
    technologies: ["WPF", "C#"],
    image: colourPickImage,
    githubLink: "https://github.com/josh-velasquez/ColourPick",
  },
  {
    title: "KeyLogger",
    description:
      "Logs keystrokes indiscreetly or discreetly with customizable settings.",
    technologies: ["WPF", "C#"],
    image: keyloggerImage,
    githubLink: "https://github.com/josh-velasquez/KeyLogger",
  },
];

const ProjectsContainer: React.FC = () => {
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: 8,
        background: (theme) => theme.palette.background.paper,
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
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: "cover",
                    }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "300px",
                    }}
                  >
                    <Box>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {project.description}
                      </Typography>
                      <Box
                        sx={{ mb: 2, display: "flex", flexWrap: "wrap", gap: 1 }}
                      >
                        {project.technologies.map((tech) => (
                          <Chip key={tech} label={tech} size="small" />
                        ))}
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", gap: 2, mt: "auto" }}>
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
