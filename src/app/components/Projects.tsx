'use client';

import { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, IconButton } from '@mui/material';
import { GitHub, Launch, Info } from '@mui/icons-material';
import { motion } from 'framer-motion';
import ProjectDetails from './ProjectDetails';

const projects = [
  {
    id: 3,
    title: "LADX Startup",
    description:
      "A dynamic startup website showcasing services and company information with modern design.",
    image: "/images/myimages/Screenshot (263)(1)(1).png",
    technologies: ["HTML", "JavaScript", "Material-UI", "Tailwind  css"],
    keyFeatures: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Payment integration with Stripe",
      "Order tracking and management",
    ],
    technicalChallenges: [
      "Implementing real-time inventory management",
      "Optimizing database queries for large product catalogs",
      "Handling concurrent user sessions and cart management",
      "Ensuring secure payment processing",
    ],
    demoUrl: "https://ladx.com",
    githubUrl: "https://github.com/DevHoji/Lad-x-Frontend",
  },
  {
    id: 4,
    title: "Dama Dash Delivery",
    description:
      "A modern delivery startup website with real-time tracking and seamless ordering system.",
    image: "/images/myimages/Damadash.jpg",
    technologies: ["Node.js", "postgresql", "Tailwind CSS"],
    keyFeatures: [
      "Real-time collaboration",
      "Task assignment and tracking",
      "Project timeline visualization",
      "File attachment support",
      "Activity notifications",
    ],
    technicalChallenges: [
      "Implementing real-time updates with WebSocket",
      "Managing complex state with multiple users",
      "Optimizing performance for large datasets",
      "Handling file uploads and storage",
    ],
    demoUrl: "https://damadash.com",
    githubUrl: "https://github.com/DevHoji/Backend",
  },
  {
    id: 5,
    title: "Evangadi Forum",
    description:
      "A Full stack website that a student asks and Get answer for their question and also post any answer for other students questions website using  React, Tailwindcss, and JavaScript, Node, Mysql .",
    image: "/images/myimages/landingPage.jpg",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Node.js", "Mysql"],
    keyFeatures: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Payment integration with Stripe",
      "Order tracking and management",
    ],
    technicalChallenges: [
      "Implementing real-time inventory management",
      "Optimizing database queries for large product catalogs",
      "Handling concurrent user sessions and cart management",
      "Ensuring secure payment processing",
    ],
    demoUrl: "https://evangadi-forum-frontend-eight.vercel.app/login",
    githubUrl: "https://github.com/DevHoji/Evangadi-Forum-Backend",
  },
  {
    id: 6,
    title: "A student Management System",
    description:
      "A student management system with updating students information and register any new student .",
    image: "/images/myimages/studentmanagement.jpeg",
    technologies: ["PHP", "HTML", "CSS"],
    keyFeatures: [
      "Real-time collaboration",
      "Task assignment and tracking",
      "Project timeline visualization",
      "File attachment support",
      "Activity notifications",
    ],
    technicalChallenges: [
      "Implementing real-time updates with WebSocket",
      "Managing complex state with multiple users",
      "Optimizing performance for large datasets",
      "Handling file uploads and storage",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/DevHoji/student-management",
  },
  {
    id: 7,
    title: "ecommerce Website ",
    description:
      "A full-stack Amazon clone with user authentication, product catalog, cart functionality, and payment processing.",
    image: "/images/myimages/ecommerce.jpeg",
    technologies: ["React", "Node.js", "Firebase", "Stripe"],
    keyFeatures: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Payment integration with Stripe",
      "Order tracking and management",
    ],
    technicalChallenges: [
      "Implementing real-time inventory management",
      "Optimizing database queries for large product catalogs",
      "Handling concurrent user sessions and cart management",
      "Ensuring secure payment processing",
    ],
    demoUrl: "https://amazon-clone.yourdomain.com",
    githubUrl: "https://github.com/DevHoji/amazon-api-deploy",
  },
  {
    id: 8,
    title: "Movies",
    description:
      "A Netflix clone featuring movie trailers, user profiles, and a responsive design that mirrors the Netflix viewing experience.",
    image: "/images/myimages/movies.jpeg",
    technologies: ["React", "Firebase", "TMDB API", "CSS"],
    keyFeatures: [
      "Real-time collaboration",
      "Task assignment and tracking",
      "Project timeline visualization",
      "File attachment support",
      "Activity notifications",
    ],
    technicalChallenges: [
      "Implementing real-time updates with WebSocket",
      "Managing complex state with multiple users",
      "Optimizing performance for large datasets",
      "Handling file uploads and storage",
    ],
    demoUrl: "https://netflix-clone-jh4r.vercel.app/",
    githubUrl: "https://github.com/DevHoji/Netflix-Clone",
  },
  {
    id: 9,
    title: "Calculator App",
    description:
      "A modern calculator application with advanced mathematical functions and a clean, intuitive interface.",
    image: "/images/myimages/calculator.png",
    technologies: ["JavaScript", "HTML", "CSS"],
    keyFeatures: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Payment integration with Stripe",
      "Order tracking and management",
    ],
    technicalChallenges: [
      "Implementing real-time inventory management",
      "Optimizing database queries for large product catalogs",
      "Handling concurrent user sessions and cart management",
      "Ensuring secure payment processing",
    ],
    demoUrl: "https://apple-calculatore-qqf7.vercel.app/",
    githubUrl: "https://github.com/DevHoji/i-phone-culculator-replica",
  },
  {
    id: 10,
    title: "Apple Clone (React)",
    description:
      "A React-based clone of the Apple website showcasing modern web development practices and responsive design.",
    image: "/images/myimages/apple.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    keyFeatures: [
      "Real-time collaboration",
      "Task assignment and tracking",
      "Project timeline visualization",
      "File attachment support",
      "Activity notifications",
    ],
    technicalChallenges: [
      "Implementing real-time updates with WebSocket",
      "Managing complex state with multiple users",
      "Optimizing performance for large datasets",
      "Handling file uploads and storage",
    ],
    demoUrl: "https://apple-react-project-lfqg.vercel.app/",
    githubUrl: "https://github.com/DevHoji/Apple-React-Project",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <Box
      component="section"
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
              color: '#9C90DE',
            }}
          >
            Featured Projects
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid item key={project.id} xs={12} md={6}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 2,
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <Box
                      sx={{
                        height: { xs: '200px', md: '250px' },
                        borderRadius: 1,
                        overflow: 'hidden',
                        mb: 2,
                        position: 'relative',
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center top',
                        }}
                      />
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        mb: 1,
                        fontWeight: 600,
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        mb: 2,
                        color: 'text.secondary',
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <IconButton
                        onClick={() => setSelectedProject(project)}
                        sx={{
                          color: '#9C90DE',
                          '&:hover': {
                            color: '#2196F3',
                            background: 'rgba(156, 144, 222, 0.1)',
                          },
                        }}
                      >
                        <Info />
                      </IconButton>
                      <IconButton
                        href={project.demoUrl}
                        target="_blank"
                        sx={{
                          color: '#9C90DE',
                          '&:hover': {
                            color: '#2196F3',
                            background: 'rgba(156, 144, 222, 0.1)',
                          },
                        }}
                      >
                        <Launch />
                      </IconButton>
                      <IconButton
                        href={project.githubUrl}
                        target="_blank"
                        sx={{
                          color: '#9C90DE',
                          '&:hover': {
                            color: '#2196F3',
                            background: 'rgba(156, 144, 222, 0.1)',
                          },
                        }}
                      >
                        <GitHub />
                      </IconButton>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </Box>
  );
}
