'use client';

import { Box, Container, Typography, Paper, Grid, IconButton, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { LinkedIn, Email, Telegram, GitHub } from '@mui/icons-material';
import Image from 'next/image';

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <LinkedIn sx={{ fontSize: 28 }} />,
    href: "https://www.linkedin.com/in/hojiwakyohanis?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    color: "#0077B5",
    hoverColor: "#0091DA",
  },
  {
    name: "Email",
    icon: <Email sx={{ fontSize: 28 }} />,
    href: "mailto:yabsirahoji@gamil.com",
    color: "#EA4335",
    hoverColor: "#FF5A5F",
  },
  {
    name: "Telegram",
    icon: <Telegram sx={{ fontSize: 28 }} />,
    href: "https://t.me/@hasettttttt",
    color: "#0088cc",
    hoverColor: "#00A3F5",
  },
  {
    name: "GitHub",
    icon: <GitHub sx={{ fontSize: 28 }} />,
    href: "https://github.com/DevHoji",
    color: "#333",
    hoverColor: "#555",
  },
];

export default function Contact() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: 12,
        background: 'linear-gradient(180deg, rgba(19,47,76,0.6) 0%, rgba(19,47,76,0.8) 100%)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              mb: 6,
              textAlign: 'center',
              fontWeight: 700,
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Let's Connect
          </Typography>

          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    background: 'rgba(19,47,76,0.4)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                    Get in Touch
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8 }}>
                    I'm always open to new opportunities, collaborations, and interesting projects. 
                    Whether you have a question or just want to say hi, feel free to reach out!
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    {socialLinks.map((social) => (
                      <motion.div
                        key={social.name}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconButton
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.name}
                          sx={{
                            color: social.color,
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            backdropFilter: 'blur(10px)',
                            p: 2,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              backgroundColor: 'rgba(255,255,255,0.1)',
                              color: social.hoverColor,
                            },
                          }}
                        >
                          {social.icon}
                        </IconButton>
                      </motion.div>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    background: 'rgba(19,47,76,0.4)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      maxWidth: 300,
                      height: 300,
                      position: 'relative',
                      mb: 3,
                    }}
                  >
                    <Image
                      src="/images/contact-illustration.svg"
                      alt="Contact Illustration"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Available for Opportunities
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                    Currently open to full-time positions and freelance projects
                  </Typography>
                  <Button
                    component={motion.button}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    variant="contained"
                    size="large"
                    href="mailto:your.email@example.com"
                    sx={{
                      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      borderRadius: '50px',
                    }}
                  >
                    Send Message
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
