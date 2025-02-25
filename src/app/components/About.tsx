'use client';

import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import TechStack from './TechStack';
import Stats from './Stats';

export default function About() {
  return (
    <Box
      component="section"
      sx={{
        py: 12,
        background:
          "linear-gradient(180deg, rgba(19,47,76,0.4) 0%, rgba(19,47,76,0.6) 100%)",
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
              textAlign: "center",
              fontWeight: 700,
              background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About Me
          </Typography>

          <Grid container spacing={4}>
            {/* Introduction */}
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
                    height: "100%",
                    background: "rgba(19,47,76,0.4)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    Who I Am
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ color: "text.secondary", lineHeight: 1.8 }}
                  >
                    I'm Hojiwak Yohanis, a passionate Web Developer with with a
                    keen interest in crafting innovative digital experiences. My
                    journey in software development has been marked by a
                    constant drive to create innovative solutions and deliver
                    exceptional results.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.secondary", lineHeight: 1.8 }}
                  >
                    With a track record of successfully completing over 20
                    projects, I've developed expertise in both frontend and
                    backend development, always staying current with the latest
                    technologies and best practices.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>

            {/* Stats */}
            <Grid item xs={12} md={6}>
              <Stats />
            </Grid>

            {/* Technologies */}
            <Grid item xs={12}>
              <TechStack />
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
