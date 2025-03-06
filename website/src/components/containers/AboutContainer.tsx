import React from "react";
import { motion } from "framer-motion";
import { Container, Typography, Box, Grid, Chip } from "@mui/material";
import { Code, Storage, Cloud, Api } from "@mui/icons-material";
import profilePic from "../../assets/ProfilePic.png";

const AboutContainer: React.FC = () => {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: 12,
        background: (theme) => theme.palette.background.paper,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h2" component="h2" gutterBottom>
                About Me
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ color: "text.secondary" }}
              >
                I'm a passionate Full Stack Developer with extensive experience
                in building modern web applications. I specialize in React,
                TypeScript, Node.js, and cloud technologies.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ color: "text.secondary" }}
              >
                With a strong foundation in both frontend and backend
                development, I enjoy creating scalable solutions that solve
                real-world problems. I'm particularly interested in cloud
                architecture and microservices.
              </Typography>
              <Box sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Chip
                  icon={<Code />}
                  label="Full Stack Development"
                  color="primary"
                  variant="outlined"
                />
                <Chip
                  icon={<Api />}
                  label="Microservices"
                  color="primary"
                  variant="outlined"
                />
                <Chip
                  icon={<Cloud />}
                  label="Cloud Architecture"
                  color="primary"
                  variant="outlined"
                />
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "300px",
                  height: "300px",
                  margin: "0 auto",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: -10,
                    left: -10,
                    right: 15,
                    bottom: -10,
                    border: "2px solid",
                    borderColor: "primary.main",
                    borderRadius: 2,
                  },
                }}
              >
                <Box
                  component="img"
                  src={profilePic}
                  alt="Profile"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 2,
                    position: "relative",
                    zIndex: 1,
                    objectFit: "cover",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutContainer;
