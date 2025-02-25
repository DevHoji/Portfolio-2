'use client';

import { Box, Container, Typography, Button, IconButton, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Telegram, Twitter, Email } from '@mui/icons-material';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Box
      component="main"
      sx={{
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background:
            "linear-gradient(135deg, rgba(16,20,38,0.9) 0%, rgba(32,41,76,0.9) 100%)",
          position: "relative",
          overflow: "hidden",
          paddingTop: { xs: "70px", md: "80px" }, // Account for navbar height
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="h6"
                sx={{
                  color: "#9C90DE",
                  mb: 2,
                  fontWeight: 500,
                }}
              >
                Hi, my name is
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  fontWeight: 700,
                  mb: 2,
                  background:
                    "linear-gradient(45deg, #fff 30%, rgba(255,255,255,0.8) 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Hojiwak Yohanis
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  color: "rgba(255,255,255,0.8)",
                  mb: 4,
                }}
              >
                Software Engineer
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                <Button
                  href="#about"
                  variant="contained"
                  size="large"
                  sx={{
                    background:
                      "linear-gradient(45deg, #9C90DE 30%, #2196F3 90%)",
                    color: "white",
                    px: 4,
                    py: 1.5,
                    borderRadius: "50px",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 15px rgba(156,144,222,0.3)",
                    },
                  }}
                >
                  Learn More About Me
                </Button>
                <Button
                  href="#"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "#9C90DE",
                    color: "#9C90DE",
                    px: 4,
                    py: 1.5,
                    borderRadius: "50px",
                    "&:hover": {
                      borderColor: "#2196F3",
                      color: "#2196F3",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 15px rgba(156,144,222,0.1)",
                    },
                  }}
                >
                  View My Resume
                </Button>
              </Box>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <motion.a
                  href="https://github.com/DevHoji"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GitHub sx={{ fontSize: 28, color: "#9C90DE" }} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/hojiwakyohanis?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LinkedIn sx={{ fontSize: 28, color: "#9C90DE" }} />
                </motion.a>
                <motion.a
                  href="https://t.me/@hasettttttt"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Telegram sx={{ fontSize: 28, color: "#9C90DE" }} />
                </motion.a>
                {/* <motion.a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter sx={{ fontSize: 28, color: "#9C90DE" }} />
                </motion.a> */}
                <motion.a
                  href="mailto:yabsirahoji@gmail.com"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Email sx={{ fontSize: 28, color: "#9C90DE" }} />
                </motion.a>
              </Box>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      <Box id="about">
        <About />
      </Box>

      <Box id="projects">
        <Projects />
      </Box>

      <Box id="contact">
        <Contact />
      </Box>

      <Footer />
    </Box>
  );
}
