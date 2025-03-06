import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Card, CardContent, Grid, Box } from '@mui/material';
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Cloud as CloudIcon,
  Web as WebIcon,
  Language as LanguageIcon,
  Architecture as ArchitectureIcon,
  Terminal as TerminalIcon,
  DataObject as DataIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  Api as ApiIcon,
  AutoAwesome as TestingIcon,
  Javascript as JavaScriptIcon,
  IntegrationInstructions as TypeScriptIcon,
  Storage as DatabaseIcon,
  CloudQueue as AwsIcon,
  Memory as RedisIcon,
  Hub as GraphQLIcon,
} from '@mui/icons-material';

interface Skill {
  name: string;
  icon: React.ReactElement;
}

interface SkillCategory {
  title: string;
  icon: React.ReactElement;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: <WebIcon fontSize="large" />,
    skills: [
      { name: "React", icon: <WebIcon /> },
      { name: "TypeScript", icon: <TypeScriptIcon /> },
      { name: "Redux/Context API", icon: <DataIcon /> },
      { name: "Responsive Design", icon: <SpeedIcon /> },
      { name: "Material UI", icon: <LanguageIcon /> },
    ]
  },
  {
    title: "Backend Development",
    icon: <CodeIcon fontSize="large" />,
    skills: [
      { name: "Node.js/Express", icon: <JavaScriptIcon /> },
      { name: "GraphQL", icon: <GraphQLIcon /> },
      { name: "Spring Boot", icon: <CodeIcon /> },
      { name: ".NET Core", icon: <CodeIcon /> },
      { name: "RESTful APIs", icon: <ApiIcon /> },
    ]
  },
  {
    title: "Database & Cache",
    icon: <StorageIcon fontSize="large" />,
    skills: [
      { name: "PostgreSQL", icon: <StorageIcon /> },
      { name: "Redis", icon: <RedisIcon /> },
      { name: "MySQL", icon: <DatabaseIcon /> },
      { name: "Data Modeling", icon: <ArchitectureIcon /> },
      { name: "Query Optimization", icon: <SpeedIcon /> },
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: <CloudIcon fontSize="large" />,
    skills: [
      { name: "Docker", icon: <StorageIcon /> },
      { name: "Kubernetes", icon: <CloudIcon /> },
      { name: "AWS Services", icon: <AwsIcon /> },
      { name: "CI/CD", icon: <TerminalIcon /> },
      { name: "Infrastructure as Code", icon: <ArchitectureIcon /> },
    ]
  },
  {
    title: "Architecture",
    icon: <ArchitectureIcon fontSize="large" />,
    skills: [
      { name: "Microservices", icon: <ApiIcon /> },
      { name: "System Design", icon: <ArchitectureIcon /> },
      { name: "Design Patterns", icon: <DataIcon /> },
      { name: "Security", icon: <SecurityIcon /> },
      { name: "Performance", icon: <SpeedIcon /> },
    ]
  },
  {
    title: "Testing & Quality",
    icon: <TestingIcon fontSize="large" />,
    skills: [
      { name: "Unit Testing", icon: <TestingIcon /> },
      { name: "Integration Testing", icon: <ApiIcon /> },
      { name: "E2E Testing", icon: <SpeedIcon /> },
      { name: "TDD", icon: <ArchitectureIcon /> },
      { name: "Code Quality", icon: <SecurityIcon /> },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Skills: React.FC = () => {
  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: 12,
        background: (theme) => theme.palette.background.default,
        minHeight: '100vh',
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
            Technical Skills
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {skillCategories.map((category, index) => (
              <Grid item xs={12} sm={6} md={4} key={category.title}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      background: 'linear-gradient(145deg, rgba(31, 27, 46, 0.6) 0%, rgba(31, 27, 46, 0.9) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(149, 128, 255, 0.1)',
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
                        background: 'linear-gradient(90deg, transparent, rgba(149, 128, 255, 0.1), transparent)',
                        transform: 'translateX(-100%)',
                        transition: 'transform 0.5s ease',
                      },
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        border: '1px solid rgba(149, 128, 255, 0.3)',
                        boxShadow: '0 8px 30px rgba(149, 128, 255, 0.15)',
                        '&::before': {
                          transform: 'translateX(100%)',
                        },
                      },
                    }}
                  >
                    <CardContent>
                      <Box sx={{ 
                        textAlign: 'center', 
                        mb: 3,
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: '-10px',
                          left: '50%',
                          width: '40px',
                          height: '2px',
                          background: 'linear-gradient(90deg, rgba(149, 128, 255, 0), rgba(149, 128, 255, 0.5), rgba(149, 128, 255, 0))',
                          transform: 'translateX(-50%)',
                        }
                      }}>
                        <Box sx={{ 
                          color: 'primary.main',
                          mb: 2,
                          transform: 'scale(1.2)',
                          '& > svg': {
                            filter: 'drop-shadow(0 0 8px rgba(149, 128, 255, 0.5))',
                          }
                        }}>
                          {category.icon}
                        </Box>
                        <Typography 
                          variant="h6" 
                          component="h3" 
                          color="primary" 
                          gutterBottom
                          sx={{
                            fontWeight: 600,
                            textShadow: '0 0 20px rgba(149, 128, 255, 0.3)',
                          }}
                        >
                          {category.title}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {category.skills.map((skill) => (
                          <Box
                            key={skill.name}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                              p: 1.5,
                              borderRadius: '8px',
                              background: 'rgba(149, 128, 255, 0.03)',
                              backdropFilter: 'blur(5px)',
                              transition: 'all 0.3s ease',
                              border: '1px solid rgba(149, 128, 255, 0.05)',
                              '&:hover': {
                                background: 'rgba(149, 128, 255, 0.1)',
                                transform: 'translateX(8px)',
                                border: '1px solid rgba(149, 128, 255, 0.2)',
                                boxShadow: '0 4px 15px rgba(149, 128, 255, 0.1)',
                              },
                            }}
                          >
                            <Box sx={{ 
                              color: 'primary.main',
                              display: 'flex',
                              alignItems: 'center',
                              fontSize: '1.2rem',
                              transition: 'all 0.2s ease',
                              '& > svg': {
                                filter: 'drop-shadow(0 0 4px rgba(149, 128, 255, 0.3))',
                              },
                              '&:hover': {
                                transform: 'scale(1.1)',
                                filter: 'drop-shadow(0 0 8px rgba(149, 128, 255, 0.5))',
                              }
                            }}>
                              {skill.icon}
                            </Box>
                            <Typography sx={{ 
                              fontWeight: 500,
                              color: 'text.primary',
                            }}>
                              {skill.name}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 