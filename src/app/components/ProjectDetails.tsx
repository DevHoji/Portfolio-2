'use client';

import { Box, Typography, IconButton, Button, Chip, Container } from '@mui/material';
import { Close, GitHub, Launch } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectDetailsProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    keyFeatures: string[];
    technicalChallenges: string[];
    demoUrl: string;
    githubUrl: string;
  };
  onClose: () => void;
}

export default function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(10, 25, 47, 0.95)',
          backdropFilter: 'blur(10px)',
          zIndex: 2000,
          overflowY: 'auto',
          padding: '2rem 0',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ position: 'relative' }}>
            <IconButton
              onClick={onClose}
              sx={{
                position: 'absolute',
                right: 0,
                top: 0,
                color: 'white',
                '&:hover': {
                  color: '#9C90DE',
                },
              }}
            >
              <Close />
            </IconButton>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {/* Project Image */}
              <Box
                sx={{
                  width: '100%',
                  height: { xs: '200px', md: '400px' },
                  borderRadius: '16px',
                  overflow: 'hidden',
                  mb: 4,
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>

              {/* Project Title */}
              <Typography
                variant="h3"
                sx={{
                  mb: 3,
                  color: '#9C90DE',
                  fontWeight: 600,
                }}
              >
                {project.title}
              </Typography>

              {/* Technologies */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Technologies Used
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {project.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      sx={{
                        background: 'rgba(156, 144, 222, 0.1)',
                        color: '#9C90DE',
                        '&:hover': {
                          background: 'rgba(156, 144, 222, 0.2)',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Key Features */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Key Features
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  {project.keyFeatures.map((feature, index) => (
                    <Typography
                      key={index}
                      component="li"
                      sx={{
                        color: 'text.secondary',
                        mb: 1,
                      }}
                    >
                      {feature}
                    </Typography>
                  ))}
                </Box>
              </Box>

              {/* Technical Challenges */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Technical Challenges
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  {project.technicalChallenges.map((challenge, index) => (
                    <Typography
                      key={index}
                      component="li"
                      sx={{
                        color: 'text.secondary',
                        mb: 1,
                      }}
                    >
                      {challenge}
                    </Typography>
                  ))}
                </Box>
              </Box>

              {/* Action Buttons */}
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  justifyContent: 'center',
                  mt: 6,
                }}
              >
                <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                  <Button
                    href={project.demoUrl}
                    target="_blank"
                    variant="contained"
                    startIcon={<Launch />}
                    sx={{
                      background: 'linear-gradient(45deg, #9C90DE 30%, #2196F3 90%)',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      borderRadius: '50px',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 15px rgba(156,144,222,0.3)',
                      },
                    }}
                  >
                    Live Demo
                  </Button>
                </motion.div>

                <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                  <Button
                    href={project.githubUrl}
                    target="_blank"
                    variant="outlined"
                    startIcon={<GitHub />}
                    sx={{
                      borderColor: '#9C90DE',
                      color: '#9C90DE',
                      px: 4,
                      py: 1.5,
                      borderRadius: '50px',
                      '&:hover': {
                        borderColor: '#2196F3',
                        color: '#2196F3',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 15px rgba(156,144,222,0.1)',
                      },
                    }}
                  >
                    View Code
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Box>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
}
