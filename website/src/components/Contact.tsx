import React from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';

const Contact: React.FC = () => {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: 8,
        background: (theme) => theme.palette.background.default
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" align="center" sx={{ mb: 6 }}>
          Contact Me
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Email color="primary" />
                      <Typography>your.email@example.com</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <LinkedIn color="primary" />
                      <Typography>
                        <a href="https://linkedin.com/in/joshleevelasquez" target="_blank" rel="noopener noreferrer">
                          LinkedIn Profile
                        </a>
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <GitHub color="primary" />
                      <Typography>
                        <a href="https://github.com/josh-velasquez" target="_blank" rel="noopener noreferrer">
                          GitHub Projects
                        </a>
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    type="email"
                  />
                  <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    required
                    multiline
                    rows={4}
                  />
                  <Button
                    variant="contained"
                    size="large"
                    type="submit"
                  >
                    Send Message
                  </Button>
                </Box>
              </form>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 