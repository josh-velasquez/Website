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
      { name: "React/Next.js", icon: <WebIcon /> },
      { name: "TypeScript", icon: <TypeScriptIcon /> },
      { name: "Redux/Context API", icon: <DataIcon /> },
      { name: "Responsive Design", icon: <SpeedIcon /> },
      { name: "Material UI/Tailwind", icon: <LanguageIcon /> },
    ]
  },
  {
    title: "Backend Development",
    icon: <CodeIcon fontSize="large" />,
    skills: [
      { name: "Node.js/Express", icon: <JavaScriptIcon /> },
      { name: "Spring Boot", icon: <CodeIcon /> },
      { name: ".NET Core", icon: <CodeIcon /> },
      { name: "RESTful APIs", icon: <ApiIcon /> },
      { name: "GraphQL", icon: <GraphQLIcon /> },
    ]
  },
  {
    title: "Database & Cache",
    icon: <StorageIcon fontSize="large" />,
    skills: [
      { name: "MongoDB", icon: <DatabaseIcon /> },
      { name: "PostgreSQL", icon: <StorageIcon /> },
      { name: "Redis", icon: <RedisIcon /> },
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
                      background: 'linear-gradient(145deg, rgba(25,15,15,0.9) 0%, rgba(25,15,15,0.6) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,99,99,0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        border: '1px solid rgba(255,99,99,0.3)',
                        boxShadow: '0 4px 20px rgba(255,99,99,0.2)',
                      },
                    }}
                  >
                    <CardContent>
                      <Box sx={{ textAlign: 'center', mb: 3 }}>
                        <Box sx={{ 
                          color: 'primary.main',
                          mb: 2,
                          '& > svg': {
                            filter: 'drop-shadow(0 0 8px rgba(255,99,99,0.3))',
                          }
                        }}>
                          {category.icon}
                        </Box>
                        <Typography variant="h6" component="h3" color="primary" gutterBottom>
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
                              p: 1,
                              borderRadius: 1,
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                bgcolor: 'rgba(255,99,99,0.1)',
                                transform: 'translateX(8px)',
                              },
                            }}
                          >
                            <Box sx={{ 
                              color: 'primary.main',
                              display: 'flex',
                              alignItems: 'center',
                              fontSize: '1.2rem',
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                filter: 'drop-shadow(0 0 4px rgba(255,99,99,0.5))',
                              }
                            }}>
                              {skill.icon}
                            </Box>
                            <Typography>{skill.name}</Typography>
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