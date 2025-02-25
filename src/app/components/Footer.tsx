'use client';

import { Box, Container, Grid, Typography, IconButton, Link as MuiLink } from '@mui/material';
import { motion } from 'framer-motion';
import { LinkedIn, GitHub, Telegram, Email, KeyboardArrowUp } from '@mui/icons-material';
import Link from 'next/link';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <LinkedIn />,
    href: "https://www.linkedin.com/in/hojiwakyohanis?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    color: "#0077B5",
  },
  {
    name: "GitHub",
    icon: <GitHub />,
    href: "https://github.com/DevHoji",
    color: "#333",
  },
  {
    name: "Telegram",
    icon: <Telegram />,
    href: "https://t.me/@hasettttttt",
    color: "#0088cc",
  },
  {
    name: "Email",
    icon: <Email />,
    href: "mailto:yabsirahoji@gmail.com",
    color: "#EA4335",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        background: 'linear-gradient(180deg, rgba(19,47,76,0.8) 0%, rgba(19,47,76,1) 100%)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Name */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                }}
              >
                Hojiwak
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #21CBF3 30%, #90CAF9 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                  ml: 1,
                }}
              >
                Yohanis
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              Creating elegant solutions through code
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Grid container spacing={1}>
              {quickLinks.map((link) => (
                <Grid item xs={6} key={link.name}>
                  <MuiLink
                    component={Link}
                    href={link.href}
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    {link.name}
                  </MuiLink>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Connect With Me
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
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
                    sx={{
                      color: 'text.secondary',
                      '&:hover': {
                        color: social.color,
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Copyright and Back to Top */}
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © {new Date().getFullYear()} Made with ❤️ by Hojiwak Yohanis. All rights reserved.
          </Typography>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconButton
              onClick={scrollToTop}
              sx={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              <KeyboardArrowUp />
            </IconButton>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
