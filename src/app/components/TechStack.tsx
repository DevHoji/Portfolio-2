'use client';

import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const technologies = [
  {
    name: 'Next.js',
    icon: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg'
  },
  {
    name: 'React',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
  },
  {
    name: 'JavaScript',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
  },
  {
    name: 'TypeScript',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
  },
  {
    name: 'Vite',
    icon: 'https://vitejs.dev/logo.svg'
  },
  {
    name: 'MongoDB',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg'
  },
  {
    name: 'PostgreSQL',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg'
  },
  {
    name: 'MySQL',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg'
  },
  {
    name: 'Node.js',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
  }
];

export default function TechStack() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h4"
        component="h3"
        sx={{
          mb: 6,
          color: '#9C90DE',
          textAlign: 'center',
          fontWeight: 600
        }}
      >
        Technologies I Work With
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {technologies.map((tech, index) => (
          <Grid item key={tech.name} xs={6} sm={4} md={2.4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={tech.icon}
                  alt={tech.name}
                  sx={{
                    width: 50,
                    height: 50,
                    mb: 2,
                    filter: 'brightness(0.9)',
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    textAlign: 'center',
                  }}
                >
                  {tech.name}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
