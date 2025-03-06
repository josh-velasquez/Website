import React from "react";
import { motion } from "framer-motion";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
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
      "Built EARN rewards system with full-stack implementation",
      "Implemented AppFlow for feature deployment control"
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
      "Implemented reward system with custom database schema",
      "Led dynamic update system for targeted feature deployments"
    ],
    technologies: ["React", "Node.js", "TypeScript", "Docker", "AWS"],
  },
  {
    title: "Software Developer",
    company: "Pandell Technologies",
    period: "2021 - 2023",
    type: "work",
    description: [
      "Developed RESTful API for pipeline integrity reports",
      "Integrated GIS mapping features using Leaflet framework",
      "Created comprehensive development documentation"
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
      "Created debugging tools for Android development",
      "Implemented developer onboarding program"
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


const ExperienceContainer: React.FC = () => {
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

        <Box sx={{ position: 'relative' }}>
          {/* Enhanced Timeline */}
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '4px',
              height: '100%',
              background: 'linear-gradient(180deg, rgba(149, 128, 255, 0.05) 0%, rgba(149, 128, 255, 0.3) 15%, rgba(149, 128, 255, 0.3) 85%, rgba(149, 128, 255, 0.05) 100%)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(149, 128, 255, 0.8) 0%, rgba(149, 128, 255, 0.4) 100%)',
                boxShadow: '0 0 20px rgba(149, 128, 255, 0.5)',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(149, 128, 255, 0.4) 0%, rgba(149, 128, 255, 0.8) 100%)',
                boxShadow: '0 0 20px rgba(149, 128, 255, 0.5)',
              },
              zIndex: 0,
            }}
          />

          <Box sx={{ position: 'relative', zIndex: 1 }}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                    mb: 4,
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '50%',
                      [index % 2 === 0 ? 'right' : 'left']: 'calc(100% - 10px)',
                      width: '60px',
                      height: '2px',
                      background: 'linear-gradient(90deg, rgba(149, 128, 255, 0.1), rgba(149, 128, 255, 0.3))',
                      transform: index % 2 === 0 ? 'none' : 'scaleX(-1)',
                    },
                  }}
                >
                  <Card
                    sx={{
                      width: { xs: '100%', md: '45%' },
                      background: 'linear-gradient(165deg, rgba(31, 27, 46, 0.4) 0%, rgba(31, 27, 46, 0.7) 100%)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(149, 128, 255, 0.08)',
                      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent 0%, rgba(149, 128, 255, 0.08) 50%, transparent 100%)',
                        transform: 'translateX(-200%)',
                        transition: 'transform 0.7s ease',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-10%',
                        width: '120%',
                        height: '100%',
                        background: 'linear-gradient(180deg, transparent, rgba(149, 128, 255, 0.03), transparent)',
                        transform: 'skewX(-15deg)',
                        transition: 'transform 0.7s ease',
                      },
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: `translateX(${index % 2 === 0 ? '-8px' : '8px'}) translateY(-4px)`,
                        border: '1px solid rgba(149, 128, 255, 0.15)',
                        boxShadow: '0 8px 30px rgba(149, 128, 255, 0.12)',
                        '&::before': {
                          transform: 'translateX(200%)',
                        },
                        '&::after': {
                          transform: 'skewX(-15deg) translateX(10%)',
                        },
                        '& .timeline-dot': {
                          transform: 'translateY(-50%) scale(1.3)',
                          boxShadow: '0 0 20px rgba(149, 128, 255, 0.7)',
                        }
                      },
                    }}
                  >
                    <CardContent sx={{ 
                      p: 3,
                      position: 'relative',
                      '&:last-child': { pb: 3 },
                    }}>
                      <Box
                        className="timeline-dot"
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          [index % 2 === 0 ? 'right' : 'left']: '-35px',
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          backgroundColor: 'primary.main',
                          boxShadow: '0 0 15px rgba(149, 128, 255, 0.5)',
                          transform: 'translateY(-50%)',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      />

                      <Box sx={{ 
                        display: "flex", 
                        alignItems: "flex-start", 
                        justifyContent: "space-between",
                        mb: 1 
                      }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                          {exp.type === "work" ? (
                            <Work sx={{ 
                              color: 'primary.main',
                              filter: 'drop-shadow(0 0 8px rgba(149, 128, 255, 0.5))',
                              fontSize: '1.2rem'
                            }} />
                          ) : (
                            <School sx={{ 
                              color: 'primary.main',
                              filter: 'drop-shadow(0 0 8px rgba(149, 128, 255, 0.5))',
                              fontSize: '1.2rem'
                            }} />
                          )}
                          <Box>
                            <Typography 
                              variant="h6" 
                              component="h3"
                              sx={{
                                fontWeight: 600,
                                fontSize: '1.1rem',
                                textShadow: '0 0 20px rgba(149, 128, 255, 0.3)',
                              }}
                            >
                              {exp.title}
                            </Typography>
                            <Typography 
                              color="primary" 
                              sx={{ 
                                fontWeight: 500,
                                fontSize: '0.9rem',
                              }}
                            >
                              {exp.company}
                            </Typography>
                          </Box>
                        </Box>
                        <Typography 
                          sx={{ 
                            fontSize: '0.8rem',
                            color: 'rgba(149, 128, 255, 0.8)',
                            fontWeight: 500,
                          }}
                        >
                          {exp.period}
                        </Typography>
                      </Box>

                      <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                        {exp.description.map((desc, i) => (
                          <Typography 
                            component="li" 
                            key={i} 
                            sx={{ 
                              mb: 0.5,
                              fontSize: '0.85rem',
                              '&::marker': {
                                color: 'primary.main',
                              }
                            }}
                          >
                            {desc}
                          </Typography>
                        ))}
                      </Box>

                      {exp.technologies && (
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mt: 1 }}>
                          {exp.technologies.map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              color="primary"
                              variant="outlined"
                              sx={{
                                height: '22px',
                                fontSize: '0.75rem',
                                borderColor: 'rgba(149, 128, 255, 0.3)',
                                '&:hover': {
                                  borderColor: 'rgba(149, 128, 255, 0.6)',
                                  boxShadow: '0 0 10px rgba(149, 128, 255, 0.2)',
                                },
                              }}
                            />
                          ))}
                        </Box>
                      )}
                    </CardContent>
                  </Card>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ExperienceContainer;
