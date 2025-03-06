import React from "react";
import { motion } from "framer-motion";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
} from "@mui/material";
import { Work, School } from "@mui/icons-material";

interface Experience {
  title: string;
  company: string;
  period: string;
  type: "work" | "education";
  description: string[];
  technologies?: string[];
}

const experiences: Experience[] = [
  {
    title: "Software Developer",
    company: "Energy Toolbase",
    period: "2024 - 2025",
    type: "work",
    description: [
      "Developed and optimized AdminJS admin panel for efficient customer data management",
      "Built EARN rewards system with full-stack implementation from database design to UI",
      "Implemented AppFlow for feature deployment control and BullMQ for task management",
      "Led daily stand-ups and product showcases to enhance cross-department communication"
    ],
    technologies: ["React", "Node.js", "TypeScript", "Docker", "AWS"],
  },
  {
    title: "Software Engineer",
    company: "headversity",
    period: "2022 - 2023",
    type: "work",
    description: [
      "Built and maintained full-stack features using React and Node.js",
      "Implemented reward system with custom database schema and RESTful APIs",
      "Led dynamic update system for targeted feature deployments",
      "Developed queueing system for automated task management"
    ],
    technologies: ["React", "Node.js", "TypeScript", "Docker", "AWS"],
  },
  {
    title: "Software Developer",
    company: "Pandell Technologies",
    period: "2021 - 2023",
    type: "work",
    description: [
      "Developed RESTful API for pipeline integrity reports using LandWorks data",
      "Integrated GIS mapping features using Leaflet framework",
      "Created comprehensive development documentation and guides",
      "Established mentorship program for new developers"
    ],
    technologies: ["React", "TypeScript", "Spring Boot", "AWS", "Docker"],
  },
  {
    title: "Software Engineer Intern",
    company: "Zephyr Sleep Technologies",
    period: "2018 - 2019",
    type: "work",
    description: [
      "Led migration from WPF .NET Framework to Android platform",
      "Created debugging tools for Android development workflow",
      "Implemented developer onboarding program",
      "Maintained technical documentation for development team"
    ],
    technologies: ["React", ".NET Core", "SQL Server", "WPF"],
  },
  {
    title: "Bachelor of Science in Computer Science",
    company: "University of Calgary",
    period: "2014 - 2022",
    type: "education",
    description: ["Internship Program"],
    technologies: [],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Experience: React.FC = () => {
  return (
    <Box
      component="section"
      id="experience"
      sx={{
        py: 12,
        background: (theme) => theme.palette.background.default,
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" component="h2" align="center" sx={{ mb: 8 }}>
            Experience & Education
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                sx={{
                  mb: 4,
                  position: "relative",
                  overflow: "visible",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: -8,
                    top: 0,
                    bottom: 0,
                    width: 4,
                    backgroundColor: "primary.main",
                    borderRadius: 2,
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    {exp.type === "work" ? (
                      <Work color="primary" />
                    ) : (
                      <School color="primary" />
                    )}
                    <Typography variant="h6" component="h3">
                      {exp.title}
                    </Typography>
                  </Box>

                  <Typography color="primary" gutterBottom>
                    {exp.company}
                  </Typography>

                  <Typography color="text.secondary" sx={{ mb: 2 }}>
                    {exp.period}
                  </Typography>

                  <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                    {exp.description.map((desc, i) => (
                      <Typography component="li" key={i} sx={{ mb: 1 }}>
                        {desc}
                      </Typography>
                    ))}
                  </Box>

                  {exp.technologies && (
                    <Box
                      sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}
                    >
                      {exp.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;
