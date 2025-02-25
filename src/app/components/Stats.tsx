'use client';

import { Box, Paper, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Timer, Folder } from '@mui/icons-material';

const stats = [
  {
    icon: <Timer sx={{ fontSize: 40 }} />,
    value: '2+',
    label: 'Years Experience',
    color: '#2196F3'
  },
  {
    icon: <Folder sx={{ fontSize: 40 }} />,
    value: '20+',
    label: 'Projects Completed',
    color: '#21CBF3'
  },
  {
    icon: <Code sx={{ fontSize: 40 }} />,
    value: '10+',
    label: 'Technologies',
    color: '#64B5F6'
  }
];

export default function Stats() {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        background: 'rgba(19,47,76,0.4)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    color: stat.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {stat.icon}
                </Box>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    background: `linear-gradient(45deg, ${stat.color} 30%, #21CBF3 90%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
