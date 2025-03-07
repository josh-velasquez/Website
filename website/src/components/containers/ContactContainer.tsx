import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Email,
  Send,
} from "@mui/icons-material";

const ContactContainer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // For now, we'll just show a success message
    setSnackbar({
      open: true,
      message: "Message sent successfully!",
      severity: "success",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: 12,
        background: (theme) => theme.palette.background.paper,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" component="h2" align="center" gutterBottom>
            Contact Me
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            sx={{ mb: 6 }}
          >
            Feel free to reach out for collaborations or just a friendly chat
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <TextField
                  required
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                />
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                />
                <TextField
                  required
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  variant="outlined"
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  startIcon={<Send />}
                  sx={{ alignSelf: "flex-start" }}
                >
                  Send Message
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  height: "100%",
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Connect With Me
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <IconButton
                    href="https://github.com/josh-velasquez"
                    target="_blank"
                    color="primary"
                    size="large"
                  >
                    <GitHub fontSize="large" />
                  </IconButton>
                  <IconButton
                    href="https://linkedin.com/in/josh-velasquez"
                    target="_blank"
                    color="primary"
                    size="large"
                  >
                    <LinkedIn fontSize="large" />
                  </IconButton>
                  <IconButton
                    href="mailto:josh.velasquez@example.com"
                    color="primary"
                    size="large"
                  >
                    <Email fontSize="large" />
                  </IconButton>
                </Box>
                <Typography variant="body1" color="text.secondary">
                  I'm always open to discussing new projects, creative ideas or
                  opportunities to be part of your visions.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactContainer; 